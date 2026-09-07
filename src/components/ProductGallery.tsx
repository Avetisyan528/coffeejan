import {useState} from 'react';
import {useLanguage} from '../context/LanguageContext';

export default function ProductGallery({images, name}: {images: string[]; name: string}) {
    const [selected, setSelected] = useState(0);
    const {language} = useLanguage();
    const labels = {
        en: ['Front view', 'Angled view'],
        ru: ['Вид спереди', 'Вид под углом'],
        hy: ['Դիմային տեսք', 'Կողային տեսք'],
    }[language];
    return <div className="product-gallery">
        <div className="detail-image">
            <img src={images[selected]} alt={`${name} — ${labels[selected]}`} />
        </div>
        <div className="gallery-thumbnails">
            {images.map((image, index) => <button
                key={image}
                type="button"
                aria-label={`${name} — ${labels[index]}`}
                aria-pressed={selected === index}
                onClick={() => setSelected(index)}
            >
                <img src={image} alt="" loading="lazy" />
                <span>{labels[index]}</span>
            </button>)}
        </div>
    </div>;
}
