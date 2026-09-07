import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Используем иконки для раскрытия/сворачивания

// --- THEME COLOR DEFINITIONS (Matching MUI palette) ---
// Default Background: #000000 (Black)
const BG_COLOR = 'bg-black';
// Paper/Card Background: #111111 (Very Dark Grey)
const PAPER_COLOR = 'bg-[#111111]';
// Secondary/Accent Color: #c8a15a (Gold/Bronze)
//const ACCENT_COLOR_HEX = '#c8a15a';
const ACCENT_TEXT_COLOR = 'text-[#c8a15a]';
const ACCENT_BORDER_COLOR = 'border-[#c8a15a]';
const ACCENT_HOVER_SHADOW = 'hover:shadow-[#c8a15a]/50';
// Light Text: #ffffff (White)
const TEXT_COLOR = 'text-white';
const SUBTITLE_COLOR = 'text-gray-400';

// --- DATA DEFINITIONS ---

interface MarketingDetail {
    channel: string;
    description: string;
    examples: { type: 'social' | 'video' | 'retail' | 'education'; label: string; url: string; }[];
}

interface BrandData {
    name: string;
    focus: string;
    strategies: MarketingDetail[];
}

const LOCAL_BRANDS: BrandData[] = [
    {
        name: '“Neft” (Нефть)',
        focus: 'Премиальный Specialty, культовый бренд, сильное комьюнити.',
        strategies: [
            {
                channel: 'Социальные сети (Instagram, Telegram)',
                description: 'Визуально эстетичный контент, акцент на эстетике процесса обжарки и дегустации. Регулярные посты о новых сортах и их терруаре.',
                examples: [
                    { type: 'social', label: 'Instagram (Mock)', url: 'https://mock.instagram.com/neftcoffee' },
                    { type: 'social', label: 'Telegram-канал (Mock)', url: 'https://mock.telegram.org/neftroasters' },
                ],
            },
            {
                channel: 'D2C и Опыт',
                description: 'Прямые продажи через собственную сеть кофеен — лучшая реклама. Бариста как амбассадоры бренда.',
                examples: [
                    { type: 'retail', label: 'Концептуальные кофейни', url: 'https://mock.neftcoffee.ru/locations' },
                ],
            },
        ],
    },
    {
        name: 'Skuratov Coffee Roasters',
        focus: 'Specialty в массы, агрессивное региональное расширение, сильный SMM.',
        strategies: [
            {
                channel: 'Социальные сети и BTL',
                description: 'Юмористический и вирусный контент, ориентация на молодежную аудиторию. Активное участие в городских фестивалях и спортивных мероприятиях.',
                examples: [
                    { type: 'social', label: 'TikTok/Reels (Mock)', url: 'https://mock.tiktok.com/skuratov' },
                    { type: 'video', label: 'Реклама франшизы (Mock)', url: 'https://mock.youtube.com/skuratov_expansion' },
                ],
            },
            {
                channel: 'Инновации (Продукты)',
                description: 'Маркетинг, основанный на уникальных продуктах, таких как авторские напитки (например, "Раф на кедре") и сезонные новинки.',
                examples: [
                    { type: 'retail', label: 'Сезонное меню (Mock)', url: 'https://mock.skuratov.ru/seasonal' },
                ],
            },
        ],
    },
];

const GLOBAL_BRANDS: BrandData[] = [
    {
        name: 'Jacobs',
        focus: 'Масс-маркет, растворимый и молотый кофе. Эмоциональный маркетинг.',
        strategies: [
            {
                channel: 'ТВ и Массовые медиа',
                description: 'Массированная, эмоциональная реклама, нацеленная на семейное потребление и "волшебство аромата". Высокая частота показов.',
                examples: [
                    { type: 'video', label: 'ТВ-ролик "Аромат" (Mock)', url: 'https://mock.youtube.com/jacobs_magic_ad' },
                    { type: 'social', label: 'Страница VK (Mock)', url: 'https://mock.vk.com/jacobs' },
                ],
            },
            {
                channel: 'Ритейл и POS-материалы',
                description: 'Доминирование на полках, постоянные промо-акции, скидки, выкладка в "горячих зонах" супермаркетов.',
                examples: [
                    { type: 'retail', label: 'Промо-стенд в сети (Mock)', url: 'https://mock.retailer.ru/jacobs_promo' },
                ],
            },
        ],
    },
    {
        name: 'Lavazza',
        focus: 'Итальянское наследие, премиальность в масс-маркете, зерновой сегмент.',
        strategies: [
            {
                channel: 'Традиционные медиа и Спонсорство',
                description: 'Спонсорство культурных событий (например, кинофестивалей), акцент на итальянском качестве и эспрессо-традициях.',
                examples: [
                    { type: 'video', label: 'Реклама "Итальянский опыт" (Mock)', url: 'https://mock.youtube.com/lavazza_heritage' },
                ],
            },
            {
                channel: 'HoReCa B2B',
                description: 'Активные B2B продажи профессионального зерна и оборудования в кофейни, которые не имеют собственной обжарки. Обеспечение присутствия в меню.',
                examples: [
                    { type: 'education', label: 'Программа лояльности HoReCa (Mock)', url: 'https://mock.lavazza.ru/b2b' },
                ],
            },
        ],
    },
];

