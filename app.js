/// Variable and Objects Access

let from_img = document.querySelector("#from_img");
let to_img = document.querySelector("#to_img");
const Optn = document.querySelectorAll(".select_itm");

/// Currency List
for (let select of Optn) {
  for (let crr_code in countryList) {
    let NewOption = document.createElement("option");
    NewOption.innerText = crr_code;
    NewOption.value = crr_code;
    if (select.name === "from" && crr_code === "USD") {
      NewOption.selected = "selected";
    } else if (select.name === "to" && crr_code === "BDT") {
      NewOption.selected = "selected";
    }
    select.appendChild(NewOption);
  }
}
/// For Flag Change
Optn.forEach((sbt) => {
  sbt.addEventListener("change", (evt) => {
    let New_src = `https://flagsapi.com/${
      countryList[evt.target.value]
    }/flat/64.png`;
    if (evt.target.name === "from") {
      from_img.src = New_src;
    } else if (evt.target.name === "to") {
      to_img.src = New_src;
    }
  });
});
/// For Currency Convert
