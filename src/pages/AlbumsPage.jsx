export default function AlbumPage() {
  return (
    <>
      <div className="relative w-[250px] h-[250px]">
        <img
          src="photo2.jpg"
          alt="Image 1"
          className="absolute w-full h-full top-0 z-30"
        />
        <img
          src="logo-final.png"
          alt="Image 2"
          className="absolute  w-full h-full  top-2 z-20"
        />
        <img
          src="photo2.jpg"
          alt="Image 3"
          className="absolute  w-full h-full  top-4 z-10"
        />
      </div>
    </>
  );
}
