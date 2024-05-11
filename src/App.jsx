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
        <div className="flex">
          <div className="w-[23%] bg-[rgba(13, 17, 23, 0)]  border-r-[0.5px] border-r-[#2b2b2b] ">
            <SideBar />
          </div>
          <div className="w-3/4  pl-5 space-y-3">
            <GreetingComponent />
            <div>
              <div className="flex flex-row justify-between px-2">
                <h4 className=" tracking-tighter text-2xl font-bold text-gray-200">
                  NyasaBeats Tracks For You
                </h4>
                <p className="text-gray-500 font-bold hover:underline cursor-pointer">
                  See all
                </p>
              </div>
              <SliderComponet />
            </div>
            <div>
              {/* New Releases */}
              <div className="flex flex-row justify-between px-2">
                <h4 className=" tracking-tighter text-2xl font-bold text-gray-200">
                  New Releases
                </h4>
                <p className="text-gray-500 font-bold hover:underline cursor-pointer">
                  See all
                </p>
              </div>
              <SliderComponet />
            </div>
            <div>
              {/* Recommendations of the tracks */}
              <div className="flex flex-row justify-between px-2">
                <h4 className=" tracking-tighter text-2xl font-bold text-gray-200">
                  NyasaBeats Recommendations
                </h4>
                <p className="text-gray-500 font-bold hover:underline cursor-pointer">
                  See all
                </p>
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
