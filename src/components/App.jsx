import { useState } from 'react'
import Resume from './Resume.jsx'
import ResumeForm from './ResumeForm.jsx'
import '../styles/App.css'

function App() {
  const [text, setText] = useState("")
  function handleChange(e) {
    setText(e.target.value)
  }
  return (
    <div id='app'>
      <ResumeForm value={text} onChange={handleChange} />
      <Resume text={text} />
    </div>
  )
}

export default App
