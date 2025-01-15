import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOriginalUrl } from "../api/services/urlService";

const RedirectFromSlug = () => {
    const { slug } = useParams();

    useEffect(() => {
        const fetchOriginalUrl = async () => {
        try {
            const data = await getOriginalUrl(slug);
            if (data) {
            window.location.href = data.originalUrl;
            }
        } catch (error) {
            console.error("Error fetching original URL", error);
        }
        };

        fetchOriginalUrl();
    }, [slug]);

    return <div>Redirecting...</div>;
};

export default RedirectFromSlug;
