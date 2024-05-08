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
          <div className="w-[23%] bg-gray-200">
            <SideBar />
          </div>
          <div className="w-3/4  pl-5 space-y-3">
            <div>
              <div className="flex flex-row justify-between">
                <h4 className=" tracking-tighter text-2xl font-bold text-gray-200" >NyasaBeats Tracks For You</h4>
                <p className="text-gray-200">See all</p>
              </div>
              <SliderComponet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
