import ArrowIcon from "./ArrowIcon";

export default function FeatureCard({ cards }) {
  const rederedCards = cards.map((card, index) => {
    let arrowIconColor;
    let textColor;
    switch (card.departement) {
      case "Sales Monitoring":
        arrowIconColor = "arrow-icon-sales";
        textColor = "text-color-sales";
        break;
      case "Customer Support":
        arrowIconColor = "arrow-icon-support";
        textColor = "text-color-support";
        break;
      case "Growth Monitoring":
        arrowIconColor = "arrow-icon-growth";
        textColor = "text-color-growth";
        break;
      default:
        arrowIconColor = "arrow-icon-link";
        textColor = "text-color-link";
    }
    return (
      <div key={index} className="feature-card">
        {card.direction === "rtl" && (
          <img src={card.image} className="feature-card-image" />
        )}
        <div
          className={`${
            card.direction === "rtl"
              ? "feature-card-content-rtl"
              : "feature-card-content-ltr"
          }`}
        >
          <p className={`${textColor} feature-card-departement`}>
            {card.departement}
          </p>
          <h2>{card.title}</h2>
          <p className="feature-card-descirption">{card.description}</p>
          {card.focusContent}
          <div className="feature-learn-more-link">
            <p className={textColor}>Learn More</p>
            <ArrowIcon color={arrowIconColor} />
          </div>
        </div>
        {card.direction === "ltr" && (
          <img src={card.image} className="feature-card-image" />
        )}
      </div>
    );
  });
  return rederedCards;
}
