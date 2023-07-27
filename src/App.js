import "./App.css";
import { useState, useEffect } from "react";
import { fetchRealEstateData } from "./api";

function App() {
  const [realEstateData, setRealEstateData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchRealEstateData();
      console.log(res.data);
      setRealEstateData(res.data.properties);
    };

    fetchData();
  }, []);

  // Check if data is still loading
  if (!realEstateData) {
    return <div className="App">Loading...</div>;
  }

  // Render the real estate data in your App component
  return (
    <div className="App">
      {realEstateData?.map((property, index) => (
        <div className="property-card">
        <div className="image-container">
          <img
            src={property.image}
            alt="property"
            className=""
          />
        </div>
        <div className="property-details">
          <h2 className="text-xl font-bold">
            Address: {property.address}, {property.city}, {property.state},{" "}
            {property.zipcode}
          </h2>
          <p>Price: ${property.price}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Bathrooms: {property.bathrooms}</p>
          <p>Sqft: {property.sqft}</p>
          <p>Year Built: {property.year_built}</p>
          <h2 className="text-xl font-bold mt-4">Agent:</h2>
          <p>Name: {property.agent.name}</p>
          <p>Email: {property.agent.email}</p>
          <p>Phone: {property.agent.phone}</p>
        </div>
      </div>
      
      ))}
    </div>
  );
}

export default App;
