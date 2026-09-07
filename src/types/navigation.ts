import { NavKey, FooterContactKey, FooterCompanyKey, FooterProductKey } from './index';

export const NAV_LINKS: Array<{ key: NavKey; path: string }> = [
    { key: 'about', path: '/about' },
    { key: 'contact', path: '/contact' },
    { key: 'products', path: '/products' },
];

export const FOOTER_LINKS = {
    contact: [
        { key: 'email' as FooterContactKey, path: 'mailto:info@coffeejan.am' },
        { key: 'phone' as FooterContactKey, path: 'tel:+37495052549' },
        { key: 'address' as FooterContactKey, path: '/contact' },
    ],
    company: [
        { key: 'about' as FooterCompanyKey, path: '/about' },
        { key: 'contacts' as FooterCompanyKey, path: '/contact' },
    ],
    products: [
        { key: 'beans' as FooterProductKey, path: '/products/beans' },
        { key: 'sticks' as FooterProductKey, path: '/products/sticks' },
        { key: 'assorted' as FooterProductKey, path: '/products' },
    ],
};
