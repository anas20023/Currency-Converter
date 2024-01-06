/// Variable and Objects Access

let from_img = document.querySelector("#from_img");
let to_img = document.querySelector("#to_img");
const Optn = document.querySelectorAll(".select_itm");
let Base_url =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/bdt.json";
let Submt_btn = document.querySelector("#submit");
let Amnt = document.querySelector("#Amount");
let Amnt_val, newURL;

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
Submt_btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  Amnt_val = parseFloat(Amnt.value);
  // newURL=`${Base_url}/${}`
  if (Amnt_val < 1) {
    Amnt.value = 1;
    Amnt_val = parseFloat(Amnt.value);
  }
  Get_rate();
});

/// Data From API

let Get_rate = async () => {
  //let response = await fetch();
  console.log(Amnt_val);
};
