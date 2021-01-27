const createHeightLevel = {
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
