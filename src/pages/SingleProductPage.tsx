import * as React from 'react';
import {Box, Button, Card, CardContent, CardMedia, Typography} from '@mui/material';
import {Link, useParams} from 'react-router-dom';
import {useLanguage} from '../context/LanguageContext';
import {useProducts} from '../context/ProductsContext';
import {useCategories} from '../context/CategoryContext';
import {PRODUCT_IMAGES} from '../constants/productImages';
import NotFound from './NotFound';

const SingleProductPage: React.FC = () => {
    const {language} = useLanguage();
    const {categorySlug, productSlug} = useParams();
    const {categories} = useCategories();
    const {products} = useProducts();
    const category = categories.find(item => item.slug === categorySlug);
    const product = products.find(item => item.slug === productSlug && item.categoryId === category?.id);

    if (!category || !product) return <NotFound />;

    return (
        <Box sx={{maxWidth: 900, mx: 'auto', px: 3, py: 6}}>
            <Button component={Link} to={`/products/${category.slug}`} color="secondary" sx={{mb: 3}}>
                ← {category.title[language]}
            </Button>
            <Card sx={{borderRadius: 3}}>
                <CardMedia component="img" image={PRODUCT_IMAGES[product.imageKey]} alt={product.name[language]}
                           sx={{height: {xs: 300, md: 450}, objectFit: 'contain', p: 3}} />
                <CardContent>
                    <Typography variant="h4" component="h1" gutterBottom>{product.name[language]}</Typography>
                    <Typography>{product.description[language]}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default SingleProductPage;
