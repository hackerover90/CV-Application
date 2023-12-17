import { useState } from 'react'
import Resume from './Resume.jsx'
import '../styles/App.css'
import PersonalInfo from './PersonalInfo.jsx'
import Education from './Education.jsx'

function App() {
  const [personalInfo, setpersonalInfo] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: ''
  })
  
  const [education, setEducation] = useState({
      school:'',
      degree:'',
      start:'',
      end:'',
      location:''
  })

  const [educations, setEducations] = useState([])

  const [educationFormOpen, setEducationFormOpen] = useState(false)

  function handlePersonalInfo(e) {
    const key = e.target.dataset.key
    setpersonalInfo({ ...personalInfo, [key]: e.target.value })
  }

  function handleEducation(e) {
    let key
    try {
      key = e.target.dataset.key
    } catch {
      key = null
    }
    
    
    if (key != undefined && key != null) {
      setEducation({ ...education, [key]: e.target.value })
      //console.log(key)
    } else if (key == undefined && key == null) {
      setEducation(() => e)
      //console.log(education)
    }
    
  }  

  function handleEducations() {
    setEducations([ ...educations ])
  }

  function removeEducation(education) {
    let new_educations = educations.filter((edu) => edu != education)
    setEducations(new_educations)
  }

  function handleEducationForm(education = false) {
    if (educationFormOpen === false) {
      setEducationFormOpen(true)
    } else {
      setEducationFormOpen(false)
      const regex = new RegExp("^\\s*$")
      if (regex.test(education.school)) { //if school is left blank don't add education
        console.log('ah')
        education = false
      }
      setEducation({
        school:'',
        degree:'',
        start:'',
        end:'',
        location:''
      })
      
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
  
  return (
    <div id='app'>
      <div id='resume-input'>
        <PersonalInfo value={personalInfo} onChange={handlePersonalInfo} />
        <Education 
          education={education}
          handleEducation={handleEducation}
          educations={educations}
          handleEducations={handleEducations}
          formOpen={educationFormOpen} 
          setFormOpen={handleEducationForm}
          removeEducation={removeEducation}
       />
      </div>
      <Resume value={personalInfo} educations={educations} />
    </div>
  )
}

export default App
