import { useEffect, useState } from "react";
import { Meal } from "./Meal";
import { Skeleton } from "../components/skeleton/skeleton";
import { useFetchPatient } from "../hooks/useFetchPatient";

export const Patient = () => {
  const [showMeal, setShowMeal] = useState(false); 
  const [selectedPatientName, setSelectedPatientName] =useState("");
  const {  patients,loading  } = useFetchPatient();

  const PatientClick = (patientName)=>{
    setSelectedPatientName(patientName);
    setShowMeal(true);
  }
  return (
    <div>
      {!showMeal && ( 
        <div>
          <div>
            <p className="text-4xl m-8 text-gray-300 font-semibold">
              Patient Names
            </p>
            <hr className="border-gray-600" />
          </div>
          
          { loading ? (
            <>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            </>
          ) : patients.length === 0 ?(
            <p className="text-center text-gray-400 mt-10">No records found</p>
          ) :(

            patients.map((patient,index) => (
              <div key={index} onClick={() => PatientClick(patient.username)} >
                <div
                  className="grid grid-flow-col mt-9 group cursor-pointer"
                  style={{ gridTemplateColumns: "1% 98%" }}
                >
                  <div className="group-hover:bg-yellow-600 bg-zinc-800 w-[10px] h-14 pl-0"></div>
                  <div className="w-full flex flex-row">
                    <p className="pl-10 h-14 w-full  uppercase font-bold bg-zinc-800 text-zinc-200 text-sm ">
                      <p className="normal-case font-light pb-1">Patient Name</p>
                      {patient.username} {/* Display the patient's name */}
                    </p>
                    <p className="ml-20 text-zinc-400 p-2 font-semibold text-sm bg-zinc-800 cursor-pointer hover:text-white">
                      Click to add the meal
                    </p>
                  </div>
                </div>
              </div>
            ))
            )
          }
        </div>
      )}

      {showMeal && ( 
        <div className="p-4">
          <Meal patientName={selectedPatientName} />
        </div>
      )}
    </div>
  );
};
