import { useState } from "react";
import { states, cities } from "./stateAndCities"; // Adjust the path as necessary

function DropDownOption() {
  const [selectedCountry, setSelectedCountry] = useState("INDIA");
  const [selectedState, setSelectedState] = useState("");
  const stateList = states();
  const cityList = cities();

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState(""); // Reset state when country changes
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <>
      <select onChange={handleCountryChange} value={selectedCountry}>
        {Object.keys(stateList).map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
      <select onChange={handleStateChange} value={selectedState}>
        {stateList[selectedCountry]?.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>
      <select>
        {cityList[selectedCountry] &&
          cityList[selectedCountry][selectedState]?.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
      </select>
    </>
  );
}

export default DropDownOption;
