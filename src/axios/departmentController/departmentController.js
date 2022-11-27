import axios from "axios";
import {API_URL} from "../../resource .js"

/**
 * Gọi danh sách đơn vị
 * Author:NTLAM(12/10/2022)
*/
export async function getDepartment(){
    try{
        return await axios.get(API_URL.GET_DEPARTMENT);
    }catch(err){

    }
}
