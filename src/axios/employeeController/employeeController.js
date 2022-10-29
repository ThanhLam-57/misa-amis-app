import axios from "axios";


export function getData(){
    axios
      .get("https://amis.manhnv.net/api/v1/Employees")
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
}
