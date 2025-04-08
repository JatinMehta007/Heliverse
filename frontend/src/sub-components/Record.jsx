import { useState } from "react"
import { Admin } from "../components/Admin"
import  axios  from "axios"
import { BACKEND_URL } from "../../config";
import { Spinner } from "../components/skeleton/spinner";

export const Record=()=>{

  const [patientName, setPatientName] = useState("");
  const [diseases, setDiseases] = useState("");
  const [allergies, setAllergies] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [bedNumber, setBedNumber] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [loading, setIsLoading] = useState(false);

  const Submit = async (e)=>{
    const newRecord = {
      username : patientName,
      diseases: diseases,
      allergies:allergies,
      room_number:roomNumber,
      bed_number:bedNumber,
      age:age,
      gender:gender,
      contact_information:contact,
    };

    try{
      setIsLoading(true);
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/insert`,newRecord,{
        headers:{
          "Content-Type":"application/json",
        },
      });

      alert("Record added successfully");
    } catch(error){
      console.error("Error" , error);
      alert("username already exist! ");
    } finally{
      setIsLoading(false);
    }
  }

  if (loading) {
    // Render the spinner as a full-page overlay
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner/>
      </div>
    );
  }
    return(
        <div>
        
          <div className="text-white m-10  rounded-lg bg-black h-auto ">
            <p className="font-bold text-4xl text-center pt-10">
              Create an Record
            </p>
            
            <div className="m-10 ml-20 text-base font-medium h-full">
              <p className="mt-2">Patient</p>
              <input
                type="text"
                placeholder="patient name"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
                value={patientName}
                onChange={(e)=>setPatientName(e.target.value)}
              />

              <p className="mt-5">Diseases</p>
              <input
                type="text"
                placeholder="disease name"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
                value={diseases}
                onChange={(e)=>setDiseases(e.target.value)}
              />

              <p className="mt-5">Allergies</p>
              <input
                type="text"
                placeholder="Allergy name"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
                value={allergies}
                onChange={(e)=>setAllergies(e.target.value)}
              />

              <p className="mt-5">Room Number</p>
              <input
                type="text"
                placeholder="Room number"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
                value={roomNumber}
                onChange={(e)=>setRoomNumber(e.target.value)}
              />

              <p className="mt-5">Bed Number</p>
              <input
                type="text"
                placeholder="Bed name"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
                value={bedNumber}
                onChange={(e)=>setBedNumber(e.target.value)}
              />

              <p className="mt-5">Age</p>
              <input
                type="age"
                placeholder="DOB"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
                value={age}
                onChange={(e)=>setAge(e.target.value)}
              />

              <p className="mt-5">Gender</p>
              <input
                type="text"
                placeholder="gender"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
                value={gender}
                onChange={(e)=>setGender(e.target.value)}
              />

              <p className="mt-5">Contact</p>
              <input
                type="text"
                placeholder="Contact number"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
                value={contact}
                onChange={(e)=>setContact(e.target.value)}
              />
            </div>

            <div className="text-center mx-auto h-10 w-28  bg-white text-black rounded-md">
              <button onClick={Submit} className="mt-2   font-semibold" >Add Record</button>
            </div>
            <div className="h-10"></div>
          </div>
        </div>
      

    )
}