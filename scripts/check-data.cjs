// Dependency-free checks; run with Node 24: node scripts/check-data.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const {stripTypeScriptTypes} = require('node:module');

function load(file, name, globals = {}) {
    const source = fs.readFileSync(file, 'utf8').replace(/^import .*;\r?\n/gm, '').replace(/export /g, '');
    return vm.runInNewContext(stripTypeScriptTypes(source) + `\n${name}`, globals);
}
const armenian = load('src/data/armenian.ts', 'ARMENIAN');
const translations = load('src/data/translations.ts', 'TRANSLATIONS', {ARMENIAN: armenian});
assert.deepEqual(Object.keys(translations).sort(), ['en', 'hy', 'ru']);
function compareKeys(reference, actual) {
    if (!reference || typeof reference !== 'object') return;
    assert.deepEqual(Object.keys(actual).sort(), Object.keys(reference).sort());
    for (const key of Object.keys(reference)) compareKeys(reference[key], actual[key]);
}
compareKeys(translations.ru, armenian);
for (const translation of Object.values(translations)) {
    assert.equal(translation.pages.contact.info.email.value, 'info@coffeejan.am');
}
const products = load('src/data/products.ts', 'PRODUCTS');
const categories = load('src/data/categories.ts', 'PRODUCT_CATEGORIES');
assert.equal(new Set(products.map(product => product.slug)).size, products.length);
for (const item of [...products, ...categories]) {
    for (const value of [item.name || item.title, item.description || item.details]) {
        assert.deepEqual(Object.keys(value).sort(), ['en', 'hy', 'ru']);
        assert.match(value.hy, /[\u0531-\u0587]/);
    }
}
for (const product of products) assert.ok(categories.some(category => category.id === product.categoryId));
const navigation = load('src/types/navigation.ts', 'FOOTER_LINKS');
assert.equal(navigation.contact[0].path, 'mailto:info@coffeejan.am');
for (const link of navigation.products) {
    assert.ok(link.path === '/products' || categories.some(category => link.path === `/products/${category.slug}`));
}
const redirectScript = fs.readFileSync('public/404.html', 'utf8').match(/<script>([\s\S]*?)<\/script>/)[1];
for (const [hostname, pathname, expected] of [
    ['coffeejan.am', '/products/sticks/classic-stick', '/#/products/sticks/classic-stick?q=1'],
    ['coffeejan.am', '/coffeejan/', '/#/coffeejan/?q=1'],
    ['avetisyan528.github.io', '/coffeejan/products/sticks', '/coffeejan/#/products/sticks?q=1'],
]) {
    let target;
    vm.runInNewContext(redirectScript, {window: {location: {hostname, pathname, search: '?q=1', replace: value => {target = value;}}}});
    assert.equal(target, expected);
}
console.log(`Passed: locale structure, ${products.length} product translations and category references, footer destinations, and custom-domain/GitHub redirects.`);
