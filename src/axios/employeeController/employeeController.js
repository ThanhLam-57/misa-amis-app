import axios from "axios";

export  function getData(){
    return axios.get("https://amis.manhnv.net/api/v1/Employees");
}

export  function loadData(params){
    return axios.get("http://localhost:26967/api/Employees/filter?" + params);
}


export function deleteByEmployeeId(params){
    return axios.delete("http://localhost:26967/api/Employees/" + params)
}

export function postEmployee(param){
    return axios.post("http://localhost:26967/api/Employees",param)
}
export function putEmployee(empId,param){
    return axios.put("http://localhost:26967/api/Employees/"+ empId,param)
}
export function getNewCode(){
    return axios.get("http://localhost:26967/api/Employees/new-code")
}
export function deleteMultiple(params){
    return axios.post("http://localhost:26967/api/Employees/DeleteBatch",params)
}
