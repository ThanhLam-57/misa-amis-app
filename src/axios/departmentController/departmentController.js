import axios from "axios";

export async function getDepartment(){
    return await axios.get("https://amis.manhnv.net/api/v1/Departments");
}
