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
