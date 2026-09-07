import React from 'react';
import {MenuItem, Select} from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Language } from '../../types';
import BrandLogo from '../BrandLogo/BrandLogo';
export default function Header() {
    const { language, setLanguage, translations: t } = useLanguage();
    const [open, setOpen] = React.useState(false);
    return <header className="site-header"><Link to="/" aria-label="Coffee JAN home"><BrandLogo /></Link><button className="menu-toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button><nav className={open ? 'main-nav open' : 'main-nav'}>{[['/products', 'products'], ['/about', 'about'], ['/contact', 'contact']].map(([path, key]) => <NavLink key={path} to={path} onClick={() => setOpen(false)}>{t.header.navLabels[key as 'products' | 'about' | 'contact']}</NavLink>)}</nav><Select
        className="language-select"
        variant="standard"
        disableUnderline
        inputProps={{'aria-label': t.header.languageToggleLabel}}
        value={language}
        onChange={e => setLanguage(e.target.value as Language)}
        renderValue={value => ({en: 'EN', ru: 'RU', hy: 'ՀԱՅ'}[value])}
        MenuProps={{
            classes: {paper: 'language-menu'},
            anchorOrigin: {vertical: 'bottom', horizontal: 'right'},
            transformOrigin: {vertical: 'top', horizontal: 'right'},
            MenuListProps: {'aria-label': t.header.languageToggleLabel},
        }}
    >
        {([{code: 'en', label: 'English'}, {code: 'ru', label: 'Русский'}, {code: 'hy', label: 'Հայերեն'}] as const).map(option => (
            <MenuItem key={option.code} value={option.code}>
                <span>{option.label}</span><span className="language-check" aria-hidden="true">{language === option.code ? '✓' : ''}</span>
            </MenuItem>
        ))}
    </Select></header>;
}
