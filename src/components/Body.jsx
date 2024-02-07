import { v4 as uuid } from 'uuid';

function Body({ educations }) {
    
    const displayEducations = educations.map((edu) => {
        return (
            <div key={uuid()} className='row mb-3'>
                <div className='col-6 d-flex flex-column'>
                    <div>{edu.start} - {edu.end}</div>
                    <div>{edu.location}</div>
                </div>
                <div className='col-6 d-flex flex-column'>
                    <div className='fw-bold'>{edu.school}</div>
                    <div>{edu.degree}</div>
                </div>
            </div>
        )
    })


    return (
        <div className="resume-template-body">
            {(educations.length > 0) && (
                <div className="display-resume-educations m-3">
                    <h4 className='text-center'>Education</h4>
                    {displayEducations}
                </div>
            )}
            
        </div>
    )
}

export default Body