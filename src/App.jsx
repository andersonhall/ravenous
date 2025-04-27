import "./App.css";

import SearchBar from "./components/SearchBar";
import BusinessList from "./components/BusinessList";

function App() {
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
    {
      imageSrc:
        "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
      name: "MarginOtto Pizzeria",
      address: "1010 Paddington Way",
      city: "Flavortown",
      state: "NY",
      zipCode: "10101",
      category: "Italian",
      rating: 5,
      reviewCount: 120,
    },
    {
      imageSrc:
        "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
      name: "MarginOtto Pizzeria",
      address: "1010 Paddington Way",
      city: "Flavortown",
      state: "NY",
      zipCode: "10101",
      category: "Italian",
      rating: 1.5,
      reviewCount: 50,
    },
  ];
  return (
    <>
      <SearchBar />
      <BusinessList businesses={businesses} />
    </>
  );
}

export default App;
