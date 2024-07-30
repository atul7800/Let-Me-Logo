import React, { useEffect, useState } from "react";
import ColorPicker, { useColorPicker } from "react-best-gradient-color-picker";

function ColorPickerComponent({
  selectedColor,
  setHexValueOfSelectedColor,
  hideController = false,
}) {
  const [color, setColor] = useState("rgba(255,255,255,1)");
  const { valueToHex } = useColorPicker(color, setColor);
  const selectedColorHex = valueToHex();

  return (
    <div>
      <ColorPicker
        value={color}
        onChange={(event) => {
          setColor(event);
          selectedColor(event);
          setHexValueOfSelectedColor(selectedColorHex);
        }}
        hideControls={hideController}
        hideEyeDrop
        hideAdvancedSliders
        hideColorGuide
        hideInputType
      />
    </div>
  );
}

export default ColorPickerComponent;
