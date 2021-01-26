const createBattery = {
  iconContain: `
    background-color: white;
    width: 22px;
    height: 16px;
          position: absolute;
          top: 1px;
          left: 68px;
          border: 1px solid lightgrey;
  `,
  batteryCase: `
          position: absolute;
          top: 3px;
          left: 4px;
          border: 1px solid black;
          width: 11px;
          height: 8px;
          border-radius: 0 2px 2px 0;
`,
  batteryEnd: `
          position: relative;
          background-color: lightblue;
          bottom: 7px;
          left: 12px;
          border: 1px solid black;
          width: 1px;
          height: 3px;
          border-left: none;
`,
  batteryLevel(level) {
    let levelColor = "green";
    if (level < 50) {
      levelColor = "#FF9400";
    }
    if (level < 30) {
      levelColor = "red";
    }
    return `
          background-color: ${levelColor};
          height: 8px;
          width: ${level}%;
`;
  },
};

function Battery(jwtToken, prop) {
  let batteryPercent = jwtToken[prop].value + "%";
  return `<div style="${createBattery.iconContain}">
          <div style="${createBattery.batteryCase}">
          <div style="${createBattery.batteryLevel(
            jwtToken[prop].value
          )}"></div><div style="${createBattery.batteryEnd}"></div></div></div>'
    `;
}

export default Battery;
