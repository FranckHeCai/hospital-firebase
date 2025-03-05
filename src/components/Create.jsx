import { useEffect, useState } from "react";
import { createItem } from "../services/api";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [created, setCreated] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const surname = e.target.surname.value;
    const date = new Date(e.target.date.value).toLocaleDateString('es-ES', {
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        timeZone: 'Europe/Madrid' 
      });
    const newPatient = {name: name, surname: surname, date: date };
    console.log(newPatient)
    createItem(newPatient)
    setCreated(true)

  }

  return (
    <div className="flex flex-col gap-5 p-3 max-w-xl mx-auto">
      <h1 className='text-2xl font-bold text-center'>Create</h1>
      {
        created
        ? (
          <div className="flex flex-col gap-2 items-center">
            <div className="flex gap-2 items-center">
              <h2 className="text-lg" >Patient file created successfully!</h2>
              <img className="w-10" src="./check_circle.svg" alt="check icon" />
            </div>
            <button onClick={()=>{
                navigate(`/`)
                setCreated(false)
              }}
              className="text-white bg-blue-500 active:bg-sky-400 py-2 px-4 rounded-md mt-2"
            >Continue</button>
          </div>
        )
        : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="name">Name</label>
              <input className="py-1 px-2 border-2 border-blue-300 rounded" id="name" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="surname">Surname</label>
              <input className="py-1 px-2 border-2 border-blue-300 rounded" id="surname" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="date">Birthday</label>
              <input className="py-1 px-2 border-2 border-blue-300 rounded" id="date" type="date" />
            </div>
            <button className="bg-blue-500 active:bg-blue-600 text-white py-2 rounded-md mt-2">Create</button>
          </form>
        )
      }
      
    </div>
  );
};

export default Create;