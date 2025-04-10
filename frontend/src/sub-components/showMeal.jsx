import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../config";
import { AuroraBackground } from "../ui/aurora_background";
import { motion } from "framer-motion";

export const ShowMealDetails = ({ patientName }) => {
  const [patientMeals, setPatientMeals] = useState([]);

  useEffect(() => {
    const fetchMealData = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/user/mealdetails`);
        const allMeals = res.data.mealDetails;

        const matchedPatient = allMeals.find(
          (item) => item.patientName === patientName
        );

        if (matchedPatient) {
          setPatientMeals(matchedPatient.mealDetails);
        } else {
          setPatientMeals([]);
        }
      } catch (error) {
        console.error("Error fetching meal data:", error);
      }
    };

    fetchMealData();
  }, [patientName]);

  return (
    <AuroraBackground>
       <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=""
      >
    <div className="text-white m-10 rounded-lg  p-6 w-[500px]">
      <p className="font-bold text-4xl text-center pt-4 mb-8">
        Meal for <span className="text-amber-400">{patientName}</span>
      </p>

      {patientMeals.length > 0 ? (
        patientMeals.map((meal, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-4 mb-4 border border-gray-600"
          >
            <p className="text-base  tracking-wider"><strong className="text-amber-400 text-lg tracking-normal  ">Morning : </strong> {meal.morning_meal}</p>
            <p className="text-base  tracking-wider"><strong className="text-amber-400 text-lg tracking-normal ">Date : </strong> {meal.date}</p>
            <p className="text-base  tracking-wider"><strong className="text-amber-400 text-lg tracking-normal ">Evening : </strong> {meal.evening_meal}</p>
            <p className="text-base  tracking-wider"><strong className="text-amber-400 text-lg tracking-normal ">Night : </strong> {meal.night_meal}</p>
            <p className="text-base  tracking-wider"><strong className="text-amber-400 text-lg tracking-normal ">Ingredients : </strong> {meal.ingredients}</p>
            <p className="text-base  tracking-wider"><strong className="text-amber-400 text-lg tracking-normal ">Instruction : </strong> {meal.instruction}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-400">
          No meal data found for <strong>{patientName}</strong>.
        </p>
      )}
    </div>
    </motion.div>
    </AuroraBackground>
  );
};