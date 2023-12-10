import { useState } from "react";

function Header(props) {
    const text = props.value
    return (
        <div className="resume-template-header">
            <div id="headerName">{text.name}</div>
            <div id="headerInfo">
                <div id="headerEmail">{text.email}</div>
                <div id="headerPhoneNumber">{text.phoneNumber}</div>
                <div id="headerAddress">{text.address}</div>
            </div>
        </div>
    )
}

export default Header