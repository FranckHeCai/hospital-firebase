import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getItemById, deleteItem, updateItem } from "../services/api";


const DeleteUpdate = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [patient, setPatient] = useState(null)
  const [showPopup, setShowPopup] = useState(false)
  useEffect(() => {
    getItemById(id)
    .then(data => setPatient(data))
  }, [])
  
  const formatDate = date =>{
    return date.split("/").reverse().join("-")
  }

  const handleSaveChanges = () => {
    updateItem(id, patient);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); // Hide the popup after 3 seconds
  };

  return (
    <div className="flex flex-col gap-5 p-3 max-w-xl mx-auto items-center">
      <h2 className="text-2xl font-medium">Patient Data</h2>
    {!patient && <p>Loading...</p> }
    {patient && (
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <input onChange={(e)=>{
            setPatient(prev => ({...prev, name : e.target.value}))
          }} value={patient.name} type="text" />
          <input onChange={(e)=>{
            setPatient(prev => ({...prev, surname : e.target.value}))
          }} value={patient.surname} type="text" />
          <input onChange={(e)=>{
            const newDate = new Date(e.target.value).toLocaleDateString('es-ES', {
              day: '2-digit', 
              month: '2-digit', 
              year: 'numeric',
              timeZone: 'Europe/Madrid' 
            });
            setPatient(prev => ({...prev, date : newDate}))
          }} value={formatDate(patient.date)} type="date" />
        </div>
        <div className="flex gap-2">
          <button onClick={handleSaveChanges} className="text-white bg-teal-500 active:bg-sky-400 py-2 px-4 rounded-md mt-2">Save changes</button>
          <button onClick={()=>{
            deleteItem(id)
            navigate("/")
          }} className="text-white bg-red-500 active:bg-red-400 py-2 px-4 rounded-md mt-2">Delete</button>
        </div>
        <button onClick={() => navigate("/")} className="text-white bg-blue-500 active:bg-sky-400 py-2 px-4 rounded-md mt-2">Go back</button>
      </div>
    )}
    {showPopup && (
        <div className="fixed top-4 right-4 bg-green-500 text-white py-2 px-4 rounded-md shadow-lg transition-opacity duration-300">
          Changes saved successfully!
        </div>
      )}
    </div>
  );
};

export default DeleteUpdate;