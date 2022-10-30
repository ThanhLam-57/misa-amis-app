import axios from "axios";


export function getData(){
    return axios.get("https://amis.manhnv.net/api/v1/Employees");
}
