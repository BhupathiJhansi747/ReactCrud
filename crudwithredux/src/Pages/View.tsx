import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const View = () => {
    const location=useLocation()
    const singledata=location?.state?.item

    return ( 
        <>
        <div className="card container w-50 mt-5">
        <div>First Name<p>{singledata?.firstname}</p></div>
        <div>Last Name<p>{singledata?.lastname}</p></div>
        </div>

        </>
     );
}
 
export default View;