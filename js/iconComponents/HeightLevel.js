const createHeightLevel = {
  iconContain: `
    background-color: white;
    width: 22px;
    height: 16px;
          position: absolute;
          top: 1px;
          left: 24px;
          border: 1px solid lightgrey;
  `,
  heightCase: `
    background-color: grey;
              position: absolute;
                        top: 4px;
          left: 12px;
          width: 1px;
          height: 9px;
          border-radius: 0 1px 1px 0;

`,
  heightStart: `
          position: relative;
          top: -1px;
          left: -1px;
    border-right: 1px solid #000;
    border-top: 1px solid #000;
    width: 2px;
    height: 2px;
    display: flex;
    vertical-align: middle;
          transform: rotate(-45deg);
`,
  heightEnd: `
          position: relative;
          top: 0px;
          left: -1px;
    border-right: 1px solid #000;
    border-top: 1px solid #000;
    width: 2px;
    height: 2px;
    display: flex;
    vertical-align: middle;
          transform: rotate(135deg);
`,
  heightLevel(level) {
    let levelColor = "green";

    return `
          position: relative;
          bottom: ${level}px;
          left: -6px;
          background-color: red;
          width: 3px;
          height: 2px;
`;
  },
};

function HeightLevel(jwtToken, prop) {
  return `
<div style="${createHeightLevel.iconContain}">
          <div style="${createHeightLevel.heightCase}">
          <div style="${createHeightLevel.heightStart}"></div>
          <div style="${createHeightLevel.heightLevel(
            jwtToken[prop].value / 2 - 4
          )}"></div><div style="${
    createHeightLevel.heightEnd
  }"></div></div></div>'
    `;
}

export default HeightLevel;
