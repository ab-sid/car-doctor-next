export const getServices = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/services/api/get-all`
    );

    // Check if the response is successful (status 200)
    if (!res.ok) {
      console.error(`Error: ${res.status} - ${res.statusText}`);
      return [];
    }

    // Optionally log the raw response for debugging
    const textResponse = await res.text(); // Read as text first
    // console.log("Raw Response:", textResponse);

    // Try parsing the JSON
    const services = JSON.parse(textResponse);
    return services;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};

export const getServiceDetails = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/services/api/${id}`
    );
    const service = await res.json();
    return service;
  } catch (error) {
    console.log(error);
    return {};
  }
};
