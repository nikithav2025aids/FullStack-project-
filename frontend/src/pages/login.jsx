import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({ Username: "", Password: "" });

  function handleChange(e) {
    setFormData({ ...formData, 
        [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <div>Hi</div>
      <form onSubmit={handleSubmit}>
        Email:
        <input type="email" name="Username" placeholder="Enter your email" onChange={handleChange}/>
        <br/>
        Password:
        <input type="password" name="Password" placeholder="Enter your password" onChange={handleChange}/>
        <br/>
        <button type="submit">Submit!</button>
      </form>
    </>
  );
}

export default Login;