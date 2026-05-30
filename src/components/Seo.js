import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Seo({
    title,
    description,
    canonicalUrl,
    imageUrl,
    keywords,
}) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords ? <meta name="keywords" content={keywords} /> : null}
            <meta name="robots" content="index, follow, max-image-preview:large" />
            <link rel="canonical" href={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content="website" />
            {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}
        </Helmet>
    );
}