// Custom Card Component
const Card: React.FC<{ children: React.ReactNode, accent?: 'gold' | 'default' }> = ({ children, accent = 'default' }) => (
    <div className={`
      p-6 rounded-xl shadow-lg transition-all duration-300 group h-full
      ${PAPER_COLOR} 
      ${accent === 'gold'
        ? `border-2 ${ACCENT_BORDER_COLOR} ${ACCENT_HOVER_SHADOW} hover:shadow-xl`
        : 'border border-gray-800 hover:border-[#c8a15a]'
    }
    `}>
        {children}
    </div>
);

// Detail Section Component with Collapse Logic
const BrandDetailSection: React.FC<{ brand: BrandData }> = ({ brand }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card accent="gold">
            <div
                className={`flex justify-between items-center cursor-pointer pb-2 ${isExpanded ? 'border-b border-gray-700' : ''}`}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <h3 className={`text-2xl font-bold ${ACCENT_TEXT_COLOR}`}>
                    {brand.name}
                </h3>
                <button className={`p-1 rounded-full ${PAPER_COLOR} hover:bg-gray-800 transition-colors`}>
                    {isExpanded ? <ChevronUp className={`w-6 h-6 ${ACCENT_TEXT_COLOR}`} /> : <ChevronDown className={`w-6 h-6 ${ACCENT_TEXT_COLOR}`} />}
                </button>
            </div>

            <p className={`${SUBTITLE_COLOR} text-sm mt-1 mb-4`}>
                Основной фокус: {brand.focus}
            </p>

            {isExpanded && (
                <div className="pt-4 space-y-6 animate-in fade-in duration-500">
                    {brand.strategies.map((strategy, index) => (
                        <div key={index}>
                            <h4 className={`text-lg font-semibold ${TEXT_COLOR} mb-2`}>{strategy.channel}</h4>
                            <p className={`${SUBTITLE_COLOR} text-sm mb-3 italic`}>{strategy.description}</p>

                            <div className="space-y-2">
                                {strategy.examples.map((example, i) => (
                                    <a
                                        key={i}
                                        href={example.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center text-sm ${ACCENT_TEXT_COLOR} hover:text-white transition-colors`}
                                    >
                                        {example.type === 'social' && <span className="mr-2">#</span>}
                                        {example.type === 'video' && <span className="mr-2">▶️</span>}
                                        {example.type === 'retail' && <span className="mr-2">🛒</span>}
                                        {example.type === 'education' && <span className="mr-2">📚</span>}
                                        {example.label} (Пример)
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </Card>
    );
};

const BrandMarketingAnalysis: React.FC = () => {
    return (
        <div className={`min-h-screen ${BG_COLOR} ${TEXT_COLOR} font-[Inter] p-4 sm:p-8`}>

            <main className="max-w-7xl mx-auto space-y-16 pt-8">

                <h1 className={`text-4xl sm:text-5xl font-bold ${ACCENT_TEXT_COLOR} mb-6 border-b pb-2 border-[#c8a15a]/50 text-center`}>
                    Детальный Анализ Маркетинговых Стратегий Брендов
                </h1>
                <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto">
                    Сравнение подходов местных игроков (Specialty) и международных гигантов (Масс-маркет) по основным каналам продвижения.
                </p>

                {/* --- Секция 1: Локальные Specialty Бренды --- */}
                <section className="space-y-8 pt-8">
                    <h2 className={`text-3xl font-bold ${ACCENT_TEXT_COLOR}`}>
                        1. Локальные Specialty Бренды (Фокус на D2C и Опыте)
                    </h2>
                    <p className="text-lg text-gray-300">
                        Эти бренды строят маркетинг вокруг продукта и лояльного комьюнити.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {LOCAL_BRANDS.map((brand) => (
                            <BrandDetailSection key={brand.name} brand={brand} />
                        ))}
                    </div>
                </section>

                {/* --- Секция 2: Глобальные Масс-Маркет Бренды --- */}
                <section className="space-y-8 pt-8">
                    <h2 className={`text-3xl font-bold ${ACCENT_TEXT_COLOR}`}>
                        2. Глобальные Масс-Маркет Бренды (Фокус на Доступности и Масштабе)
                    </h2>
                    <p className="text-lg text-gray-300">
                        Эти игроки используют классические медиа-каналы для обеспечения максимальной узнаваемости и продаж через ритейл.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {GLOBAL_BRANDS.map((brand) => (
                            <BrandDetailSection key={brand.name} brand={brand} />
                        ))}
                    </div>
                </section>

                <div className="pt-10">
                    <Card accent="gold">
                        <h3 className={`text-2xl font-semibold ${ACCENT_TEXT_COLOR} mb-2`}>Резюме Стратегий</h3>
                        <p className="text-gray-300">
                            **Локальный маркетинг** — это инвестиции в качество, дизайн, персонал (бариста) и локальные события. Они продают "историю".<br/>
                            **Глобальный маркетинг** — это инвестиции в медиа-бюджеты, дистрибуцию и промо-акции. Они продают "удобство" и "узнаваемость".
                        </p>
                    </Card>
                </div>

            </main>

            <footer className="text-center p-8 mt-16 border-t border-[#c8a15a]/50">
                <p className="text-gray-500">
                    Анализ маркетинга кофейных брендов на рынке Армении.
                </p>
            </footer>
        </div>
    );
};

export default BrandMarketingAnalysis;