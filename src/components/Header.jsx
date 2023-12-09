import { useState } from "react";

function Header({ text }) {
    return (
        <div className="header ">
            <div id="headerName">{text}</div>
            <div id="headerInfo"></div>
        </div>
    )
}

export default Header