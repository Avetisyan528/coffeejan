import * as React from 'react';
import { ProductCategory } from '../types/products';
import { PRODUCT_CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';

const populatedCategories = PRODUCT_CATEGORIES.filter(category =>
    PRODUCTS.some(product => product.categoryId === category.id)
);

export type CategoryContextValue = {
    categories: ProductCategory[];
    getCategoryById: (id: string) => ProductCategory | undefined;
};

const CategoryContext = React.createContext<CategoryContextValue | undefined>(undefined);

export const CategoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const getCategoryById = React.useCallback(
        (id: string) => populatedCategories.find((c) => c.id === id),
        []
    );

    const value = React.useMemo(
        () => ({
            categories: populatedCategories,
            getCategoryById,
        }),
        [getCategoryById]
    );

    return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
};

export const useCategories = () => {
    const context = React.useContext(CategoryContext);

    if (!context) {
        throw new Error('useCategories must be used within a CategoryProvider');
    }

    return context;
};
