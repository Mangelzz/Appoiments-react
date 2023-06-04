const Patient = ({ patient, setPatient, deletePatient }) => {

    const { name, owner, email, date, symptoms, id } = patient

    const handleDelete = () => {
        const response = window.confirm('Are you sure?')
        if (response) {
            deletePatient(id)
        }
    }

    return (
        <div className="mx-5 my-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Name: <span className="font-normal normal-case">{name}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Owner: <span className="font-normal normal-case">{owner}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: <span className="font-normal normal-case">{email}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Departure date: <span className="font-normal normal-case">{date}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: <span className="font-normal normal-case">{symptoms}</span></p>
            <div className="flex justify-between mt-5">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 transition-all duration-300 text-white font-bold uppercase rounded-lg"
                    onClick={() => setPatient(patient)}
                >
                    Edit
                </button>

                <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-800 transition-all duration-300 text-white font-bold uppercase rounded-lg"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Patient