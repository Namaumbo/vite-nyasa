import "./App.css";
import NavBarComponent from "./components/navbar/NavBarComponet";
import GreetingComponent from "./components/GreetingComponent";
import SideBar from "./components/sidebar/SideBar";
import Track from "./components/Track/Track";
import SliderComponet from "./components/Slider/SliderComponent";

const App = () => {
  return (
    <>
      <NavBarComponent />
      <div>
        {/* <GreetingComponent/> */}
        <div className="flex">
          <div className="w-1/4 bg-gray-200">
            <SideBar />
          </div>
          <div className="w-3/4 ">
            {" "}
            <SliderComponet />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
