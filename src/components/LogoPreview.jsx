import React, { useState, useEffect, useContext } from "react";
import { UpdateStorageContext } from "./UpdateStorageContext";
import { icons } from "lucide-react";

function LogoPreview() {
  const [storageValue, setStorageValue] = useState();
  const { updateStorage } = useContext(UpdateStorageContext);
  const Icon = ({ name, size, color, rotate }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }

    return (
      <LucidIcon
        color={color}
        size={size}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    );
  };

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
  }, [updateStorage]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className="h-[450px] w-[450px] bg-gray-200 outline-dotted outline-gray-300"
        style={{ padding: storageValue?.bgPadding }}
      >
        <div
          className="flex h-full w-full items-center justify-center"
          style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor,
          }}
        >
          <Icon
            name={storageValue?.icon}
            color={storageValue?.iconColor}
            size={storageValue?.iconSize}
            rotate={storageValue?.iconRotate}
          />
        </div>
      </div>
    </div>
  );
}

export default LogoPreview;
