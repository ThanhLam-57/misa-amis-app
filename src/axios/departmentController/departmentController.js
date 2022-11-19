import axios from "axios";

export async function getDepartment(){
    return await axios.get("http://localhost:26967/api/Departments/get-all");
}
