import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    keepSignedIn: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData,"formData"); 
    try {
      const response = await axios.post("http://localhost:3000/login", formData);
    
      if (response.data.token) {
        alert("Login successful!");
        window.location.href = "/dashboard"; // Redirect to dashboard
      } else {
        alert("Invalid email or password.");
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status code outside the 2xx range
        if (error.response.status === 400) {
          alert("Invalid request. Please check your input.");
        } else if (error.response.status === 401) {
          alert("Unauthorized: Incorrect email or password.");
        } else if (error.response.status === 500) {
          alert("Server error. Please try again later.");
        } else {
          alert(error.response.data?.error || "An error occurred. Please try again.");
        }
      } else if (error.request) {
        // Request was made but no response received
        alert("No response from server. Please check your internet connection.");
      } else {
        // Something else went wrong
        alert("An unexpected error occurred: " + error.message);
        console.error(error);
        console.error("error.message");
      }
    }
    
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                          <label className="form-label" htmlFor="email">Your Email</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" id="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
                          <label className="form-label" htmlFor="password">Password</label>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-4">
                        <input className="form-check-input me-2" type="checkbox" id="keepSignedIn" name="keepSignedIn" checked={formData.keepSignedIn} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="keepSignedIn">Keep me signed in</label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">Login</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Sample" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;