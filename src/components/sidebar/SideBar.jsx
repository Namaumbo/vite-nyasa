import * as ciIcons from "react-icons/ci";
import * as fiIcons from "react-icons/fi";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  Divider
} from "@chakra-ui/react";
export default function SideBar() {
  const links = [
    {
      name: "Home",
      icon: <ciIcons.CiHome fontSize={20} color="#fff" />,
      path: "/",
    },
    {
      name: "Albums",
      icon: <fiIcons.FiDisc fontSize={20} color="#fff" />,
      path: "/albums",
    },
    {
      name: "Studios",
      icon: <fiIcons.FiSpeaker fontSize={20} color="#fff" />,
      path: "/studios",
    },
    {
      name: "News",
      icon: <fiIcons.FiPaperclip fontSize={20} color="#fff" />,
      path: "/newsletter",
    },
  ];

  const genreList = ["Afro-pop", "hip-pop", "pop"];
  return (
    <div className=" max-h-full ">
      <ul className="list-none m-8">
        {links.map((item, index) => (
          <li key={index} className="mb-5 flex flex-row  items-center ">
            <div className=" pr-2" >{item["icon"]}</div>
            <div className=" font-bold text-gray-200">{item["name"]}</div>
          </li>
        ))}
      </ul>

      <Divider />
      <h4 className="mt-3 ml-2 text-xl text-gray-400">Available Genres</h4>
      <div className="flex mt-4 ">
        {genreList.map((genre) => (
          <div className="ml-1 p-1">
          <Tag>{genre}</Tag>
          </div>
        ))}
      </div>
    </div>
  );
}
