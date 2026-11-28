import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../components/api";

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
    
   const checkendpoint = async () => {
      const response = await API.get("/api/get");
      console.log(response.data);
   }

    return ( 
        <>
            <div>{userdata.username}</div>
            <div>{userdata.password}</div>
            <button onClick={checkendpoint}>click me</button>   
            <button onClick={checkendpoint}>click me</button>

        </>
     );
}

export default Dashboard;