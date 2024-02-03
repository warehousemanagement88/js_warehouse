const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get("name");

export const urlFetch =
  "https://asia-southeast2-warehousemanagement88.cloudfunctions.net/warehouse_password?name=" +
  productName;
