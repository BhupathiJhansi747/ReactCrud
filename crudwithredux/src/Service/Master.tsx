import axios from "axios";

const url="http://localhost:3000/Devices"
class MasterService{
    GetAllDevices(){
        return axios.get(url).then((res:any)=>{
            return res;
        }).catch((error)=>{
            console.log("error",error)
        })
    }

    AddDevice(payload:any){
        return axios.post(url,payload).then((res:any)=>{
            return res;
        }).catch((error)=>{
            console.log("error",error)
        })
    }
    GetbyId(id:number){
        return axios.get(url+`/${id}`).then((res:any)=>{
            return res
        }).catch((error)=>{
            console.log("error",error)
        })
    }
    UpdateDevice(payload:any){
        return axios.put(url+`/${payload.id}`,payload).then((res)=>{
            return res
        }).catch((error)=>{
            console.log("error",error)
        })
    }
    DeleteDevice(id:number){
        return axios.delete(url+`/${id}`)
    }

}
let masterService=new MasterService();  
export default masterService;