import { useState } from "react";

function PersonalInfo() {
    return (
        <form>
            <h2>Personal Information</h2>
            <label htmlFor='fullName'>Full Name</label>
            <input type="text" id="fullName" name="name" placeholder="First and Last Name" />
        </form>
    )
}

export default PersonalInfo