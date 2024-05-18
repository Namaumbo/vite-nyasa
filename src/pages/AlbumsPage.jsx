import { Divider } from "@chakra-ui/react";

export default function AlbumPage() {
  const buttonClasses = "text-zinc-400 hover:text-white";
  const bgButtonClasses = "bg-zinc-700 text-white px-3 py-1 rounded-md";
  const textGreenClasses = "text-green-500";
  return (
    <>
      <div className=" text-white p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4"></div>
          <div className="flex space-x-2">
            <button className={bgButtonClasses}>Explore more</button>
          </div>
        </div>
        <div className="flex items-start space-x-8">
          <div className="w-1/4">
            <img src="photo2.jpg" alt="Playlist Cover" className="rounded-lg" />
          </div>
          <div className="w-3/4">
            <h2 className="text-2xl font-bold">Album</h2>
            <h1 className="text-4xl font-bold mb-2">
              Praise and Harmony, Accapella music
            </h1>
            <p className="text-zinc-400">
              Kelly Cody · 389 likes · 67 songs, about 3 hr
            </p>
            <div className="flex space-x-4 mt-4">
              <button className={textGreenClasses}>
                <img aria-hidden="true" alt="play" src="play.png" />
              </button>
              <button className={textGreenClasses}>
                <img
                  aria-hidden="true"
                  alt="shuffle"
                  src="https://placehold.co/40x40"
                />
              </button>
              <button className={buttonClasses}>
                <img
                  aria-hidden="true"
                  alt="more options"
                  src="https://placehold.co/24x24"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <table className="w-full text-zinc-400">
            <thead className="border-b">
              <tr>
                <th className="text-left">#</th>
                <th className="text-left">Title</th>
                <th className="text-left">Album</th>
                <th className="text-left">Date added</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Song Title 1</td>
                <td>Album Name 1</td>
                <td>Jan 1, 2023</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Song Title 2</td>
                <td>Album Name 2</td>
                <td>Jan 2, 2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
