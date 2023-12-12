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
    console.log(e.target.value)
    const key = e.target.dataset.key
    setEducation({ ...education, [key]: e.target.value })
  }  

  function handleEducations() {
    setEducations([ ...educations ])
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
      if (education) (
        setEducations([ ...educations, education])
      )
      
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

       />
      </div>
      <Resume value={personalInfo} />
    </div>
  )
}

export default App
