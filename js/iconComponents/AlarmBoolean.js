const createAlarmBoolean = {
  iconContain: `
    background-color: white;
    width: 22px;
    height: 17px;
          position: absolute;
          top: 0;
          left: 91px;
          border: 1px solid lightgrey;
  `,
  alarmCase: `
          position: absolute;
          top: -1px;
          left: 0;
          width: 11px;
          height: 9px;
          border-radius: 0 2px 2px 0;
`,
  alarmStart: `
          position: relative;
          background-color: grey;
          bottom: 12px;
          left: 6px;
          width: 1px;
          height: 4px;
          border-left: none;
          transform: rotate(-45deg);
`,
  alarmEnd: `
          position: relative;
          background-color: grey;
          bottom: 16px;
          left: 16px;
          width: 1px;
          height: 4px;
          border-left: none;
          transform: rotate(45deg);
`,
  alarmLevel(level) {
    let levelColor = "lightgrey";
    if (level) {
      levelColor = "#F02020";
    }
    return `
    margin-top: 5px;
    margin-left: 5px;
          border: 1px solid '#555';
          background-color: ${levelColor};
          height: 9px;
          width: 12px;
          border-radius: 15px 15px 0 0;
`;
  },
};

function AlarmBoolean(jwtToken, prop) {
  return `<div style="${createAlarmBoolean.iconContain}">
          <div style="${createAlarmBoolean.alarmCase}">
          <div style="${createAlarmBoolean.alarmLevel(jwtToken[prop])}"></div>
          <div style="${createAlarmBoolean.alarmStart}"></div>
          <div style="${createAlarmBoolean.alarmEnd}"></div></div></div>`;
}

export default AlarmBoolean;
