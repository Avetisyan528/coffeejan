import {ProductCategory} from '../types/products';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
    {
        id: 'beans',
        slug: 'beans',
        title: {
            en: 'Coffee Beans',
            ru: 'Кофейные зерна',
            hy: "Հատիկավոր սուրճ",
        },
        details: {
            en: 'Premium roasted beans',
            ru: 'Премиальные обжаренные зерна',
            hy: "Բարձրորակ բոված հատիկներ",
        },
    },
    {
        id: 'sticks',
        slug: 'sticks',
        title: {
            en: 'Coffee Sticks',
            ru: 'Кофейные стики',
            hy: "Սուրճի փաթեթներ",
        },
        details: {
            en: 'Convenient ready-mix instant sticks',
            ru: 'Удобные растворимые стики',
            hy: "Հարմար մեկանգամյա փաթեթներով լուծվող խառնուրդներ",
        },
    },
];