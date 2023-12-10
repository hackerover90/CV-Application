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

  function handlePersonalInfo(e) {
    const key = e.target.dataset.key
    setpersonalInfo({ ...personalInfo, [key]: e.target.value })
  }
  
  return (
    <div id='app'>
      <div id='resume-input'>
        <PersonalInfo value={personalInfo} onChange={handlePersonalInfo} />
        <Education />
      </div>
      <Resume value={personalInfo} />
    </div>
  )
}

export default App
