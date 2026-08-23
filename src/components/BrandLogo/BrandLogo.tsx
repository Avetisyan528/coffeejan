import * as React from 'react';
import {Box, Typography} from '@mui/material';
import logoIcon from '../../static/LogoIcon.png';

type BrandLogoProps = {
    compact?: boolean;
};

const BrandLogo: React.FC<BrandLogoProps> = ({compact = false}) => (
    <Box
        sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: compact ? 0.8 : 1,
            textDecoration: 'none',
        }}
    >
        <Box
            component="img"
            src={logoIcon}
            alt="CoffeeJan"
            sx={{
                width: compact ? 32 : 38,
                height: compact ? 32 : 38,
                objectFit: 'contain',
            }}
        />
        <Typography
            component="span"
            sx={(theme) => ({
                color: theme.palette.secondary.main,
                fontWeight: 800,
                fontSize: compact ? '1.15rem' : '1.35rem',
                letterSpacing: '0.08em',
                lineHeight: 1,
                whiteSpace: 'nowrap',
            })}
        >
            COFFEEJAN
        </Typography>
    </Box>
);

export default BrandLogo;
