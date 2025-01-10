import { useState } from "react";
import { Meal } from "./Meal";

export const Patient = () => {
  const [showMeal, setShowMeal] = useState(false); 

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
          <div onClick={() => setShowMeal(true)}> 
            <div
              className="grid grid-flow-col mt-9 group cursor-pointer"
              style={{ gridTemplateColumns: "1% 98%" }}
            >
              <div className="group-hover:bg-yellow-600 bg-zinc-800 w-[10px] h-14 pl-0"></div>
              <div className="w-full flex flex-row">
                <p className="pl-10 h-14 w-full bg-zinc-800 text-zinc-400 text-sm">
                  Patient Name
                </p>
                <p className="ml-20 text-zinc-400 p-2 font-semibold text-sm bg-zinc-800 cursor-pointer hover:text-white">
                  Click to add the meal
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showMeal && ( 
        <div className="p-4">
          <Meal />
        </div>
      )}
    </div>
  );
};
