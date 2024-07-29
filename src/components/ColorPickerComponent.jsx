import React, { useState } from "react";
import ColorPicker, { useColorPicker } from "react-best-gradient-color-picker";

function ColorPickerComponent({ color, setColor, hideController = false }) {
  return (
    <div>
      <ColorPicker
        value={color}
        onChange={(event) => {
          setColor(event);
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
