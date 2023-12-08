import { useState } from "react";
import PersonalInfo from "./PersonalInfo";

function ResumeForm() {
    const [count, setCount] = useState(0)

    return (
        <div className='resume-edit'>
            <PersonalInfo />
        </div>
    )
}

export default ResumeForm