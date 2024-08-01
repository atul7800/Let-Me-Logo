import React, { useState, useEffect, useContext } from "react";
import { UpdateStorageContext } from "./UpdateStorageContext";
import { icons } from "lucide-react";
import html2canvas from "html2canvas";

function LogoPreview({ downloadLogo }) {
  const [storageValue, setStorageValue] = useState();
  const { updateStorage } = useContext(UpdateStorageContext);
  // const BASE_URL = "https://logoexpress.tubeguruji.com";
  const BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
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

  function downloadPngLogo() {
    const downloadLogoDiv = document.getElementById("downloadLogoDiv");
    html2canvas(downloadLogoDiv, {
      backgroundColor: null,
    }).then((canvas) => {
      const pngImage = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngImage;
      downloadLink.download = "logo.png";
      downloadLink.click();
    });
  }

  useEffect(() => {
    if (downloadLogo) {
      downloadPngLogo();
    }
  }, [downloadLogo]);

  return (
    <div className="flex h-screen items-center justify-center overflow-auto">
      <div
        className="h-[450px] w-[450px] bg-gray-200 outline-dotted outline-gray-300"
        style={{ padding: storageValue?.bgPadding }}
      >
        <div
          id="downloadLogoDiv"
          className="flex h-full w-full items-center justify-center"
          style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor,
          }}
        >
          {storageValue?.icon?.includes(".png") ? (
            <img
              // src={"/png/" + storageValue?.icon}
              src={`${BASE_URL}/png/${storageValue?.icon}`}
              style={{
                transform: `rotate(${storageValue?.iconRotate}deg)`,
                width: `${storageValue?.iconSize}px`,
                height: `${storageValue?.iconSize}px`,
                minWidth: `50px`,
                minHeight: `50px`,
              }}
            />
          ) : (
            <Icon
              name={storageValue?.icon}
              color={storageValue?.iconColor}
              size={storageValue?.iconSize}
              rotate={storageValue?.iconRotate}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default LogoPreview;
