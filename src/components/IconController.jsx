import { Smile } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerComponent from "./ColorPickerComponent";
import { UpdateStorageContext } from "./UpdateStorageContext";
import IconList from "./IconList";

function IconController() {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);
  const [size, setSize] = useState(storageValue ? storageValue?.iconSize : 280);
  const [rotate, setRotate] = useState(
    storageValue ? storageValue?.iconRotate : 0,
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.iconColor : "#fff",
  );
  const [hexValueOfSelectedColor, setHexValueOfSelectedColor] = useState(
    storageValue ? storageValue?.iconColorHexValue : "#fff",
  );

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      iconColorHexValue: hexValueOfSelectedColor,
      icon: "Smile",
    };

    setUpdateStorage(updatedValue);
    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [size, rotate, color, hexValueOfSelectedColor]);

  return (
    <div>
      <IconList />

      {/* Icon size */}
      <div className="justify-start py-2">
        <label htmlFor="" className="flex items-center justify-between py-2">
          Size <span>{size}px</span>
        </label>
        <Slider
          onValueChange={(event) => {
            setSize(event[0]);
          }}
          defaultValue={[`${storageValue ? storageValue?.iconSize : 280}`]}
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
          defaultValue={[`${storageValue ? storageValue?.iconRotate : 0}`]}
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
