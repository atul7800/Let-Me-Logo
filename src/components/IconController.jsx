import { Smile } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerComponent from "./ColorPickerComponent";

function IconController() {
  const [size, setSize] = useState(280);
  const [rotate, setRotate] = useState(0);
  const [color, setColor] = useState("#fff");
  const [hexValueOfSelectedColor, setHexValueOfSelectedColor] =
    useState("#fff");
  const storageValue = JSON.parse(localStorage.getItem("value"));

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      iconColorHexValue: hexValueOfSelectedColor,
      icon: "smile",
    };

    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [size, rotate, color, hexValueOfSelectedColor]);

  return (
    <div>
      <label>Icons</label>
      <div className="my-2 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-md bg-gray-200 p-3">
        <Smile />
      </div>
      {/* Icon size */}
      <div className="justify-start py-2">
        <label htmlFor="" className="flex items-center justify-between py-2">
          Size <span>{size}px</span>
        </label>
        <Slider
          onValueChange={(event) => {
            setSize(event[0]);
          }}
          defaultValue={[280]}
          max={512}
          step={1}
        />
      </div>

      {/* Icon Rotate */}
      <div className="justify-start py-2">
        <label htmlFor="" className="flex items-center justify-between py-2">
          Rotate <span>{rotate}°</span>
        </label>
        <Slider
          onValueChange={(event) => {
            setRotate(event[0]);
          }}
          defaultValue={[0]}
          max={360}
          step={1}
        />
      </div>

      {/* Color Picker */}
      <div className="justify-start py-2">
        <label htmlFor="" className="flex items-center justify-between py-2">
          Icon color
          <span>{hexValueOfSelectedColor}</span>
        </label>
        <ColorPickerComponent
          selectedColor={(color) => setColor(color)}
          setHexValueOfSelectedColor={setHexValueOfSelectedColor}
          hideController={true}
        />
      </div>
    </div>
  );
}

export default IconController;
