import React, { useEffect, useState } from "react";

export const SectionComments = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch reviews:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Завантаження відгуків...</p>;
  if (reviews.length === 0) return <p>Відгуків поки немає</p>;

  return (
    <section>
      <h2>Відгуки про {reviews[0]?.name || "наш сервіс"}</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index} style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={review.profile_photo_url}
                alt={review.author_name}
                width={48}
                height={48}
                style={{ borderRadius: "50%", marginRight: "10px" }}
              />
              <a href={review.author_url} target="_blank" rel="noreferrer">
                {review.author_name}
              </a>
              <span style={{ marginLeft: "10px" }}>⭐ {review.rating}</span>
            </div>
            <p>{review.text || "Відгук порожній"}</p>
            <small>{review.relative_time_description}</small>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default SectionComments;