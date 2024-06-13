export default function NavBarComponent() {
  return (
    <nav className=" border-b-0.5 flex flex-row align-baseline items-center  border-[#2b2b2b]">
      <div className="w-1/4">
        <img src="/logo-final.png" className="w-28 " alt="logo" />
      </div>
      <div className="w-3/4">
        <input
          type="text"
          placeholder="Search Music,Albums,Artists...."
          className="  h-12 w-[27rem] pl-3 rounded-3xl bg-[#2b2b2b] border-[#2b2b2b]"
        />
      </div>
    </nav>
  );
}
