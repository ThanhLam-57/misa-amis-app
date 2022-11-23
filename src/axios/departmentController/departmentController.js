import axios from "axios";
import {API_URL} from "../../resource .js"

export async function getDepartment(){
    return await axios.get(API_URL.GET_DEPARTMENT);
}
