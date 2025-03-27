import React, { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState("#000000");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  // Convert hex string to an object with r, g, b properties
  function hexToRgb(hex) {
    // Expand shorthand form (e.g. "#03F") to full form ("#0033FF")
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null;
  }

  // Convert RGB values to HSL values
  function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      // achromatic
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
        default:
          break;
      }
      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  }

  // Get the RGB and HSL values from the hex color
  const rgb = hexToRgb(color);
  const hsl = rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : { h: 0, s: 0, l: 0 };

  return (
    <div className='color-picker'>
      <h2>Color Picker</h2>
      <div className='color-box' style={{ backgroundColor: color }}>
        <p align="center">Selected color : {color}</p>
      </div>
      <input type="color" value={color} onChange={handleColorChange} />
      <p>You picked (HEX): {color}</p>
      <p>You picked in HSL: {`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`}</p>
      <p>You picked in HSLA: {`hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, 1)`}</p>
      <p>You picked in RGB: {rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : ''}</p>
      <p>You picked in RGBA: {rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)` : ''}</p>
    </div>
  );
}

export default ColorPicker;
