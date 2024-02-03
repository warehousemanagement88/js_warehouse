import { addInner } from "https://jscroot.github.io/element/croot.js";

export const dataStaff = `
<div class="mx-auto mt-6 mb-6 p-4 max-w-md bg-gradient-to-tl from-purple-700 to-pink-500 border rounded-xl shadow-soft-xl">
    <h6 class="text-white text-xl">Detail Warehouse #NAMAWR#</h6>
    <div class="mx-auto mt-4 mb-4 w-64 bg-white rounded-lg overflow-hidden shadow-soft-md transition-transform duration-200 ease-in-out transform hover:scale-105">
        <div class="p-4">
            <p class="mb-2"><strong>BRAND : #BRAND#</strong></p>
            <p class="mb-2"><strong>NAME : #NAME#</strong></p>
            <p class="mb-2"><strong>QTY : #QTY#</strong></p>
            <p class="mb-2"><strong>Location: #LOKASI#</strong></p>
        </div>
    </div>
</div>
`;

export function responseDataStaff(results) {
  console.log(results);
  results.forEach(isiRow);
}

export function isiRow(value) {
  const container = document.createElement("div");

  const content = dataStaff
    .replace("#BRAND#", value.brand || "")
    .replace("#NAME#", value.name || "")
    .replace("#QTY#", value.qty || "")
    .replace("#LOKASI#", value.location || "")
    .replace("#NAMAWR#", value.location[6] || "");

  container.innerHTML = content;

  document.getElementById("detailGudang").appendChild(container);
}
