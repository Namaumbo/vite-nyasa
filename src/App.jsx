import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBarComponent from "./components/navbar/NavBarComponet";
import GreetingComponent from "./components/GreetingComponent";

const App = () => {
  return <>
    <NavBarComponent/>
    <div> 
      <GreetingComponent/>
      
    </div>
  </>
}

export default App;
