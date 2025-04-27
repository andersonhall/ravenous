import "./App.css";
import "./utils/yelpApi";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import BusinessList from "./components/BusinessList";
import { yelpSearch } from "./utils/yelpApi";

function App() {
  const [businesses, setBusinesses] = useState([
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
  ]);
  return (
    <>
      <SearchBar
        search={yelpSearch}
        businesses={businesses}
        setBusinesses={setBusinesses}
      />
      <BusinessList businesses={businesses} />
    </>
  );
}

export default App;
