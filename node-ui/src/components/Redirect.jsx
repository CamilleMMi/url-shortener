import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOriginalUrl } from '../api/services/urlService';

const RedirectFromSlug = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      try {
        const data = await getOriginalUrl(slug);
        if (data && data.originalUrl) {
          window.location.href = data.originalUrl;
        } else {
          setNotFound(true);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching original URL', error);
        setNotFound(true);
        setLoading(false);
      }
    };

    fetchOriginalUrl();
  }, [slug]);

  if (loading) return <div className="text-center text-gray-600">Redirection en cours...</div>;
  if (notFound) return <div className="text-center text-red-500 font-semibold text-xl">404 - Page non trouvée</div>;

  return null;
};

export default RedirectFromSlug;
