import React, { useEffect, useState } from 'react';
import QrCode from 'images/comments/qr-code.svg';
import { ImArrowDown } from 'react-icons/im';
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

          const myReviews = [
            {
              author_name: 'Марія Максименко',
              rating: 5,
              text: 'Дуже вдячна за людяність, розуміння та професіоналізм. У складний момент команда все організувала, з повагою та турботою. Все було гідно і без жодних клопотів для родини. Щиро дякую!',
              time: 1743112343,
            },
            {
              author_name: 'Олег Петров',
              rating: 5,
              text: 'Професійний сервіс, уважне ставлення, гідна організація церемонії. Дуже вдячні за співчуття, теплі слова та турботу. Рекомендую цю компанію, хто хоче, щоб усе було зроблено на совість.',
              time: 1745112343,
            },
            {
              author_name: 'Іван Коваленко',
              rating: 5,
              text: 'Дякую за оперативну допомогу і підтримку. Усе зроблено швидко, з повагою, та розумінням. Видно, що люди працюють з душею і розумінням того, наскільки це важливо для близьких.',
              time: 1746112343,
            },
          ];
          setReviews([...myReviews, ...googleReviews].sort((a, b) => a.time - b.time));
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
      <div className={`container ${s.sectionComments__container}`}>
        <div className={s.qrCode__container}>
          <h2 className={s.qrCode__title} style={{ textAlign: 'center' }}>
            Натисніть або відскануйте QR-код, для написання відгуку
          </h2>
          <ImArrowDown className={s.qrCode__arrow} />
          <a
            href="https://g.page/r/CZPKcPVX5fZBEBM/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={s.qrCode} src={QrCode} alt="QR Code" />
          </a>
        </div>
        <div className={s.comments__container}>
          <h2 className="title">Відгуки</h2>

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
                    <div className={s.nameAndRating}>
                      <strong className={s.authorName}>{r.author_name}</strong>
                      <div
                        className={s.stars}
                        aria-label={`Рейтинг ${r.rating} з 5`}
                      >
                        {'★'.repeat(r.rating) + '☆'.repeat(5 - r.rating)}
                      </div>
                    </div>
                  </div>

                  <p className={s.reviewText}>{r.text}</p>
                  <small className="description">
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
      </div>
    </section>
  );
};

export default SectionComments;
