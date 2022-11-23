import axios from "axios";
import {API_URL} from "../../resource .js"

export  function getData(){
    return axios.get(API_URL.FILTER_EMPLOYEE);
}

export  function loadData(params){
    return axios.get(API_URL.FILTER_EMPLOYEE + params);
}
export function deleteByEmployeeId(params){
    return axios.delete(API_URL.DELETE_EMPLOYEE_BY_ID + params)
}

export function postEmployee(param){
    return axios.post(API_URL.INSER_EMPLOYEE,param)
}
export function putEmployee(empId,param){
    return axios.put(API_URL.UPDATE_EMPLOYEE+ empId,param)
}
export function getNewCode(){
    return axios.get(API_URL.GET_NEWCODE)
}
export function deleteMultiple(params){
    return axios.post(API_URL.DELETE_MULTIPLE,params)
}
export function insertOrUpdate(empId,params){
    return axios.post(API_URL.INSERT_OR_UPDATE+empId,params)
}
