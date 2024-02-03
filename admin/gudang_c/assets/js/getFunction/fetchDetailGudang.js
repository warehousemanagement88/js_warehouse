import { urlFetch } from "./urlDetailGudang.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { responseDataStaff } from "./detailGudang.js";

function get(target_url) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const parsedResult = JSON.parse(result);

      if (parsedResult && Array.isArray(parsedResult)) {
        parsedResult.forEach((item) => {
          console.log("_id:", item._id);
          console.log("brand:", item.brand);
          console.log("name:", item.name);
          console.log("location:", item.location);
          console.log("qty:", item.qty);
        });
      } else {
        console.log("Invalid or unexpected API response format");
      }

      responseDataStaff(parsedResult);
    })
    .catch((error) => {
      console.log("error", error);
    });
}

// Contoh pemanggilan metode get
get(urlFetch);
