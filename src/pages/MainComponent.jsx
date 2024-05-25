import SliderComponet from "../components/Slider/SliderComponent";

export default function MainComponent() {
  return (
    <>
      <div className="flex flex-row justify-between px-2">
        <h4 className=" tracking-tighter text-2xl font-bold text-gray-200 pt-5">
          NyasaBeats Recommendations
        </h4>
      </div>
      <SliderComponet />
    </>
  );
}
