import Image from "next/image";

export default function Home() {
  return (
    <>
      <header 
      className=
        "after:bg-gray-900 after:w-full after:h-[3px] after:rounded-full after:absolute after:bottom-0 relative pb-3 w-full mt-2"
      >
        <div id="icon" className="grid grid-cols-2 grid-rows-1 w-[150]">
          <div className="w-[67] h-[60] bg-[#1D1C24] rounded-xl"></div>
          <div className="w-[100] h-[60] font-inter align-bottom">
            <h4>Mora</h4>
            <h4>Stokage</h4>
          </div>
        </div>
      </header>
    </>
  );
}
