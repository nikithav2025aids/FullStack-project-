import { useState } from "react";

function Login() {
    const[email, setEmail] = useState("")
  const[pass, setPass] = useState("")
  const handlesubmit = (event)=>{
    event.preventDefalut();
    console.log(email, pass)
  }
    return ( 
    <>
      <div>Hi</div>
      {/*}
      <input type="email" required placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" required placeholder="Enter your password" value={pass} onChange={(e)=>{setPass(e.target.value)} }/>
      <button type="submit" onClick={()=>console.log(email,pass)}>Submit</button>
      <button type="submit" onClick={()=>print()}>Submit</button> http://localhost:5173/
      */}
      
      <form onSubmit={handlesubmit}>
        Email:
        <input type="email" required placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br></br>
        Password:
        <input type="password" required placeholder="Enter your password" value={pass} onChange={(e)=>{setPass(e.target.value)} }/>
        <br></br>
        <button type="submit" >Submit</button>
      </form>
    </>
    
     );
}

export default Login;