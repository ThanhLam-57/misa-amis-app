import axios from "axios";

export function getPoisition(){
    return axios.get("https://amis.manhnv.net/api/v1/Positions");
}