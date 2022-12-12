import axios from "axios";
import {API_URL} from "../../resource .js"

/**
 * Gọi danh sách nhân viên
 * Author:NTLAM(12/10/2022)
*/
export  function getData(){
    try{
        return axios.get(API_URL.FILTER_EMPLOYEE);
    }catch(err){

    }
}
/**
 * Gọi danh sách nhân viên theo điều kiện lọc
 * Author:NTLAM(12/10/2022)
*/
export  function loadData(params){
    try {
        return axios.post(API_URL.FILTER_EMPLOYEE + params);
    } catch (error) {
        
    }
}
/**
 * Xoá thông tin nhân viên theo ID
 * Author:NTLAM(12/10/2022)
*/
export function deleteByEmployeeId(params){
    try {
        return axios.delete(API_URL.DELETE_EMPLOYEE_BY_ID + params)
    } catch (error) {
        
    }
}
/**
 * Thêm mới nhân viên
 * Author:NTLAM(12/10/2022)
*/
export function postEmployee(param){
    try {
        return axios.post(API_URL.INSER_EMPLOYEE,param)
    } catch (error) {
        
    }
}
/**
 * Sửa thông tin nhân viên
 * Author:NTLAM(12/10/2022)
*/
export function putEmployee(empId,param){
    try {
        return axios.put(API_URL.UPDATE_EMPLOYEE+ empId,param)
    } catch (error) {
        
    }
}
/**
 * Tựu động lấy mã code nhân viên
 * Author:NTLAM(12/10/2022)
*/
export function getNewCode(){
    try {
        return axios.get(API_URL.GET_NEWCODE)
    } catch (error) {
        
    }
}
/**
 * Xoá danh sách nhân viên theo ID
 * Author:NTLAM(12/10/2022)
*/
export function deleteMultiple(params){
    try {
        return axios.post(API_URL.DELETE_MULTIPLE,params)
    } catch (error) {
        
    }
}
/**
 * Thêm mới hoặc update thông tin nhân viên
 * Author:NTLAM(12/10/2022)
*/
export function insertOrUpdate(empId,params){
    try {
        return axios.post(API_URL.INSERT_OR_UPDATE+empId,params)
    } catch (error) {
        
    }
}
/**
 * Export file excel thông tin nhân viên
 * Author:NTLAM(12/10/2022)
*/
export function exportExcelEmployee(){
    try {
        return  window.location.assign("http://localhost:26967/api/Employees/export");
    } catch (error) {
        
    }
}
