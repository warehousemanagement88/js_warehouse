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

export const dataQty = `
<div class="w-full px-6 py-6 mx-auto">
<div class="flex flex-wrap -mx-3 justify-center">
<div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
<div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
    <div class="flex-auto p-4">
        <div class="flex flex-row -mx-3">
            <div class="flex-none w-2/3 max-w-full px-3">
                <div>
                    <p class="mb-0 font-sans font-semibold leading-normal text-sm font-bold">
                        JUMLAH BARANG
                    </p>
                    <div>#TOTALQTY#</div>
                </div>
            </div>
            <div class="px-3 text-right basis-1/3">
                <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                    <i class="fa fa-building text-lg relative top-3.5 text-white" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
`;

let totalQty = 0;

export function responseDataStaff(results) {
  console.log(results);
  results.forEach(isiRow);

  const totalQtyContent = dataQty.replace("#TOTALQTY#", totalQty);
  document.getElementById("detailGudangs").innerHTML = totalQtyContent;
}

export function isiRow(value) {
  const container = document.createElement("div");
  totalQty += parseInt(value.qty);

  const content = dataStaff
    .replace("#BRAND#", value.brand || "")
    .replace("#NAME#", value.name || "")
    .replace("#QTY#", value.qty || "")
    .replace("#LOKASI#", value.location || "")
    .replace("#NAMAWR#", value.location[6] || "");

  container.innerHTML = content;

  document.getElementById("detailGudang").appendChild(container);
}
