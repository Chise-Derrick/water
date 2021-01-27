const createIcons = {
  allIcons: `
    background-color: white;
    width: 22px;
    height: 16px;
          position: absolute;
          bottom: 1px;
          left: 1px;
          border: 1px solid lightgrey;
          width: 158px;
  `,
  iconContain: `
    width: 22px;
    height: 16px;
  `,
  oxygenCase: `
          position: absolute;
          top: 2px;
          left: 142px;
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
          top: 4px;
          left: 5px;
          border: 1px solid black;
          border-radius: 2px;
          width: 3px;
          height: 3px;
          border-bottom: none;
`,
};

function PayloadButtons() {
  const handleMouseOver = (e) => {
    createIcons.iconContain = `
    width: 22px;
    height: 16px;
    background-color: black;
  `;
    console.log(e);
  };

  const handleClick = (e) => {
    console.log(e);
  };

  return `
'
    `;
}

export default PayloadButtons;
