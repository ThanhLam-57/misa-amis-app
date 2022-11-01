export function formatDate(date) {
    var dateValue = null;
    try {
      if (date) {
        date = new Date(date);
  
        // Lấy ra ngày:
        dateValue = date.getDate();
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
  