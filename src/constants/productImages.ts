import small from '../static/brand/coffee-250g.png';
import medium from '../static/brand/coffee-750g.png';
import large from '../static/brand/coffee-5kg.png';
import smallAngle from '../static/brand/coffee-250g-angle.png';
import mediumAngle from '../static/brand/coffee-750g-angle.png';
import largeAngle from '../static/brand/coffee-5kg-angle.png';

export const PRODUCT_IMAGES: Record<string, string> = {
    'jan-250g': small,
    'jan-750g': medium,
    'jan-5kg': large,
};

export const PRODUCT_GALLERIES: Record<string, string[]> = {
    'jan-250g': [small, smallAngle],
    'jan-750g': [medium, mediumAngle],
    'jan-5kg': [large, largeAngle],
};
