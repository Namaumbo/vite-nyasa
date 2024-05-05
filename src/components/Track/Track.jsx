import "./track.css";
export default function Track() {
  return (
    <div className="track-container lg:w-96 relative">
      <img src="photo2.jpg" alt="artwork" className="w-full" id="artwork" />
      <div className="overlay absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100">
        <img src="play.png" alt="play" className="absolute bottom-20 right-4" />
      </div>
      <div className="flex flex-col text-center ">
        <span className="text-2xl text-slate-500 font-bolder">Emtee</span>
        <h4 className="text-xl text-slate-500 font-bold">LOGAN</h4>
      </div>
    </div>
  );
}
