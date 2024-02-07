import FormInput from './FormInput'
import { v4 as uuid } from 'uuid';

function AddExperienceForm({ setExperienceFormOpen, experience, handleExperience }) {
    //console.log(education)
    //console.log(formOpen)
    return (
        <form id="personalInfoForm" className="bg-white p-3">
            <FormInput 
                id={'company'}
                labelName={'Company'}
                type={'text'}
                name={'company'}
                value={experience.companyName}
                onChange={handleExperience}
                placeholder={'Enter Company Name'}
                data-key={'companyName'}
            />
            <FormInput 
                id={'position'}
                labelName={'position'}
                type={'text'}
                name={'position'}
                value={experience.position}
                onChange={handleExperience}
                placeholder={'Enter Job Position'}
                data-key={'position'}
            />
            <FormInput 
                id={'start'}
                labelName={'Start Date'}
                type={'text'}
                name={'start_date'}
                value={experience.start}
                onChange={handleExperience}
                placeholder={'Enter Start Date'}
                data-key={'start'}
            />
            <FormInput 
                id={'end'}
                labelName={'End Date'}
                type={'text'}
                name={'end_date'}
                value={experience.end}
                onChange={handleExperience}
                placeholder={'Enter End Date'}
                data-key={'end'}
            />
            <FormInput 
                id={'location'}
                labelName={'Location'}
                type={'text'}
                name={'school_location'}
                value={experience.location}
                onChange={handleExperience}
                placeholder={'Enter School Location'}
                data-key={'location'}
            />
            <FormInput 
                id={'description'}
                labelName={'Description'}
                type={'text'}
                name={'job_description'}
                value={experience.description}
                onChange={handleExperience}
                placeholder={'Enter Job Description'}
                data-key={'description'}
            />
            <div className='d-flex gap-2'>
                <button type="button" onClick={() => setExperienceFormOpen(experience)} className="btn btn-primary">Save</button>
                <button type="button" onClick={() => setExperienceFormOpen()} className="btn btn-secondary">Cancel</button>
            </div>
            
        </form>
    )
}

export default function Experience({ experience, handleExperience, experiences, experienceFormOpen, setExperienceFormOpen, removeExperience }) {
    
    /*
    Displays form of selected experience with prior info filled in 
    ***
    1. Find specific experience object in experiences array
    2. Use found object info to update experiences state
    3. Updated experience state is passed on to AddExperienceForm component
    */
    function experienceForm(corpName) {
        setExperienceFormOpen()
        experience = experiences.find(exp => exp.companyName == corpName) 
        handleExperience(experience)
        //console.log(education)
        return (
            <>
            {experienceFormOpen && <AddExperienceForm experienceFormOpen={experienceFormOpen} setExperienceFormOpen={setExperienceFormOpen} experience={experience} handleExperience={handleExperience} />}
            </>
        )
    }


    //displays list of experiences with delete button
    //can click each experience and form with experience info will open
    const displayExperiences = experiences.map(exp =>
        <li key={uuid()} className='d-flex justify-content-between'>
            <div onClick={() => experienceForm(exp.companyName)} className='experiences-list'>{exp.companyName}</div>
            <button type="button" onClick={() => removeExperience(exp)} className="btn-close" aria-label="Close"></button>
        </li>    
    )
    
    return (
        <div id="experience">
            <h2>Experiences</h2>
            {(experienceFormOpen === false) && (
                <>
                    <ul className='experiences'>{displayExperiences}</ul>
                    <button type="button" onClick={setExperienceFormOpen} className="btn btn-primary">Add Experience</button>
                </>
                
            )}
            {experienceFormOpen && <AddExperienceForm setExperienceFormOpen={setExperienceFormOpen} experience={experience} handleExperience={handleExperience} />}
            
        </div>
    )
}