import TestimonialCard from "./TestimonialCard";

export default function TestimonialsList() {
  const cards = [
    {
      attestantPicture: "src/assets/lucy_tarr.png",
      attestant: "Lucy Tarr",
      position: "CEO of AB.co",
      companyLogo: "src/assets/google_logo.png",
      testimony:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam? Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
    {
      attestantPicture: "src/assets/grant_styles.png",
      attestant: "Grant Styles",
      position: "CEO of Biffco Enterprises Ltd.",
      companyLogo: "src/assets/appstore_logo.png",
      testimony:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet? Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
    },
    {
      attestantPicture: "src/assets/ralph_edwards.png",
      attestant: "Ralph Edwards",
      position: "Director at Acme.co",
      companyLogo: "src/assets/x_logo.png",
      testimony:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet? Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
    },
    {
      attestantPicture: "src/assets/annette_black.png",
      attestant: "Annette Black",
      position: "Manager at Barone LLC.",
      companyLogo: "src/assets/facebook_logo.png",
      testimony:
        "Consectetur adipiscing elit duis tristique sollicitudin. Vel risus commodo viverra maecenas accumsan. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    },
    {
      attestantPicture: "src/assets/robert_fox.png",
      attestant: "Robert Fox",
      position: "CEO of Biffco Enterprises Ltd.",
      companyLogo: "src/assets/google_logo.png",
      testimony:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet? Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
    },
    {
      attestantPicture: "src/assets/brooklyn_simmons.png",
      attestant: "Brooklyn Simmons",
      position: "CEO of AB.co",
      companyLogo: "src/assets/x_logo.png",
      testimony:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam? Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
    {
      attestantPicture: "src/assets/grant_styles.png",
      attestant: "Grant Styles",
      position: "CEO of Biffco Enterprises Ltd.",
      companyLogo: "src/assets/google_logo.png",
      testimony:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam? Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
    {
      attestantPicture: "src/assets/ralph_edwards.png",
      attestant: "Ralph Edwards",
      position: "Director at Acme.co",
      companyLogo: "src/assets/facebook_logo.png",
      testimony:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam? Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
    {
      attestantPicture: "src/assets/robert_fox.png",
      attestant: "Robert Fox",
      position: "CEO of Biffco Enterprises Ltd.",
      companyLogo: "src/assets/appstore_logo.png",
      testimony:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam? Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
  ];

  return <TestimonialCard cards={cards} />;
}
