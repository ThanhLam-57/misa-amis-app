import axios from "axios";
import {API_URL} from "../../resource .js"
/**
 * Gọi danh sách chức danh
 * Author:NTLAM(12/10/2022)
*/
export function getPoisition(){
    try{
        return axios.get(API_URL.GET_POISITION);
    }catch(err){

    }
}