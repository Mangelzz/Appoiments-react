import Patient from "./Patient"

const ListPatient = ({ patients, setPatient, deletePatient }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">List of patients</h2>
          <p className="text-lg mt-5 mb-10 text-center">Manage your <span className="text-indigo-600 font-bold">Patients and appoiments</span></p>
          {patients.map((patient) => (
            <Patient
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">There are not patients</h2>
          <p className="text-lg mt-5 mb-10 text-center">Add your first patient and <span className="text-indigo-600 font-bold">It will appear here</span></p>
        </>
      )}
    </div>
  )
}

export default ListPatient