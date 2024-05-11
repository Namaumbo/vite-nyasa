import Track from "../Track/Track";
import "./sliderStyle.css";

export default function SliderComponet() {
  return (
    <>
      <div
        className=" mx-auto grid  lg:grid-rows-1 lg:grid-cols-5
       md:grid-cols-5 md:grid-rows-1  sm:grid-cols-4  sm:grid-rows-1 "
      //  id="main-container"
      >
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
      </div>
    </>
  );
}
