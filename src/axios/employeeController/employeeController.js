import axios from "axios";

export function getData(){
    return axios.get("https://amis.manhnv.net/api/v1/Employees");
}

export  function loadData(params){
    return axios.get("https://amis.manhnv.net/api/v1/Employees/filter" + params);
}
