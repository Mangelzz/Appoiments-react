import { useState, useEffect } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import ListPatient from "./components/ListPatient"

const App = () => {
  const patientsLocalStorage = JSON.parse(localStorage.getItem('patients')) ?? []
  const [patients, setPatients] = useState(patientsLocalStorage)
  const [patient, setPatient] = useState({})

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  const deletePatient = id => {
    const patientsFiltered = patients.filter(patient => patient.id !== id)
    setPatients(patientsFiltered)
  }

  return (
    <div className="container mx-auto mt-4">
      <Header
        title="Veterinary Patient"
      />
      <div className="mt-10 md:flex ">
        <Form 
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <ListPatient 
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App