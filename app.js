function gatherBirthdate() {
  let birthdate;
  birthdate = document.forms["birthdateForm"].elements["birthdate"].value;

  console.log("Bdate is: " + birthdate);
  reformatDate(birthdate);
}

function reformatDate(birthdate) {
  console.log(birthdate);

  birthdate = birthdate.split("-");
  console.log("NEW: " + birthdate);
  //   birthdate[0] = birthdate[0].substr(2);
  console.log("NEW: " + birthdate);
  //   First to last, YY, MM, DD.
  remapDate(birthdate);
}

function remapDate(birthdate) {
  // This function remaps the year for up to 99 years from this year, 2023.
  console.log("To Be Remapped: " + birthdate);
  // Define the input range
  const inputMinYear = 1924;
  const inputMaxYear = 2023;
  const inputMinMonth = 1;
  const inputMaxMonth = 12;
  const inputMinDay = 1;
  const inputMaxDay = 31;

  // Define the output range
  const outputMinYear = 0;
  const outputMaxYear = 255;
  const outputMinMonth = 0;
  const outputMaxMonth = 255;
  const outputMinDay = 0;
  const outputMaxDay = 255;

  // Define the input number
  let inputNumberYear = birthdate[0];
  let inputNumberMonth = birthdate[1];
  let inputNumberDay = birthdate[2];

  // Map the input number to the output range
  let outputNumberYear =
    ((inputNumberYear - inputMinYear) * (outputMaxYear - outputMinYear)) /
      (inputMaxYear - inputMinYear) +
    outputMinYear;

  // Map the input number to the output range
  let outputNumberMonth =
    ((inputNumberMonth - inputMinMonth) * (outputMaxMonth - outputMinMonth)) /
      (inputMaxMonth - inputMinMonth) +
    outputMinMonth;
  // Map the input number to the output range
  let outputNumberDay =
    ((inputNumberDay - inputMinDay) * (outputMaxDay - outputMinDay)) /
      (inputMaxDay - inputMinDay) +
    outputMinDay;
  console.log(outputNumberYear + " remapped year.");
  console.log(outputNumberMonth + " remapped month.");
  console.log(outputNumberDay + " remapped day.");

  outputNumberYear = Math.round(outputNumberYear);
  outputNumberMonth = Math.round(outputNumberMonth);
  outputNumberDay = Math.round(outputNumberDay);

  console.log(outputNumberYear + " rounded year.");
  console.log(outputNumberMonth + " rounded month.");
  console.log(outputNumberDay + " rounded day.");

  nextStep(outputNumberYear, outputNumberMonth, outputNumberDay);
}

function nextStep(year, month, day) {
  console.log(typeof year);
  console.log(typeof month);
  console.log(typeof day);

  const colorString = `rgb(${day}, ${month}, ${year})`;

  $("#color-output").css("background-color", colorString);
}
