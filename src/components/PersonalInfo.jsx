import { useState } from "react";

function PersonalInfo({value, onChange}) {
    return (
        <form className="bg-white p-3">
            <h2>Personal Information</h2>
            <div className="mb-3">
                <label htmlFor='fullName' className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullName" name="name" value={value} onChange={onChange} placeholder="First and Last Name" />
            </div>
            <div className="mb-3">
                <label htmlFor='email' className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter Email" />
            </div>
            <div className="mb-3">
                <label htmlFor='phoneNum' className="form-label">Phone Number</label>
                <input type="number" className="form-control" id="phoneNum" name="phoneNumber" placeholder="Enter Phone Number" />
            </div>
            <div className="mb-3">
                <label htmlFor='address' className="form-label">Address</label>
                <input type="text" className="form-control" id="address" name="address" placeholder="City, Country" />
            </div>
        </form>
    )
}

export default PersonalInfo