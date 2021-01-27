const createOxygen = {
  iconContain: `
    background-color: white;
    width: 22px;
    height: 16px;
          position: absolute;
          top: 1px;
          left: 137px;
          border: 1px solid lightgrey;
  `,
  oxygenCase: `
          position: absolute;
          top: 2px;
          left: 6px;
          border: 2px solid '#00008B';
          width: 4px;
          height: 8px;
          border-radius: 10px;
`,
  oxygenEnd: `
          position: relative;
          font-size: 9px;
          top: 1px;
          left: 6px;

`,
  oxygenLevel(level) {
    level += 40;

    return `
    position: absolute;
    bottom: 0;
          background-color: blue;
          width: 4px;
          height: ${level}%;
                    border-radius: 0 0 10px 10px;
`;
  },
};

function OxygenLevel(jwtToken, prop) {
  return `
<div style="${createOxygen.iconContain}">
          <div style="position: absolute;
          top: 2px;
          left: 6px;
          border: 2px solid blue;
          width: 4px;
          height: 8px;
          border-radius: 10px;">
          <div style="${createOxygen.oxygenLevel(
            jwtToken[prop].value
          )}"></div><div style="${createOxygen.oxygenEnd}">2
          </div>
</div></div>
    `;
}

export default OxygenLevel;
