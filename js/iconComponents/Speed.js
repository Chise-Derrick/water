const createSpeedLevel = {
  iconContain: `
    background-color: white;
    width: 22px;
    height: 16px;
          position: absolute;
          top: 1px;
          left: 47px;
          border: 1px solid lightgrey;
  `,
  speedCase: `
          position: absolute;
          top: 9px;
          left: 6px;
          background-color: grey;
          width: 9px;
          height: 1px;
          border-radius: 0 1px 1px 0;

`,

  speedEnd: `
          position: relative;
          top: -3px;
          left: 7px;
    border-right: 1px solid #000;
    border-top: 1px solid #000;
    width: 2px;
    height: 2px;
    display: flex;
    vertical-align: middle;
          transform: rotate(45deg);
`,
  speedLevel(level) {
    let levelColor = "green";

    return `
          position: relative;
          bottom: 5px;
          left: ${level}px;
          background-color: red;
          width: 3px;
          height: 2px;
`;
  },
};

function HeightLevel(jwtToken, prop) {
  return `
<div style="${createSpeedLevel.iconContain}">
          <div style="${createSpeedLevel.speedCase}">

          <div style="${createSpeedLevel.speedLevel(
            jwtToken[prop].value / 2 - 2
          )}"></div><div style="${
    createSpeedLevel.speedEnd
  }"></div></div></div>'
    `;
}

export default HeightLevel;
