import axios from "axios";

axios.defaults.timeout= 10000;

axios.get(`https://amis.manhnv.net/api/v1/Employees`)
.then((res)=>{
    console.log(res);
}).catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });