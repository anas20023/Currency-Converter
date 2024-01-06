/// Variable and Objects Access
let from_img = document.querySelector("#from_img");
let to_img = document.querySelector("#to_img");
const Optn = document.querySelectorAll(".select_itm");
let Base_url =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let Submt_btn = document.querySelector("#submit");
let Amnt = document.querySelector("#Amount");
let Amnt_val, newURL;
const from_curr = document.querySelector("#from_curr");
const to_curr = document.querySelector("#to_curr");
let msg = document.querySelector("#msg");
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
  if (Amnt_val < 1 || Amnt_val == "") {
    Amnt.value = 1;
    if (Amnt_val == "") {
      Amnt.value = 1;
      alert("Please Enter an amount!");
    }
    Amnt_val = 1;
  }
  newURL = `${Base_url}/${from_curr.value.toLowerCase()}/${to_curr.value.toLowerCase()}.json`;
  Get_Exchange_Rate();
});

let Get_Exchange_Rate = async () => {
  let response = await fetch(newURL);
  let rate = await response.json();
  let final_rate = rate[to_curr.value.toLowerCase()] * Amnt_val;
  msg.innerHTML = `${Amnt_val} ${from_curr.value} = ${final_rate} ${to_curr.value}`;
};
window.addEventListener("load".Get_Exchange_Rate);
