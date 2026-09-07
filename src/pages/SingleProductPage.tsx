import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useProducts } from '../context/ProductsContext';
import { useCategories } from '../context/CategoryContext';
import { PRODUCT_IMAGES } from '../constants/productImages';
import NotFound from './NotFound';
export default function SingleProductPage() { const { language, translations: t } = useLanguage(); const { categorySlug, productSlug } = useParams(); const { products } = useProducts(); const { categories } = useCategories(); const category = categories.find(c => c.slug === categorySlug); const product = products.find(p => p.slug === productSlug && p.categoryId === category?.id); if (!product || !category)
    return <NotFound />; return <section className="section"><Link className="text-link" to={`/products/${category.slug}`}>← {category.title[language]}</Link><div className="product-detail"><div className="detail-image"><img src={PRODUCT_IMAGES[product.imageKey]} alt={product.name[language]}/></div><div className="detail-copy"><span className="eyebrow">COFFEE JAN</span><h1>{product.name[language]}</h1><p>{product.description[language]}</p><div className="detail-category">{category.title[language]}</div><Link className="button dark" to="/contact">{t.header.navLabels.contact}<span>↗</span></Link><span className="eyebrow detail-motto">BREWED WITH SOUL</span></div></div></section>; }
