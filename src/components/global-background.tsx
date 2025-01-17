import { Outlet } from "react-router-dom";

import BGBox from "../assets/img/bg-box.png";
import BGCircle from "../assets/img/bg-circle.png";
import BGPolygonRing from "../assets/img/bg-polygon-ring.png";
import BGPolygon from "../assets/img/bg-polygon.png";

const GlobalBackground = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-emerald-100 to-sky-200">
      <div className="relative h-full w-full flex justify-center items-center">
        <div className="absolute right-0 top-0 aspect-square h-[650px] w-[900px] rounded-b-full rounded-s-full bg-[#DDBBFF] blur-[70px]"></div>
        <img
          src={BGBox}
          alt="bg-box-image"
          className="absolute left-56 top-32 aspect-square w-28"
        />
        <img
          src={BGCircle}
          alt="bg-circle-image"
          className="absolute bottom-10 left-20 aspect-square w-72"
        />
        <img
          src={BGPolygon}
          alt="bg-polygon-image"
          className="absolute bottom-36 right-24 aspect-square w-80"
        />
        <img
          src={BGPolygonRing}
          alt="bg-polygon-ring-image"
          className="absolute bottom-16 right-0 aspect-square w-80"
        />
        <div className="absolute w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GlobalBackground;
