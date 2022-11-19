import axios from "axios";

export function getPoisition(){
    return axios.get("http://localhost:26967/api/Positions/get-all");
}