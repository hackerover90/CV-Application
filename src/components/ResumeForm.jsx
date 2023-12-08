import { useState } from "react";
import PersonalInfo from "./PersonalInfo";

function ResumeForm({ value, onChange }) {
    //const [count, setCount] = useState(0)

    return (
        <div className='resume-edit'>
            <PersonalInfo value={value} onChange={onChange} />
        </div>
    )
}

export default ResumeForm