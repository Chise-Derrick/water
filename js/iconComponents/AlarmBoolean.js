const createAlarmBoolean = {
  iconContain: `
    background-color: white;
    width: 22px;
    height: 16px;
          position: absolute;
          top: 1px;
          left: 91px;
          border: 1px solid lightgrey;
  `,
  alarmStart: `
          position: relative;
          background-color: '#555';
          bottom: 14px;
          left: 5px;
          width: 1px;
          height: 4px;
          border-left: none;
          transform: rotate(-45deg);
`,
  alarmEnd: `
          position: relative;
          background-color: '#555';
          bottom: 18px;
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
    margin-top: 6px;
    margin-left: 5px;
          border: 1px solid '#555';
          background-color: ${levelColor};
          height: 7px;
          width: 12px;
          border-radius: 15px 15px 0 0;
`;
  },
};

function AlarmBoolean(jwtToken, prop) {
  return `
<div style="${createAlarmBoolean.iconContain}">
          <div style="${createAlarmBoolean.alarmCase}">

          <div style="${createAlarmBoolean.alarmLevel(jwtToken[prop])}"></div>
          <div style="${createAlarmBoolean.alarmStart}"></div>
          <div style="${createAlarmBoolean.alarmEnd}"></div></div></div>'
    `;
}

export default AlarmBoolean;
