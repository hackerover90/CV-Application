import { useState } from 'react'
import Resume from './Resume.jsx'
import '../styles/App.css'
import PersonalInfo from './PersonalInfo.jsx'
import Education from './Education.jsx'
import Experiance from './WorkExperiance.jsx'

function App() {
  const [personalInfo, setpersonalInfo] = useState({
    name: 'Isaac Noori',
    email: 'isaac_noori@outlook.com',
    phoneNumber: '6476677674',
    address: '386 Alfred St'
  })
  const [education, setEducation] = useState({
    school:"Queen's University",
    degree:'Computing',
    start:'Sept 2019',
    end:'May 2020',
    location:'Kingston, ON'
  })
  const [educations, setEducations] = useState([education])
  const [educationFormOpen, setEducationFormOpen] = useState(false)

  const [experience, setExperience] = useState({
    companyName:'Nuevo',
    position:'Assembler',
    start:'May 2022',
    end:'Aug 2022',
    location:'Aurora, ON',
    description:'Assembled furniture like a G'
  })
  const [experiences, setExperiences] = useState([experience])
  const [experienceFormOpen, setExperienceFormOpen] = useState(false)

  function handlePersonalInfo(e) {
    const key = e.target.dataset.key
    setpersonalInfo({ ...personalInfo, [key]: e.target.value })
  }

  function handleEducation(edu) {
    let key
    try {
      key = edu.target.dataset.key
    } catch {
      key = null
    }
    
    if (key != undefined && key != null) {
      setEducation({ ...education, [key]: edu.target.value })
      //console.log(key)
    } else if (key == undefined || key == null) {
      setEducation(() => edu)
      //console.log(education)
    }
    
  }  

  function handleExperience(exp) {
    let key
    try {
      key = exp.target.dataset.key
    } catch {
      key = null
    }
    
    if (key != undefined && key != null) {
      setExperience({ ...experience, [key]: exp.target.value })
      //console.log(key)
    } else if (key == undefined || key == null) {
      setExperience(() => exp)
      //console.log(education)
    }
    
  }  

  function removeEducation(education) {
    let new_educations = educations.filter((edu) => edu != education)
    setEducations(new_educations)
  }

  function removeExperience(experience) {
    let new_experiences = experiences.filter((edu) => edu != experience)
    setExperiences(new_experiences)
  }

  function handleEducationForm(education = false) {
    /*
    This enables the form to reset all inputs upon save or cancellation
    */
    setEducation({
      school:'',
      degree:'',
      start:'',
      end:'',
      location:''
    })
    if (educationFormOpen === false) {
      setEducationFormOpen(true)
    } else {
      setEducationFormOpen(false)
      const regex = new RegExp("^\\s*$")
      /*
      if school is left blank don't add education
      */
      if (regex.test(education.school)) {
        //console.log('ah')
        education = false
      }

      /*
      if education is not defined false by above process then add education object
      to educations array
      */ 
      if (education) {
        for (let i=0; i<educations.length; i++) {
          /*Checks if the school name of the education thats about to be added
          already exists and if so only updates the attributes that were updated
          instead of adding a new education state to the educations array*/
          if (educations[i].school == education.school) {
            educations[i] = education
            setEducations(educations)
            return
          }
        }
        setEducations([ ...educations, education])
      }
    }
  }

  function handleExperienceForm(experience = false) {
    /*
    This enables the form to reset all inputs upon save or cancellation
    */
    setExperience({
      companyName:'',
      position:'',
      start:'',
      end:'',
      location:'',
      description:''
    })
    if (experienceFormOpen === false) {
      setExperienceFormOpen(true)
    } else {
      setExperienceFormOpen(false)
      const regex = new RegExp("^\\s*$")
      /*
      if company is left blank don't add experience
      */
      if (regex.test(experience.companyName)) {
        //console.log('ah')
        experience = false
      }
      
      /*
      if education is not defined false by above process then add education object
      to educations array
      */ 
      if (experience) {
        for (let i=0; i<experiences.length; i++) {
          /*Checks if the school name of the education thats about to be added
          already exists and if so only updates the attributes that were updated
          instead of adding a new education state to the educations array*/
          if (experiences[i].companyName == experience.companyName) {
            experiences[i] = experience
            setExperiences(experiences)
            return
          }
        }
        setExperiences([ ...experiences, experience])
      }
    }
  }
  
  return (
    <div id='app'>
      <div id='resume-input'>
        <PersonalInfo value={personalInfo} onChange={handlePersonalInfo} />
        <Education 
          education={education} handleEducation={handleEducation}
          educations={educations}
          formOpen={educationFormOpen} setFormOpen={handleEducationForm}
          removeEducation={removeEducation}
       />
       <Experiance
          experience={experience} handleExperience={handleExperience}
          experiences={experiences}
          experienceFormOpen={experienceFormOpen} setExperienceFormOpen={handleExperienceForm}
          removeExperience={removeExperience}
       />
      </div>
      <Resume value={personalInfo} educations={educations} experiences={experiences} />
    </div>
  )
}

export default App
