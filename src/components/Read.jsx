import PatientList from "./PatientList"

const Read = ( {patients} ) => {

  return (
    <div className="flex flex-col gap-5 sm:border-2 sm:border-sky-500 sm:rounded-md p-3 max-w-xl mx-auto items-center">
      <h1 className='text-2xl font-bold'>Home</h1>
      <div className="flex flex-col w-full gap-2">
        <PatientList patients={patients} />
      </div>
      
    </div>
  );
};

export default Read;