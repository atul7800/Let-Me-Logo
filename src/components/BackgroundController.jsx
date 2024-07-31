import React, { useState, useEffect, useContext } from "react";
import { Slider } from "./ui/slider";
import ColorPickerComponent from "./ColorPickerComponent";
import { UpdateStorageContext } from "./UpdateStorageContext";

function BackgroundController() {
  const [rounded, setRounded] = useState(0);
  const [padding, setPadding] = useState(0);
  const [color, setColor] = useState("#000");
  const [hexValueOfSelectedColor, setHexValueOfSelectedColor] =
    useState("#fff");
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
      bgColorHexValue: hexValueOfSelectedColor,
    };

    setUpdateStorage(updatedValue);
    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [rounded, padding, color, hexValueOfSelectedColor]);

  return (
    <div>
      {/* Rounded */}
      <div className="justify-start py-2">
        <label htmlFor="" className="flex items-center justify-between py-2">
          Rounded <span>{rounded}px</span>
        </label>
        <Slider
          onValueChange={(event) => {
            setRounded(event[0]);
          }}
          defaultValue={[0]}
          max={230}
          step={1}
        />
      </div>

      {/* Padding */}
      <div className="justify-start py-2">
        <label htmlFor="" className="flex items-center justify-between py-2">
          Padding <span>{padding}px</span>
        </label>
        <Slider
          onValueChange={(event) => {
            setPadding(event[0]);
          }}
          defaultValue={[20]}
          max={200}
          step={1}
        />

        {/* Background Color Picker */}
        <div className="justify-start py-2">
          <label htmlFor="" className="flex items-center justify-between py-2">
            Background color
            <span>{hexValueOfSelectedColor}</span>
          </label>
          <ColorPickerComponent
            selectedColor={(color) => setColor(color)}
            setHexValueOfSelectedColor={setHexValueOfSelectedColor}
            hideController={false}
          />
        </div>
      </div>
    </div>
  );
}

export default BackgroundController;
