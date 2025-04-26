import Business from "./Business";

export default function BusinessList() {
  const businesses = [
    {
      imageSrc:
        "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
      name: "MarginOtto Pizzeria",
      address: "1010 Paddington Way",
      city: "Flavortown",
      state: "NY",
      zipCode: "10101",
      category: "Italian",
      rating: 4.5,
      reviewCount: 90,
    },
  ];
  return businesses.map((business, businessIndex) => {
    return <Business key={businessIndex} business={business} />;
  });
}
