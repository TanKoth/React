/* eslint-disable no-unused-vars */
function states () {
  return{
    "INDIA": ["Maharashtra","Karnataka","Madhya Pradesh","Gujarat"],
    "USA": ["New York","California","Florida","Texas"],
  }
};

function cities(){
  return{
    "INDIA":{
      "Maharashtra" :["Aurangabad","Pune","Mumbai","Nagpur"],
      "Karnataka" :["Bangalore","Mysore","Mangalore","Hubli"],
      "Madhya Pradesh" :["Indore","Bhopal","Jabalpur","Gwalior"],
      "Gujarat" :["Ahmedabad","Surat","Vadodara","Rajkot"]
    },
    "USA":{
      "New York" :["New York City","Buffalo","Rochester","Yonkers"],
      "California" :["Los Angeles","San Diego","San Jose","San Francisco"],
      "Florida" :["Jacksonville","Miami","Tampa","Orlando"],
      "Texas" :["Houston","San Antonio","Dallas","Austin"]
    }
  }
  
  
}
export {states,cities};

// Example usage of the state variable
//console.log(states);