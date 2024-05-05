
import "./App.css";
import NavBarComponent from "./components/navbar/NavBarComponet";
import GreetingComponent from "./components/GreetingComponent";
import SideBar from "./components/sidebar/SideBar";
import Track from "./components/Track/Track";
import SliderComponet from "./components/Slider/SliderComponent";

const App = () => {
  return <>
    <NavBarComponent/>
    <div> 
      {/* <GreetingComponent/> */}
      {/* <SideBar/> */}
      {/* <Track/> */}
      <SliderComponet/>
    </div>
  </>
}

export default App;
