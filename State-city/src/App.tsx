import React, { useState } from "react";

const App: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>("");

  const indianStatesAndCities = {
    AndhraPradesh: ["Visakhapatnam", "Vijayawada", "Guntur"],
    ArunachalPradesh: ["Itanagar", "Naharlagun", "Pasighat"],
    Assam: ["Guwahati", "Dibrugarh", "Jorhat"],
    Bihar: ["Patna", "Gaya", "Muzaffarpur"],
    Chhattisgarh: ["Raipur", "Bilaspur", "Durg"],
    Goa: ["Panaji", "Margao", "Vasco da Gama"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
    Haryana: ["Chandigarh", "Faridabad", "Gurgaon"],
    HimachalPradesh: ["Shimla", "Kullu", "Manali"],
    Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad"],
    Karnataka: ["Bangalore", "Mysore", "Hubli"],
    Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode"],
    MadhyaPradesh: ["Bhopal", "Indore", "Jabalpur"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Manipur: ["Imphal", "Thoubal", "Bishnupur"],
    Meghalaya: ["Shillong", "Tura", "Jowai"],
    Mizoram: ["Aizawl", "Lunglei", "Champhai"],
    Nagaland: ["Kohima", "Dimapur", "Mokokchung"],
    Odisha: ["Bhubaneswar", "Cuttack", "Rourkela"],
    Punjab: ["Chandigarh", "Ludhiana", "Amritsar"],
    Rajasthan: ["Jaipur", "Jodhpur", "Udaipur"],
    Sikkim: ["Gangtok", "Namchi", "Mangan"],
    TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
    Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
    Tripura: ["Agartala", "Udaipur", "Dharmanagar"],
    UttarPradesh: ["Lucknow", "Kanpur", "Agra"],
    Uttarakhand: ["Dehradun", "Haridwar", "Rishikesh"],
    WestBengal: ["Kolkata", "Howrah", "Durgapur"],
  };

  const generateStateOption = () => {
    return Object.keys(indianStatesAndCities).map((state) => (
      <option key={state} value={state}>
        {state}
      </option>
    ));
  };

  const generateCityOption = () => {
    return Object.keys(indianStatesAndCities).map((cities) => (
      <option key={cities} value={cities}>
        {cities}
      </option>
    ));
  };

  const handleStateChange = (e: string) => {
    setSelectedState(e.target.value);
  };

  return (
    <>
      <div className="w-full h-screen  bg-gray-700 flex justify-center items-center">
        <select
          value={selectedState}
          className="m-4 p-4 animate__animated animate__bounce rounded-2xl"
        >
          <option value=" " hidden disabled>
            {" "}
            Select a State
          </option>
          {generateStateOption()}
        </select>

        <select
          value=" "
          className="m-4 p-4 animate__animated animate__bounce rounded-xl"
        >
          <option value=" " hidden disabled>
            select the city
          </option>
          {generateCityOption()}
        </select>
      </div>
    </>
  );
};

export default App;
