export default function PlanCard({ plansList }) {
  const renderedCards = plansList.map((plan, index) => {
    return (
      <div
        key={3546494 + index}
        className={plan.isHighlighted ? "highlighted-plan-card" : "plan-card"}
      >
        <p className="plan-name">{plan.name}</p>
        <p className="plan-description">{plan.description}</p>
        <p className="plan-price">{plan.price}</p>
        {plan.inclusions}
        <button>{plan.buttonText}</button>
      </div>
    );
  });
  return renderedCards;
}
