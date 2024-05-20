import React, { useContext, useState } from 'react';
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const AddContact = () => {
  const {store, actions} = useContext(Context)
  const [fullName,setfullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  let navigate = useNavigate()

  const submitContact = (e) =>{
    e.preventDefault()
    console.log(fullName, email, phone, address)
    actions.saveContact({name:fullName, email, phone, address})
    setfullName("")
    setEmail("")
    setPhone("")
    setAddress("")
    navigate("/")
  }
  return (
    <div className="container">
      <div>
        <h1 className="text-center mt-5">Add a new contact</h1>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setfullName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button
            onClick={(e) => {
              submitContact(e)
            }}
            type="button"
            className="btn btn-primary form-control"
          >
            save
          </button>
          <Link className="mt-3 w-100 text-center" to="/">
            or get back to contacts
          </Link>
        </form>
      </div>
    </div>
  );
};