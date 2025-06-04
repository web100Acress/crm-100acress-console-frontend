import axios from "axios";
import { BACKEND_API_PATHS } from "../helpers/constants/backendApiPath.constant";
import { API_BACKEND_PATH } from "../config/env";

export const GetAllUser = async() =>{
    try {
      const response = await axios.get(`${API_BACKEND_PATH}/${BACKEND_API_PATHS.USERS}`,{
        withCredentials:true
      })
      return response?.data?.data;
    } catch (error) {
        console.error("Error while Fetching Users :-", error)
    }
};

export const CreateLead = async(FormData:any) =>{
    try{
        const response = await axios.post(`${API_BACKEND_PATH}/${BACKEND_API_PATHS.LEADS}`,
        {
            FormData
        },{
            withCredentials:true
        })
        return response.data;
    }catch(error){
      console.error("Error in Creating Lead :- ", error); 
    }
};

export const CreateCRMUser = async (FormData:any)=>{
  try{
    const response = await axios.post(`${API_BACKEND_PATH}/${BACKEND_API_PATHS.AUTH}/${BACKEND_API_PATHS.CREATEUSER}`,
    {
        FormData
    },{
        withCredentials:true
    })
    return response.data;
}catch(error){
  console.error("Error in Creating CRMUser :- ", error); 
}
};
