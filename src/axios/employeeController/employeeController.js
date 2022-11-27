import axios from "axios";
import {API_URL} from "../../resource .js"

export  function getData(){
    try{
        return axios.get(API_URL.FILTER_EMPLOYEE);
    }catch(err){

    }
}

export  function loadData(params){
    try {
        return axios.get(API_URL.FILTER_EMPLOYEE + params);
    } catch (error) {
        
    }
}
export function deleteByEmployeeId(params){
    try {
        return axios.delete(API_URL.DELETE_EMPLOYEE_BY_ID + params)
    } catch (error) {
        
    }
}

export function postEmployee(param){
    try {
        return axios.post(API_URL.INSER_EMPLOYEE,param)
    } catch (error) {
        
    }
}
export function putEmployee(empId,param){
    try {
        return axios.put(API_URL.UPDATE_EMPLOYEE+ empId,param)
    } catch (error) {
        
    }
}
export function getNewCode(){
    try {
        return axios.get(API_URL.GET_NEWCODE)
    } catch (error) {
        
    }
}
export function deleteMultiple(params){
    try {
        return axios.post(API_URL.DELETE_MULTIPLE,params)
    } catch (error) {
        
    }
}
export function insertOrUpdate(empId,params){
    try {
        return axios.post(API_URL.INSERT_OR_UPDATE+empId,params)
    } catch (error) {
        
    }
}
export function exportExcelEmployee(){
    try {
        return  window.location.assign("http://localhost:26967/api/Employees/export");
    } catch (error) {
        
    }
}
