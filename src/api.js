// api.js

// Function to fetch real estate data from the API
const fetchRealEstateData = async () => {
  try {
    const response = await fetch(
      "https://text-check-api.vercel.app/api/v1/realstate"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export { fetchRealEstateData };
