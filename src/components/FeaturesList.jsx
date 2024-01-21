import FeatureCard from "./FeatureCard";
export default function FeaturesList() {
  const cards = [
    {
      direction: "ltr",
      image: "src/assets/sales_monitoring.png",
      departement: "Sales Monitoring",
      title: "Simplify your sales monitoring",
      description:
        "Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.",
      focusContent: (
        <ul className="features-card-focus-content-list">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Sed do eiusmod tempor incididunt ut labore </li>
        </ul>
      ),
    },
    {
      direction: "rtl",
      image: "src/assets/customer_support.png",
      departement: "Customer Support",
      title: "Get in touch with your customers",
      description:
        "Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.",
      focusContent: (
        <ul className="features-card-focus-content-list">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Sed do eiusmod tempor incididunt ut labore </li>
        </ul>
      ),
    },
    {
      direction: "ltr",
      image: "src/assets/growth_monitoring.png",
      departement: "Growth Monitoring",
      title: "Monitor your site’s new subscribers ",
      description:
        "Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. ",
      focusContent: (
        <div className="features-card-focus-content-stats">
          <div>
            <h3>100+</h3>
            <p>Lorem ipsum dolor sit</p>
          </div>
          <div>
            <h3>800+</h3>
            <p>Conse adipiscing elit</p>
          </div>
        </div>
      ),
    },
  ];

  return <FeatureCard cards={cards} />;
}
