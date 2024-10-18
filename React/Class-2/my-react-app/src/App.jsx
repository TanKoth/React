// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import MyComponent from "./components/MyComponent.jsx";
import DisplayInfo from "./components/DisplayInfo.jsx";
import ConditionRender from "./components/ConditionRender.jsx";
import ButtonComponent from "./components/ButtonComponent.jsx";

function App() {
  // const [count, setCount] = useState(0)
  const fruits = ["Apple", "Bannana", "Orange", "Grapes", "Mango"];
  const personInfo = {
    name: "Tanmay Kothale",
    age: 32,
  };

  return (
    <>
      <ButtonComponent />
      <ConditionRender isLoggedIn={true} username={personInfo.name} />
      <MyComponent />
      <DisplayInfo fruits={fruits} personInfo={personInfo} />
    </>
  );
}

export default App;
