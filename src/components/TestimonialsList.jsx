import TestimonialCard from "./TestimonialCard";

export default function TestimonialsList() {
  const cards = [
    {
      attestantPicture: "/lucy_tarr.png",
      attestant: "Lucy Tarr",
      position: "CEO of AB.co",
      companyLogo: "/google_logo.png",
      testimony:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam? Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
    {
      attestantPicture: "/grant_styles.png",
      attestant: "Grant Styles",
      position: "CEO of Biffco Enterprises Ltd.",
      companyLogo: "/appstore_logo.png",
      testimony:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet? Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
    },
    {
      attestantPicture: "/ralph_edwards.png",
      attestant: "Ralph Edwards",
      position: "Director at Acme.co",
      companyLogo: "/x_logo.png",
      testimony:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet? Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
    },
    {
      attestantPicture: "/annette_black.png",
      attestant: "Annette Black",
      position: "Manager at Barone LLC.",
      companyLogo: "/facebook_logo.png",
      testimony:
        "Consectetur adipiscing elit duis tristique sollicitudin. Vel risus commodo viverra maecenas accumsan. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    },
    {
      attestantPicture: "/robert_fox.png",
      attestant: "Robert Fox",
      position: "CEO of Biffco Enterprises Ltd.",
      companyLogo: "/google_logo.png",
      testimony:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet? Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
    },
    {
      attestantPicture: "/brooklyn_simmons.png",
      attestant: "Brooklyn Simmons",
      position: "CEO of AB.co",
      companyLogo: "/x_logo.png",
      testimony:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam? Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
    {
      attestantPicture: "/grant_styles.png",
      attestant: "Grant Styles",
      position: "CEO of Biffco Enterprises Ltd.",
      companyLogo: "/google_logo.png",
      testimony:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam? Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
    {
      attestantPicture: "/ralph_edwards.png",
      attestant: "Ralph Edwards",
      position: "Director at Acme.co",
      companyLogo: "/facebook_logo.png",
      testimony:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam? Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
    {
      attestantPicture: "/robert_fox.png",
      attestant: "Robert Fox",
      position: "CEO of Biffco Enterprises Ltd.",
      companyLogo: "/appstore_logo.png",
      testimony:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam? Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
  ];

  return <TestimonialCard cards={cards} />;
}
