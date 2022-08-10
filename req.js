const colorWheelSelection = document.querySelector("#favcolor");
const colorDropdownSelection = document.querySelector("#color");
const colorSection = document.querySelectorAll(".color-section");
const hexSection = document.querySelectorAll(".hex-section");

function req(URL) {
  const color = colorWheelSelection.value.slice(1);
  const scheme = colorDropdownSelection.value.toLowerCase();
  const colorArray = [];
  const hexSectionArray = Array.from(hexSection);
  const colorSectionArray = Array.from(colorSection);
  fetch(URL + `?hex=${color}&mode=${scheme}&count=5`)
    .then((res) => res.json())
    .then((data) => {
      const colorData = data.colors;
      for (let i = 0; i < colorData.length; i++) {
        colorArray.push(colorData[i].hex.value);
      }
      for (let i = 0; i < hexSectionArray.length; i++) {
        hexSectionArray[i].textContent = colorArray[i];
        colorSectionArray[i].style.backgroundColor = colorArray[i];
      }
    });
}

export default req;
