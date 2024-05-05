
import "./App.css";
import NavBarComponent from "./components/navbar/NavBarComponet";
import GreetingComponent from "./components/GreetingComponent";
import SideBar from "./components/sidebar/SideBar";
import Track from "./components/Track/Track";

const App = () => {
  return <>
    <NavBarComponent/>
    <div> 
      {/* <GreetingComponent/> */}
      <SideBar/>
      <Track/>
    </div>
  </>
}

export default App;
