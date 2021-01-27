const createStateDirection = {
  iconContain: `
    background-color: white;
    width: 22px;
    height: 16px;
          position: absolute;
          top: 1px;
          left: 114px;
          border: 1px solid lightgrey;
  `,
  stateCase(level) {
    let direction = "90deg";
    if (level === "Rising") {
      direction = "45deg";
    } else if (level === "Falling") {
      direction = "135deg";
    }
    return `
          position: absolute;
          top: 2px;
          left: 11px;
          background-color: grey;
          width: 1px;
          height: 12px;
          border-radius: 0 1px 1px 0;
    vertical-align: middle;
          transform: rotate(${direction});
`;
  },

  stateEnd: `
          position: relative;
          top: 0px;
          left: 0px;
    border-right: 1px solid #000;
    border-top: 1px solid #000;
    width: 2px;
    height: 2px;
    display: flex;
    vertical-align: middle;
          transform: rotate(135deg);
`,
  stateStart: `
          position: relative;
          top: 0;
          left: -1px;
    border-right: 1px solid #000;
    border-top: 1px solid #000;
    width: 2px;
    height: 2px;
    display: flex;
    vertical-align: middle;
          transform: rotate(-45deg);
`,
};

function StateDirection(jwtToken, prop) {
  return `
<div style="${createStateDirection.iconContain}">
          <div style="${createStateDirection.stateCase(jwtToken[prop])}">
          <div style="${createStateDirection.stateStart}"></div>
          </div></div>
    `;
}

export default StateDirection;
