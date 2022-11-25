import axios from "axios";
import {API_URL} from "../../resource .js"

export async function getDepartment(){
    try{
        return await axios.get(API_URL.GET_DEPARTMENT);
    }catch(err){

    }
}
