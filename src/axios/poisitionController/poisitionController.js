import axios from "axios";
import {API_URL} from "../../resource .js"
export function getPoisition(){
    return axios.get(API_URL.GET_POISITION);
}