import { useEffect, useState } from "react"
import Error from "./Error";

const Form = ({patients, setPatients, patient, setPatient}) => {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [symptoms, setSymptoms] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if( Object.keys(patient).length > 0){
            setName(patient.name)
            setOwner(patient.owner)
            setEmail(patient.email)
            setDate(patient.date)
            setSymptoms(patient.symptoms)
        }
    }, [patient])


    const generateId = () => {
        const random = Math.random().toString(36).substring(2);
        const idDate = Date.now().toString(36);
        return random + idDate;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form
        if ([name, owner, email, date, symptoms].includes('')) {
            setError(true)
            return
        } 
        setError(false)
        //Patient object
        const patientObj = {
            name,
            owner,
            email,
            date,
            symptoms
        }

        if(patient.id){
            // Edit patient
            patientObj.id = patient.id

            const patientsEdited = patients.map( patienState => patienState.id === patient.id ? patientObj : patienState)
            setPatients(patientsEdited)
            setPatient({})
        }else{
            // Add patient
            patientObj.id = generateId()
            setPatients([...patients, patientObj])
        }


        // Reset form
        setName('')
        setOwner('')
        setEmail('')
        setDate('')
        setSymptoms('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Monitoring patients</h2>
            <p className="text-lg mt-5 text-center mb-10">Add patients and <span className="text-indigo-600 font-bold">Manage them</span></p>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                {error && <Error>All fields are required</Error>}
                <div className="mb-5">
                    <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">Pet's Name</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none" type="text" placeholder="Pet's name" id="pet" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">Owner's Name</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none" type="text" placeholder="Owner's name" id="owner" value={owner} onChange={(e) => setOwner(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none" type="email" placeholder="Your Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="block text-gray-700 uppercase font-bold">departure date</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none" type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="block text-gray-700 uppercase font-bold">symptoms</label>
                    <textarea id="symptoms" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none resize-none" placeholder="Describe symptoms" value={symptoms} onChange={(e) => setSymptoms(e.target.value)} />
                </div>
                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-800 transition-all duration-500" value={ patient.id ? 'Edit patient' : 'Add patient' } />
            </form>
        </div>
    )
}

export default Form