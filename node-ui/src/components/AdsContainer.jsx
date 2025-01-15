import React, { useEffect } from 'react';

const AdsContainer = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        script.async = true;
        script.setAttribute('data-ad-client', 'ca-pub-8927158657704298');
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div className="ads-container">Your Ads Here</div>;
};

export default AdsContainer;
