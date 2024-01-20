import React, { useState } from "react";

const App: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  let [selectedCity, setSelectedCity] = useState<string>("");

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
    return selectedCities.map((cities) => (
      <option key={cities} value={cities}>
        {cities}
      </option>
    ));
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity("");
    const newState = e.target.value as keyof typeof indianStatesAndCities;
    setSelectedState(newState);
    const citiesForNewState = indianStatesAndCities[newState] || [];
    setSelectedCities(citiesForNewState);
  };

  console.log(selectedCities);

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    selectedCity = "";
    setSelectedCity(e.target.value);
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white">
        <div>
          <select
            value={selectedState}
            onChange={handleStateChange}
            className="m-2 p-2 sm:m-4 sm:p-4 rounded-md text-black"
          >
            <option value="" hidden disabled>
              {" "}
              Select a State
            </option>
            {generateStateOption()}
          </select>

          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="m-2 p-2 sm:m-4 sm:p-4 rounded-md text-black"
          >
            <option value="" hidden disabled>
              Select the City
            </option>
            {generateCityOption()}
          </select>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <h1 className="text-8xl font-bold">
            Selected State: {selectedState}
          </h1>
          <h2 className="text-4xl font-semibold pt-8 ">
            Selected City: {selectedCity}
          </h2>
        </div>
      </div>
    </>
  );
};
export default App;
