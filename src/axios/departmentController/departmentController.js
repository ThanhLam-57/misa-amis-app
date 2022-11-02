import axios from "axios";

export function getDepartment(){
    return axios.get("https://amis.manhnv.net/api/v1/Departments");
}
