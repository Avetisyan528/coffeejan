import React from 'react';
export default function BrandLogo({ compact = false }: {
    compact?: boolean;
}) { return <span className={`wordmark ${compact ? 'compact' : ''}`}><span className="wordmark-top">♨ &nbsp; COFFEE</span><span className="wordmark-name">JAN</span></span>; }
