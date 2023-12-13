function getFormattedToday() {
  // Get the current date
  var today = new Date();

  // Get the day, month, and year
  var day = today.getDate();
  var month = today.getMonth() + 1; // Note: Month is zero-based, so we add 1
  var year = today.getFullYear();

  // Pad single-digit day and month with leading zeros
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  // Create the formatted date string (dd/mm/yyyy)
  var formattedDate = day + "/" + month + "/" + year;

  return formattedDate;
}

module.exports = { getFormattedToday };

//  12/12/2023
