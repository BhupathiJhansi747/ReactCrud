import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import masterService from "../Service/Master";
import * as Yup from 'yup';
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AddDeviceAction, UpdateDeviceAction } from "../Redux/Action";

const Add = () => {
  const device=useSelector((state:any)=> state.service.Device)

    const location=useLocation()
    const navigate=useNavigate()
    const initialValues = {
        firstname: '',
        lastname: '',
      }
      const[isEditing,setIsEditing]=useState<boolean>(false)
      const handleSubmit = (values:any) => {
    
        if(isEditing){
          masterService.UpdateDevice(values)
          // UpdateDeviceAction(device)
          
        }
        else{
          masterService.AddDevice(values)
          // AddDeviceAction(values)
        }
        console.log("values",values)
        navigate('/')
      
      }
      useEffect(()=>{
        if(location?.state?.item){
          setIsEditing(true)
        }
      })
      const validationSchema = Yup.object().shape({
        firstname: Yup.string().required('firstname is required').min(3, "min three is required"),
        lastname: Yup.string().required('lastname is required').min(3, 'min three is required')
      })
    return ( <>
    <Formik initialValues={location?.state?.item || initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form>
        <div className="card container w-50 mt-5">
        <div className="form-group mb-3 mt-3" >
          <label htmlFor="firstname">FirstName</label>
          <Field type="text" name="firstname" id="firstname" className="form-control" />
          <ErrorMessage name="firstname" component="p" className="text-danger"></ErrorMessage>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="lastname">LastName</label>
          <Field type="text" name="lastname" id="lastname" className="form-control" />
          <ErrorMessage name="lastname" component="p" className="text-danger"></ErrorMessage>
        </div>
        <button type="submit" className="btn btn-primary mb-3">{isEditing?"Update":"submit"}</button>
        </div>
      </Form>
    </Formik>
    
    
    </> );
}
 
export default Add;


