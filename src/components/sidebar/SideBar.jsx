import * as ciIcons from "react-icons/ci";
import * as fiIcons from "react-icons/fi";
import "./siderbar.css";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const links = [
    {
      name: "Home",
      icon: <ciIcons.CiHome fontSize={20} color="#ffffff" />,
      path: "/",
    },
    {
      name: "Albums",
      icon: <fiIcons.FiDisc fontSize={20} color="#ffffff" />,
      path: "/albums",
    },
    {
      name: "Studios",
      icon: <fiIcons.FiSpeaker fontSize={20} color="#ffffff" />,
      path: "/studios",
    },
    {
      name: "News",
      icon: <fiIcons.FiPaperclip fontSize={20} color="#ffffff" />,
      path: "/newsletter",
    },
  ];

  const genreList = [
    "Afro-pop",
    "hip-pop",
    "pop",
    "gospel",
    "rock",
    "reggae",
    "amapiano",
    "metal",
    "RnB",
    "Mangelengele",
    "reggaes",
  ];

  const artists = [
    "Namadingo",
    "Eli Njuchi",
    "Ranken",
    "Ethel Kamwendo Banda",
    "Lawi",
    "Temwa",
    "Kraizy G",
    "Gwamba",
    "Success",
    "Suffix",
    "Zenze",
  ];
  return (
    <div className=" bg-black border-1 h-full pt-5">
      <h2 className="text-lg font-bold text-white ml-3">Self Space</h2>
      <ul>
        {links.map((link) => {
          return (
            <NavLink to={link["path"]} key={link["name"]}>
              <li
                key={link["name"]}
                className=" flex flex-row  items-center "
                id="hovered-list"
              >
                <div className="flex flex-row  justify-center items-center">
                  <div className=" pr-3">{link["icon"]}</div>
                  <div className=" text-[#ffffff]">{link["name"]}</div>
                </div>
              </li>
            </NavLink>
          );
        })}
      </ul>

      {/* <ul className="list-none m-8"> */}

      {/*       
        {links.map((item, index) => (
          <li key={index} className="mb-5 flex flex-row  items-center " id="hovered-list">
            <div className=" pr-3">{item["icon"]}</div>
            <div className=" text-[#cad2e0]">{item["name"]}</div>
          </li>
        ))}
      </ul> */}

      {/* 
      <Divider />
      <h4 className="mt-3 ml-2 text-xl text-gray-400">Available Genres</h4>
      <div className=" py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ">
        {genreList.map((genre) => (
          <Tag
            key={genre}
            variant="solid"
            className="mr-2 mt-3 cursor-pointer bg-green-500"
          >
            <TagLabel>{genre}</TagLabel>
          </Tag>
        ))}
      </div>

      <h4 className="mt-3 ml-2 text-xl text-gray-400">
        People are Listening To..
      </h4>
      <div className=" py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ">
        {artists.map((genre) => (
          <Tag
            key={genre}
            variant="solid"
            className="mr-2 mt-3 cursor-pointer"
          >
            <TagLabel>{genre}</TagLabel>
            <fiIcons.FiPlayCircle />
          </Tag>
        ))}
      </div> */}
    </div>
  );
}
