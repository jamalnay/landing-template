import PlanCard from "./PlanCard";

export default function PlansList() {
  const plans = [
    {
      isHighlighted: false,
      name: "Free Trial",
      description: "Perfect for testing the waters",
      price: "$0/mo",
      inclusions: (
        <ul className="plans-card-inclusion-list">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Sed do eiusmod tempor incididunt </li>
          <li>Lorem ipsum dolor sit amet </li>
          <li>Consectetur adipiscing elit </li>
        </ul>
      ),
      buttonText: "Start Trial",
    },
    {
      isHighlighted: true,
      name: "Business",
      description: "Perfect for small businesses",
      price: "$500/mo",
      inclusions: (
        <ul className="highlighted-plans-card-inclusion-list">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Sed do eiusmod tempor incididunt </li>
        </ul>
      ),
      buttonText: "Get Started",
    },
    {
      isHighlighted: false,
      name: "Enterprise",
      description: "Perfect for big companies",
      price: "Custom",
      inclusions: (
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      ),
      buttonText: "Contact Us",
    },
  ];
  return <PlanCard plansList={plans} />;
}
