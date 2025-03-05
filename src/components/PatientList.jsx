import { useNavigate } from "react-router-dom";

const PatientList = ({patients}) => {
  const navigate = useNavigate()
  return (
    patients.map(patient =>(
          <div className="flex w-full items-center justify-between border-b-2 border-sky-500 py-2" key={patient.id}>
            <div className="flex gap-1.5">
              <p className="">{patient.name}</p>
              <p>{patient.surname}</p>
              <p>{patient.date}</p>
            </div>
            <div>
              <button onClick={()=>{navigate(`/patient/${patient.id}`)}} className="py-1 px-3 bg-blue-500 cursor-pointer rounded-md text-white">Details</button>
            </div>
          </div>
        ))
  );
};

export default PatientList;