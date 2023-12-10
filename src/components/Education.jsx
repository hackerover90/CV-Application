import FormInput from './FormInput'
import { v4 as uuid } from 'uuid';


function AddEducationForm({ formOpen, setFormOpen, education, handleEducation }) {
    return (
        <form id="personalInfoForm" className="bg-white p-3">
            <FormInput 
                id={'school'}
                labelName={'School'}
                type={'text'}
                name={'school_name'}
                value={education.school}
                onChange={handleEducation}
                placeholder={'Enter School Name'}
                data-key={'school'}
            />
            <button type="button" onClick={() => setFormOpen(education)} className="btn btn-primary">Save</button>
        </form>
    )
}

export default function Education({ education, handleEducation, educations, handleEducations, formOpen, setFormOpen }) {
    const displayEducation = educations.map(edu =>
        <li key={edu.school}>{edu.school}</li>    
    )
    
    return (
        <div id="education">
            <h2>Education</h2>
            {(formOpen === false) && (
                <ul>{displayEducation}</ul>
            )}
            {formOpen && <AddEducationForm formOpen={formOpen} setFormOpen={setFormOpen} education={education} handleEducation={handleEducation} />}
            <button type="button" onClick={setFormOpen} className="btn btn-primary">Add Education</button>
        </div>
    )
}