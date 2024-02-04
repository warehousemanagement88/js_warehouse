function show_chart(target_url, idChart, backgroundColor) {
  // Extracting the 'name' parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const productName = urlParams.get("name");

  // Constructing the endpoint URL with the 'name' parameter
  const endpointURL = `${target_url}?name=${encodeURIComponent(productName)}`;

  fetch(endpointURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      if (Array.isArray(result)) {
        const temps = result;

        // Continue with mapping and chart creation
        const location = temps.map((temp) => temp.location);
        const values = temps.map((temp) => parseInt(temp.qty));

        // Get the canvas element
        const ctx = document.getElementById(idChart);

        // Create a new Chart instance
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: location,
            datasets: [
              {
                label: "Stock",
                data: values,
                borderWidth: 1,
                backgroundColor: backgroundColor,
              },
            ],
          },
          options: {
            indexAxis: "y",
          },
        });

        // Log data for verification
        // console.log("location:", location);
        // console.log("Values:", values);
      } else {
        console.error("Invalid response format");
      }
    })
    .catch((error) => {
      console.log("error", error);
    });
}

// Example usage
show_chart(
  "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_password",
  "myChart-a",
  "rgba(255, 99, 132, 0.2)"
);
