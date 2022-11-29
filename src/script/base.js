/**
 * Formatdate
 * @param {*} date 
 * @returns 
 * Author:NTLAM(30/10/2022)
 */
export function formatDate(date) {
  try {
    if (date) {
      date = new Date(date);

      // Lấy ra ngày:
      let dateValue = date.getDate();
      dateValue = dateValue < 10 ? `0${dateValue}` : dateValue;

      // lấy ra tháng:
      let month = date.getMonth() + 1;
      month = month < 10 ? `0${month}` : month;

      // lấy ra năm:
      let year = date.getFullYear();

      return `${dateValue}/${month}/${year}`;
    } else {
      return "";
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * Forrmatdate
 * @param {*} date 
 * @returns 
 * Author:NTLAM(30/10/2022)
 */
export function formatDateValue(date) {
  try {
    if (date) {
      date = new Date(date);

      // Lấy ra ngày:
      let dateValue = date.getDate();
      dateValue = dateValue < 10 ? `0${dateValue}` : dateValue;

      // lấy ra tháng:
      let month = date.getMonth() + 1;
      month = month < 10 ? `0${month}` : month;

      // lấy ra năm:
      let year = date.getFullYear();

      return `${year}-${month}-${dateValue}`;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}