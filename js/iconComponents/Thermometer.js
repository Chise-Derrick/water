const createThermometer = {
  iconContain: `
    background-color: white;
    width: 22px;
    height: 16px;
          position: absolute;
          top: 1px;
          left: 1px;
          border: 1px solid lightgrey;
  `,
  thermometerCase: `
          position: absolute;
          top: 6px;
          left: 5px;
          border: 1px solid black;
          width: 9px;
          height: 2px;
          border-radius: 0 1px 1px 0;
          transform: rotate(-90deg);
`,
  thermometerEnd: `
          position: relative;
          background-color: lightblue;
          top: 1px;
          left: 5px;
          border: 1px solid black;
          border-radius: 2px;
          width: 3px;
          height: 3px;
          border-bottom: none;
`,
  thermometerLevel(level) {
    level += 40;
    let levelColor = "green";

    return `
          background-color: red;
          height: 3px;
          width: ${level}%;
`;
  },
};

function Thermometer(jwtToken, prop) {
  let thermometerTemp = jwtToken[prop].value + "%";
  return `
<div style="${createThermometer.iconContain}">
          <div style="${createThermometer.thermometerCase}">
          <div style="${createThermometer.thermometerLevel(
            jwtToken[prop].value
          )}"></div><div style="${
    createThermometer.thermometerEnd
  }"></div></div></div>'
    `;
}

export default Thermometer;
