import axios from "axios";

export  function getData(){
    return axios.get("https://amis.manhnv.net/api/v1/Employees");
}

export  function loadData(params){
    return axios.get("https://amis.manhnv.net/api/v1/Employees/filter?" + params);
}


export function deleteByEmployeeId(params){
    return axios.delete("https://amis.manhnv.net/api/v1/Employees/" + params)
}

export function postEmployee(param){
    return axios.post("https://amis.manhnv.net/api/v1/Employees",param)
}
export function putEmployee(empId,param){
    return axios.put("https://amis.manhnv.net/api/v1/Employees/"+ empId,param)
}
