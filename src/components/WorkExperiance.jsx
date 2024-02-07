import FormInput from './FormInput'
import { v4 as uuid } from 'uuid';

export default function WorkExperiance({ experience, experiences, experienceFormOpen }) {
    let displayExperience = experiences.map(exp => 
        <li key={uuid()} className='d-flex justify-content-between'>
            <div>{exp.companyName}</div>
        </li>
    )
    
    return (
        <div id='experiance'>
            {(experienceFormOpen == false) && (
                <>
                    <ul className='experiences'>{displayExperience}</ul>
                    <button type='button' className="btn btn-primary">Add Experience</button>
                </>
                
            )}
        </div>
    )
}