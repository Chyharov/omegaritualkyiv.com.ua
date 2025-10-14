import React, { useEffect, useState } from 'react';

const SectionComments = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const placeId = 'ChIJgWjrbZbP1EARk8pw9Vfl9kE';
      const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
      const proxy = 'https://corsproxy.io/?';
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&language=uk&key=${apiKey}`;
      try {
        const response = await fetch(proxy + encodeURIComponent(url));
        if (!response.ok) throw new Error('Помилка запиту');
        const data = await response.json();

        if (data.result?.reviews) {
          const googleReviews = data.result.reviews;

          const myReview = {
            author_name: 'Твій клієнт',
            rating: 5,
            text: 'Дуже задоволений співпрацею! 👍 Рекомендую!',
            time: Math.floor(Date.now() / 1000),
          };

          setReviews([...googleReviews, myReview]);
        } else {
          setError('Відгуки не знайдені або API не повертає їх.');
        }
      } catch (err) {
        console.error(err);
        setError('Не вдалося отримати відгуки.');
      }
    };

    fetchReviews();
  }, []);

  return (
    <section style={{ padding: '1.5rem', maxWidth: 600, margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Відгуки</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {reviews.length === 0 && !error ? (
        <p>Наразі немає відгуків.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {reviews.map((r, i) => (
            <li
              key={i}
              style={{
                background: '#f9f9f9',
                borderRadius: '12px',
                padding: '1rem',
                marginBottom: '1rem',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              }}
            >
              <strong>{r.author_name}</strong> ({r.rating}★)
              <p style={{ marginTop: '0.5rem' }}>{r.text}</p>
              <small style={{ color: '#555' }}>
                {new Date(r.time * 1000).toLocaleDateString()}
              </small>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default SectionComments;
