import React, { useEffect, useState } from 'react';
import s from './SectionComments.module.scss';

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
            time: 1743112343,
          };
          setReviews([myReview, ...googleReviews]);
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
    <section className={s.sectionComments}>
      <div className={`container ${s.comments__container}`}>
        <h2 className={s.title}>Відгуки</h2>

        {error && <p className={s.error}>{error}</p>}

        {reviews.length === 0 && !error ? (
          <p className={s.noReviews}>Наразі немає відгуків.</p>
        ) : (
          <ul className={s.reviewList}>
            {reviews.map(r => (
              <li
                key={`${r.author_name}-${r.time}`}
                className={s.reviewList__item}
              >
                <div className={s.nameAndPhotoContainer}>
                  <img
                    className={s.reviewList__itemPhoto}
                    src={
                      r.profile_photo_url &&
                      !r.profile_photo_url.startsWith(
                        'https://lh3.googleusercontent.com/'
                      )
                        ? r.profile_photo_url
                        : `https://placehold.co/40x40?text=${encodeURIComponent(
                            r.author_name[0].toUpperCase()
                          )}`
                    }
                    alt={`Фото профілю користувача ${r.author_name}`}
                  />
                  <strong>{r.author_name}</strong>
                </div>

                <div className={s.stars} aria-label={`Рейтинг ${r.rating} з 5`}>
                  {'★'.repeat(r.rating) + '☆'.repeat(5 - r.rating)}
                </div>

                <p className={s.reviewText}>{r.text}</p>
                <small className={s.reviewDate}>
                  {(() => {
                    const d = new Date(r.time * 1000);
                    const day = String(d.getDate()).padStart(2, '0');
                    const monthNames = [
                      'січня',
                      'лютого',
                      'березня',
                      'квітня',
                      'травня',
                      'червня',
                      'липня',
                      'серпня',
                      'вересня',
                      'жовтня',
                      'листопада',
                      'грудня',
                    ];
                    const month = monthNames[d.getMonth()];
                    const year = d.getFullYear();
                    const hours = String(d.getHours()).padStart(2, '0');
                    const minutes = String(d.getMinutes()).padStart(2, '0');
                    return `${day} ${month} ${year}, ${hours}:${minutes}`;
                  })()}
                </small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default SectionComments;
