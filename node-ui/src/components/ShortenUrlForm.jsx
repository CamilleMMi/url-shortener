import React, { useState } from 'react';
import { shortenUrl } from '../api/services/urlService';

const ShortenUrlForm = () => {
    const [url, setUrl] = useState('');
    const [shortened, setShortened] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const data = await shortenUrl(url);
            setShortened(data.shortUrl);
        } catch (err) {
            setError(err);
        }
    };

    return (
        <div>
            <h1>Shorten Your URL</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter your URL here"
                    required
                />
                <button type="submit">Shorten</button>
            </form>
            {shortened && <p>Shortened URL: <a href={shortened}>{shortened}</a></p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default ShortenUrlForm;
