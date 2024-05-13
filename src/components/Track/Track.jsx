import "./track.css";
export default function Track() {
  return (
    <div className="track-container lg:w-45 relative ">
      <img
        src="photo2.jpg"
        alt="artwork"
        className="object-cover h-auto w-full rounded-md shadow-outline"
        id="artwork"
      />
      <div className="overlay absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100">
        <img
          src="play.png"
          alt="play"
          className="absolute bottom-14 right-4 w-12"
        />
      </div>
      <div className="flex flex-col text-center ">
        <span className=" text-gray-200 font-bolder font-bold text-lg">
          emtee
        </span>
        <h4 className="text-[12px] text-slate-400 font-bold">Logan</h4>
      </div>
    </div>
  );
}
