const Optn = document.querySelectorAll(".select_itm");
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
