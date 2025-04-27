const API_KEY =
  "O21BlLThaFLSYWqErRwDKvQCP5e2Wa4CHMA8rnxpby3JQ_SurZvPXt7tPBgNTtE5wzOz3ERphGhkK8CA31X6sJp4SllVKz497nuYWXtBTIU3N6WxmEN9V58Xw6AOaHYx";

export const yelpSearch = async (searchTerm, searchLocation, sortOption) => {
  const baseUrl = "https://api.yelp.com/v3/businesses/search";
  const fullUrl = `${baseUrl}?term=${searchTerm}&location=${searchLocation}&sort_by=${sortOption}`;

  try {
    const response = await fetch(fullUrl, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const results = [];

    data.businesses.map((business) => {
      const b = {
        imageSrc: business.image_url || "https://placehold.co/200x200",
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count,
      };

      results.push(b);
    });
    return results;
  } catch (err) {
    console.log(err);
    return null;
  }
};
