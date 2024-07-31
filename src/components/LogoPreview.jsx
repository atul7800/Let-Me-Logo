import React, { useState, useEffect, useContext } from "react";
import { UpdateStorageContext } from "./UpdateStorageContext";

function LogoPreview() {
  const [storageValue, setStorageValue] = useState();
  const { updateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    console.log(updateStorage);
    setStorageValue(storageData);
  }, [updateStorage]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-[450px] w-[450px] bg-gray-200 outline-dotted outline-gray-300">
        <div
          className="h-full w-full"
          style={{
            borderRadius: storageValue?.bgRounded,
            backgroundColor: storageValue?.bgColor,
          }}
        ></div>
      </div>
    </div>
  );
}

export default LogoPreview;
