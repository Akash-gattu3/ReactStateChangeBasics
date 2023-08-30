//Build a color picker component using useState.
//Initially, the component should display a default color name and a button labeled "Change Color".
// When the button is clicked, the color name should change to a different color, cycling through a predefined list of colors.
import { useState } from "react";
const ColorPicker = () => {
  const colors = ["yellow", "blue", "red", "green"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const changeColor = () => {
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(nextColorIndex);
    const buttoncolor = colors[nextColorIndex];
  };

  return (
    <div>
      <h1>Color Picker</h1>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: colors[currentColorIndex],
        }}
      ></div>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default ColorPicker;
