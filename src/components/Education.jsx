import FormInput from './FormInput'
import { v4 as uuid } from 'uuid';


function AddEducationForm({ formOpen, setFormOpen, education, handleEducation }) {
    //console.log(education)
    //console.log(formOpen)
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
            <FormInput 
                id={'degree'}
                labelName={'Degree'}
                type={'text'}
                name={'degree'}
                value={education.degree}
                onChange={handleEducation}
                placeholder={'Enter School Degree'}
                data-key={'degree'}
            />
            <FormInput 
                id={'start'}
                labelName={'Start Date'}
                type={'text'}
                name={'start_date'}
                value={education.start}
                onChange={handleEducation}
                placeholder={'Enter Start Date'}
                data-key={'start'}
            />
            <FormInput 
                id={'end'}
                labelName={'End Date'}
                type={'text'}
                name={'end_date'}
                value={education.end}
                onChange={handleEducation}
                placeholder={'Enter End Date'}
                data-key={'end'}
            />
            <FormInput 
                id={'location'}
                labelName={'Location'}
                type={'text'}
                name={'school_location'}
                value={education.location}
                onChange={handleEducation}
                placeholder={'Enter School Location'}
                data-key={'location'}
            />
            <div className='d-flex gap-2'>
                <button type="button" onClick={() => setFormOpen(education)} className="btn btn-primary">Save</button>
                <button type="button" onClick={() => setFormOpen()} className="btn btn-secondary">Cancel</button>
            </div>
            
        </form>
    )
}

export default function Education({ education, handleEducation, educations, handleEducations, formOpen, setFormOpen, removeEducation }) {
    
    /*
    Displays form of selected school with prior info filled in 
    ***
    1. Find specific education object in educations array
    2. Use found object info to update education state
    3. Updated education state is passed on to AddEducationForm component
    */
    function educationForm(schoolName) {
        setFormOpen()
        education = educations.find(edu => edu.school == schoolName) 
        handleEducation(education)
        //console.log(education)
        return (
            <>
            {formOpen && <AddEducationForm formOpen={formOpen} setFormOpen={setFormOpen} education={education} handleEducation={handleEducation} />}
            </>
        )
    }


    //displays list of educations with delete button
    //can click each education and form with education info will open
    const displayEducation = educations.map(edu =>
        <li key={uuid()} className='d-flex justify-content-between'>
            <div onClick={() => educationForm(edu.school)} className='school-list'>{edu.school}</div>
            <button type="button" onClick={() => removeEducation(edu)} className="btn-close" aria-label="Close"></button>
        </li>    
    )
    
    return (
        <div id="education">
            
            {(formOpen === false) && (
                <>
                    <ul className='education'>{displayEducation}</ul>
                    <button type="button" onClick={setFormOpen} className="btn btn-primary">Add Education</button>
                </>
                
            )}
            {formOpen && <AddEducationForm formOpen={formOpen} setFormOpen={setFormOpen} education={education} handleEducation={handleEducation} />}
            
        </div>
    )
}