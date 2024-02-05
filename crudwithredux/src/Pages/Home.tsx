import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import masterService from "../Service/Master";
import { DeleteAction, GetAllDevicesAction } from "../Redux/Action";
import { connect, useSelector } from "react-redux";

const Home = () => {
    const isLoading = useSelector((state:any)=> state.service.isLoading)
    const devices = useSelector((state:any)=> state.service.Devices)
    const device=useSelector((state:any)=> state.service.Device)
    const error=useSelector((state:any)=> state.service.error)

    // console.log("FHGGH",isLoading)
    const [data, setData] = useState<any>([])
    const navigate = useNavigate()
    const handleEdit = (item: any) => {
        navigate("/edit", { state: { item } })
        // UpdateDeviceAction()
        
    }
    const handleDelete = (id: number) => {
        DeleteAction(id)
        GetAllDevicesAction();
    }
    const handleview = (item: any) => {
        navigate("/view", { state: { item } })
    }
    useEffect(() => {
        GetAllDevicesAction();
        setData(devices);
    }, [])
    console.log("devices",devices)

    return (<>
    {isLoading && (
        <h1 className="spinner-border text-danger"></h1>
    )}
       {!isLoading &&  (<table className="table mt-5">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.map((item: any) =>
                        <tr key={item.id}>
                            <th>{item.id}</th>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td><button className="btn btn-success" onClick={() => handleEdit(item)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                                <button className="btn btn-info" onClick={() => handleview(item)}>view</button>
                            </td>
                        </tr>
                    )}
            </tbody>
        </table>)}
    </>);
}
// const mapStateToProps = (state: any) => ({
//     // devices: state.service.Devices,
//     device: state.service.device,
// })
// export default connect(mapStateToProps, { GetAllDevicesAction, DeleteAction })(Home);
export default Home;
