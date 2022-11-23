//Dữ liệu URL API
export const BASE_API = `http://localhost:26967/api`
//Dữ liệu đuôi URL
export const API_URL ={
    FILTER_EMPLOYEE : `${BASE_API}/Employees/filter?`,
    DELETE_EMPLOYEE_BY_ID: `${BASE_API}/Employees/`,
    GET_NEWCODE: `${BASE_API}/Employees/new-code`,
    INSERT_OR_UPDATE:`${BASE_API}/Employees/UpdateOrInsert`,
    INSER_EMPLOYEE:`${BASE_API}/api/Employees`,
    UPDATE_EMPLOYEE:`${BASE_API}/api/Employees/`,
    DELETE_MULTIPLE:`${BASE_API}/Employees/DeleteBatch`,
    GET_POISITION:`${BASE_API}/Positions/get-all`,
    GET_DEPARTMENT:`${BASE_API}/Departments/get-all`
}