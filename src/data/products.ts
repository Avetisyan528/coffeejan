import { Product } from '../types/products';

const coffeeItems = [
    ...Array.from({ length: 92 }, (_, i) => {
        const index = i + 1;
        return {
            id: `coffeenew${index}`,
            slug: `coffeenew${index}`,
            name: {
                en: 'New Coffee Stick',
                ru: '*Translate to russian*',
                hy: "Սուրճի նոր փաթեթ",
            },
            description: {
                en: 'Our new coffee stick.',
                ru: '*Translate to russian*',
                hy: "Մեր նոր լուծվող սուրճը։",
            },
            typeId: 'instant',
            categoryId: 'sticks',
            imageKey: `coffeenew${index}`,
            iconKey: 'cup',
        };
    }),
];


export const PRODUCTS: Product[] = [
    {
        id: 'stick-classic',
        slug: 'classic-stick',
        name: {
            en: 'Classic Stick',
            ru: 'Классический Стик',
            hy: "Դասական սուրճ",
        },
        description: {
            en: 'Our most balanced instant blend.',
            ru: 'Наш самый сбалансированный растворимый кофе.',
            hy: "Մեր ամենահավասարակշռված լուծվող սուրճի խառնուրդը։",
        },
        typeId: 'instant',
        categoryId: 'sticks',
        imageKey: 'classic-stick',
        iconKey: 'cup',
    },
    {
        id: 'stick-mild',
        slug: 'mild-stick',
        name: {
            en: 'Mild Stick',
            ru: 'Мягкий Стик',
            hy: "Մեղմ սուրճ",
        },
        description: {
            en: 'Soft and smooth instant coffee with a gentle taste.',
            ru: 'Мягкий и нежный растворимый кофе с приятным вкусом.',
            hy: "Նուրբ և մեղմ լուծվող սուրճ՝ հաճելի համով։",
        },
        typeId: 'instant',
        categoryId: 'sticks',
        imageKey: 'mild-stick',
        iconKey: 'cup',
    },
    {
        id: 'stick-strong',
        slug: 'strong-strong',
        name: {
            en: 'Strong Stick',
            ru: 'Крепкий Стик',
            hy: "Թունդ սուրճ",
        },
        description: {
            en: 'Rich and intense instant coffee for a bold taste.',
            ru: 'Насыщенный и крепкий растворимый кофе для яркого вкуса.',
            hy: "Հագեցած և թունդ լուծվող սուրճ՝ արտահայտիչ համով։",
        },
        typeId: 'instant',
        categoryId: 'sticks',
        imageKey: 'strong-stick',
        iconKey: 'cup',
    },
    {
        id: 'stick-latte',
        slug: 'latte-stick',
        name: {
            en: 'Latte Stick',
            ru: 'Латте Стик',
            hy: "Լատտե",
        },
        description: {
            en: 'Creamy latte-style instant coffee.',
            ru: 'Растворимый кофе в стиле сливочного латте.',
            hy: "Լուծվող սուրճ՝ սերուցքային լատտեի համով։",
        },
        typeId: 'instant',
        categoryId: 'sticks',
        imageKey: 'latte-stick',
        iconKey: 'cup',
    },
    {
        id: 'stick-hot-chocolate',
        slug: 'hot-chocolate-stick',
        name: {
            en: 'Hot Chocolate Stick',
            ru: 'Горячий Шоколад Стик',
            hy: "Տաք շոկոլադ",
        },
        description: {
            en: 'Smooth and comforting hot chocolate drink.',
            ru: 'Мягкий и согревающий напиток из горячего шоколада.',
            hy: "Նուրբ և ջերմացնող տաք շոկոլադե ըմպելիք։",
        },
        typeId: 'instant',
        categoryId: 'sticks',
        imageKey: 'hot-chocolate-stick',
        iconKey: 'cup',
    },
    {
        id: 'stick-berry-tea',
        slug: 'berry-tea-stick',
        name: {
            en: 'Forest Berries Tea Stick',
            ru: 'Чай со вкусом Лесных Ягод Стик',
            hy: "Անտառային հատապտուղներով թեյ",
        },
        description: {
            en: 'Aromatic fruit tea with forest berries flavor.',
            ru: 'Ароматный фруктовый чай со вкусом лесных ягод.',
            hy: "Բուրավետ մրգային թեյ՝ անտառային հատապտուղների համով։",
        },
        typeId: 'tea',
        categoryId: 'sticks',
        imageKey: 'berry-tea-stick',
        iconKey: 'cup',
    },
    {
        id: 'stick-lime-tea',
        slug: 'lime-tea-stick',
        name: {
            en: 'Lime Tea Stick',
            ru: 'Чай с Лаймом Стик',
            hy: "Լայմով թեյ",
        },
        description: {
            en: 'Refreshing tea with a bright lime taste.',
            ru: 'Освежающий чай с ярким вкусом лайма.',
            hy: "Թարմացնող թեյ՝ լայմի վառ համով։",
        },
        typeId: 'tea',
        categoryId: 'sticks',
        imageKey: 'lime-tea-stick',
        iconKey: 'cup',
    },
    {
        id: 'stick-blackcurrant-tea',
        slug: 'blackcurrant-tea-stick',
        name: {
            en: 'Blackcurrant Tea Stick',
            ru: 'Чай с Черной Смородиной Стик',
            hy: "Սև հաղարջով թեյ",
        },
        description: {
            en: 'Fragrant tea with blackcurrant notes.',
            ru: 'Ароматный чай с нотками черной смородины.',
            hy: "Բուրավետ թեյ՝ սև հաղարջի նոտաներով։",
        },
        typeId: 'tea',
        categoryId: 'sticks',
        imageKey: 'blackcurrant-tea-stick',
        iconKey: 'cup',
    },
    {
        id: 'stick-peach-tea',
        slug: 'peach-tea-stick',
        name: {
            en: 'Peach Tea Stick',
            ru: 'Чай с Персиком Стик',
            hy: "Դեղձով թեյ",
        },
        description: {
            en: 'Light and aromatic tea with peach flavor.',
            ru: 'Легкий и ароматный чай со вкусом персика.',
            hy: "Թեթև և բուրավետ թեյ՝ դեղձի համով։",
        },
        typeId: 'tea',
        categoryId: 'sticks',
        imageKey: 'peach-tea-stick',
        iconKey: 'cup',
    },
    ...coffeeItems,
];