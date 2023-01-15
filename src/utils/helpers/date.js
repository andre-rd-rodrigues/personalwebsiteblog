const DateTime = require("datetime-js");

/**
 * Function to convert date object to readable date
 * @param {string} date string coming from new Date(date) object
 */

export const convertDate = (date) => {
  if (date) {
    return DateTime(new Date(date), "%M:s %d, %Y");
  }
};

/**
 * Function to check if date is in this week
 * @param {Date} date
 */

export function isDateInThisWeek(date) {
  const todayObj = new Date();
  const todayDate = todayObj.getDate();
  const todayDay = todayObj.getDay();

  // get first date of week
  const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay));

  // get last date of week
  const lastDayOfWeek = new Date(firstDayOfWeek);
  lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);

  // if date is equal or within the first and last dates of the week
  return date >= firstDayOfWeek && date <= lastDayOfWeek;
}
