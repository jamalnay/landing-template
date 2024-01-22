import BottomMenu from "./BottomMenu";
export default function BottomNavigation() {
  const menus = [
    {
      header: "Features",
      links: [
        {
          name: "Growth",
          href: "#",
        },
        {
          name: "Sales",
          href: "#",
        },
        {
          name: "Chat",
          href: "#",
        },
      ],
    },
    {
      header: "Pricing",
      links: [
        {
          name: "Free Trial",
          href: "#",
        },
        {
          name: "Standard",
          href: "#",
        },
        {
          name: "Business",
          href: "#",
        },
      ],
    },
    {
      header: "Enterprise",
      links: [
        {
          name: "Personalize",
          href: "#",
        },
        {
          name: "Automation",
          href: "#",
        },
        {
          name: "Invoicing",
          href: "#",
        },
        {
          name: "24/7 Support",
          href: "#",
        },
      ],
    },
    {
      header: "Careers",
      links: [
        {
          name: "Open Positions",
          href: "#",
        },
        {
          name: "Part-Time",
          href: "#",
        },
        {
          name: "Contractual",
          href: "#",
        },
        {
          name: "Contact Us",
          href: "#",
        },
      ],
    },
  ];
  return <BottomMenu menus={menus} />;
}
