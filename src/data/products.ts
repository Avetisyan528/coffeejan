import { Product } from '../types/products';

export const PRODUCTS: Product[] = [
    { id: 'jan-250g', slug: 'jan-250g', name: { en: 'Coffee JAN — 250 g', ru: 'Кофе JAN — 250 г', hy: 'Սուրճ JAN — 250 գ' }, description: { en: 'Coffee beans in a 250 g pack.', ru: 'Кофе в зёрнах в упаковке 250 г.', hy: 'Հատիկավոր սուրճ՝ 250 գ փաթեթով։' }, typeId: 'beans', categoryId: 'beans', imageKey: 'jan-250g', iconKey: 'cup' },
    { id: 'jan-750g', slug: 'jan-750g', name: { en: 'Coffee JAN — 750 g', ru: 'Кофе JAN — 750 г', hy: 'Սուրճ JAN — 750 գ' }, description: { en: 'Coffee beans in a 750 g pack.', ru: 'Кофе в зёрнах в упаковке 750 г.', hy: 'Հատիկավոր սուրճ՝ 750 գ փաթեթով։' }, typeId: 'beans', categoryId: 'beans', imageKey: 'jan-750g', iconKey: 'cup' },
    { id: 'jan-5kg', slug: 'jan-5kg', name: { en: 'Coffee JAN — 5 kg', ru: 'Кофе JAN — 5 кг', hy: 'Սուրճ JAN — 5 կգ' }, description: { en: 'Coffee beans in a 5 kg pack.', ru: 'Кофе в зёрнах в упаковке 5 кг.', hy: 'Հատիկավոր սուրճ՝ 5 կգ փաթեթով։' }, typeId: 'beans', categoryId: 'beans', imageKey: 'jan-5kg', iconKey: 'cup' },
];
