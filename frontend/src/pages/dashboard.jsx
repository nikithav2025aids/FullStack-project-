import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
    const location = useLocation();
    const[userdata, setUserdata] = useState("");
    //function displaydata(){
    //    setUserdata(location.state);
    //    console.log(userdata)
    //<button onClick={displaydata}>button</button>
    //}
    useEffect(()=>{
        setUserdata(location.state);
    },[])

    return ( 
        <>
            <div>{userdata.username}</div>
            <div>{userdata.password}</div>

        </>
     );
}

export default Dashboard;