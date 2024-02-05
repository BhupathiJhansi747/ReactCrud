import masterService from "../Service/Master";

export const GetAllDevicesAction = () => async (dispatch: any) => {
    const response = await masterService.GetAllDevices();
    try {
        console.log("response", response)
        dispatch({ type: 'GETALL_SUCCESS', payload: response?.data, error:''});
        return response;
    }
    catch (err: any) {
        dispatch({ type: 'GETALL_FAIL', payload:response?.data, error: 'Unable to get details at this moment'});
    }
}
export const AddDeviceAction = (payload: any) => async (dispatch: any) => {
    try {
        const res = await masterService.AddDevice(payload);
        dispatch({ type: 'ADDDEVICE_SUCCESS', payload: res?.data});
        return res;

    }
    catch (error: any) {
        dispatch({ type: 'ADDDEVICE_FAIL', payload: 'unable to add device'})

    }
}
export const UpdateDeviceAction=(payload:any)=>async(dispatch:any)=>{
    const res=await masterService.UpdateDevice(payload.id);

    try{
        dispatch({type:'UPDATEDEVICE_SUCCESS',payload:res?.data});
        return res;

    }
    catch{
        dispatch({type:'UPDATEDEVICE_FAIL',payload:res?.data,error:'unable to update details'});
    }
}
export const GetbyIdAction=(id:number)=>async(dispatch:any)=>{
     const res=await masterService.GetbyId(id)
    
    try{
        dispatch({type:'GETBYID_SUCCESS',payload:res?.data,Error:''})
        return res;

    }
    catch{
        dispatch({type:'GETBYID_FAIL',payload:res?.data,Error:'unable getbyid data'})


    }
}
export const DeleteAction = (id: number) => (async (dispatch: any) => {
    const res=await masterService.DeleteDevice(id)
    try {
        dispatch({ type: 'DELETEDEVICE_SUCCESS', payload: res?.data })
    } catch (error:any){
        dispatch({ type: 'DELETEDEVICE_FAIL', payload:'unable to delete data' })
     
    }

})
