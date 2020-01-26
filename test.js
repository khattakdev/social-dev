// Get Values from URL
const urlParams = new URLSearchParams(window.location.search);
const hotelCity = urlParams.get("hotel_city_id");
const hotelType = urlParams.get("hotel_type");
let hotelBox, typeBox;

// Printing Values to Console (Optional)
console.log(hotelCity, "!!");
console.log(hotelType, "!!");

// Get CheckBoxes which has these same IDs as those values
const hotelCityBox = document.getElementsByName("hotel_type_id");
const hotelTypeBox = document.getElementsByName("hotel_type");

// Loop through all the Hotel Cities' checkBox
for (const value of hotelCityBox) {
  if (value.value === hotelCity) {
    // check the one that was passed through Query Param
    value.checked = true;
  }
}

// Loop through all the Hotel Cities' checkBox
for (const value of hotelTypeBox) {
  if (value.value === hotelType) {
    // check the one that was passed through Query Param
    value.checked = true;
  }
}
