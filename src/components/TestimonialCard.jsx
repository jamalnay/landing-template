export default function TestimonialCard({ cards }) {
  const rederedCards = cards.map((card, index) => {
    return (
      <div key={457547 + index} className="testimonial-card">
        <div className="testimonial-header">
          <img
            src={card.attestantPicture}
            alt={`Attestant ${card.attestant}`}
            height="64"
            width="64"
          />
          <div className="testimonial-attestant">
            <p>{card.attestant}</p>
            <p>{card.position}</p>
          </div>
          <img src={card.companyLogo} height="48" width="48" />
        </div>
        <p className="testimonial-text">{card.testimony}</p>
      </div>
    );
  });
  return rederedCards;
}
