import {Box, Button, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {useLanguage} from '../context/LanguageContext';

export default function NotFound() {
    const {language, translations} = useLanguage();
    const title = {en: 'Page not found', ru: 'Страница не найдена', hy: 'Էջը չի գտնվել'};
    return (
        <Box sx={{textAlign: 'center', px: 3, py: 10}}>
            <Typography component="h1" variant="h3" gutterBottom>404 — {title[language]}</Typography>
            <Button component={Link} to="/products" variant="contained" color="secondary">
                {translations.header.navLabels.products}
            </Button>
        </Box>
    );
}
