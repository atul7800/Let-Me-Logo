import { Image, PencilRuler, Shield } from "lucide-react";
import React, { useState } from "react";

function SideNav({ setSelectedIndex }) {
  const menuList = [
    {
      id: 1,
      name: "Icons",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Shield,
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Image,
    },
  ];

  const [activeIndex, setActiveIndex] = useState();

  return (
    <div className="h-screen border shadow-sm">
      <div>
        {menuList.map((menu, index) => (
          <h2
            onClick={() => {
              setActiveIndex(index);
              setSelectedIndex(index);
            }}
            className={`my-2 flex cursor-pointer items-center gap-2 p-3 px-7 text-lg text-gray-500 hover:bg-primary hover:text-white ${index === activeIndex && "bg-primary text-white"}`}
            key={index}
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
