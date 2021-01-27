import fetchProgress from "fetch-progress";

import Battery from "../js/iconComponents/Battery";
import Thermometer from "./iconComponents/Thermometer";
import HeightLevel from "./iconComponents/HeightLevel";
import Speed from "./iconComponents/Speed";
import AlarmBoolean from "./iconComponents/AlarmBoolean";
import StateDirection from "./iconComponents/StateDirection";
import OxygenLevel from "./iconComponents/OxygenLevel";
import PayloadButtons from "./iconComponents/PayloadButtons";
import "regenerator-runtime/runtime";
const config = {
  pageNumber: 1,
  orderBy: "Order By",
};
const boundPageDisplay = document.getElementById("page");
boundPageDisplay.innerHTML = config.pageNumber;

const fetchData = async () => {
  let elem = document.getElementById("barStatus");
  let id = setInterval(frame, 7);
  let width = 0;
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      width = 0;
      elem.style.width = 0;
    } else {
      width++;
      elem.style.width = width + "%";
    }
  }
  let client = new XMLHttpRequest();
  client.open(
    "GET",
    "https://shrouded-crag-62244.herokuapp.com/sensors/" + config.pageNumber
  );
  client.onprogress = function (pe) {
    console.log(pe.total);
    console.log(pe);
    console.log(pe.loaded);
    /*      progressBar.max = pe.total
      progressBar.value = pe.loaded*/
  };
  client.onloadend = function (pe) {
    console.log(pe.loaded);
    console.log(pe);
    width = 98;
    const data = JSON.parse(pe.target.response);
    document.getElementById("output").innerHTML = json2Table(data).replace(
      /'/g,
      ""
    );
  };
  client.send();
};

const changePage = (direction) => {
  if (direction.target.innerText === "-" && config.pageNumber > 0) {
    config.pageNumber--;
  } else {
    config.pageNumber++;
  }
  boundPageDisplay.innerHTML = config.pageNumber;
  fetchData();
};

const pageEvent = Object.values(document.getElementsByClassName("changePage"));

pageEvent.forEach((link) => {
  link.addEventListener("click", (event) => {
    console.log(event);
    changePage(event);
    // more code here
  });
  if ("ontouchstart" in window) {
    link.addEventListener("touchstart", function () {
      changePage();
    });
  }
  link.addEventListener("touchstart", (event, link) => {
    console.log(event);
    console.log(link);
    // more code here
  });
});

function json2Table(json) {
  console.log(json);
  let columns = Object.keys(json[0]);

  const payloadProps = (jwtToken) => {
    let jwtTokenArray = [];

    for (let prop in jwtToken) {
      let valueProp = `<div>${prop}: ${jwtToken[prop].value} ${jwtToken[prop].unit}</div>`;
      let altProp = `<div>${prop}: ${jwtToken[prop]}</div>`;

      if (prop === "battery") {
        jwtToken[prop] = valueProp;
      }
      if (prop === "temperature") {
        jwtToken[prop] = valueProp;
      }
      if (prop === "height") {
        jwtToken[prop] = valueProp;
      }
      if (prop === "speed") {
        jwtToken[prop] = valueProp;
      }
      if (prop === "oxygen") {
        jwtToken["oxygenIcon"] = OxygenLevel(jwtToken, prop);
        jwtTokenArray.push(jwtToken["oxygenIcon"]);
        jwtToken[prop] = valueProp;
      }
      if (prop === "alarm") {
        jwtToken["alarmIcon"] = AlarmBoolean(jwtToken, prop);
        jwtTokenArray.push(jwtToken["alarmIcon"]);
        jwtToken[prop] = altProp;
      }
      if (prop === "state") {
        jwtToken["stateIcon"] = StateDirection(jwtToken, prop);
        jwtTokenArray.push(jwtToken["stateIcon"]);
        jwtToken[prop] = altProp;
      }

      jwtTokenArray.push(jwtToken[prop]);
    }
    jwtToken = jwtTokenArray.toString().toUpperCase();
    return jwtToken;
  };

  let headerRow = columns
    .map((col) => {
      if (col === "transmittedAt") {
        col =
          "transmitted<br>at" +
          `<div style='margin-left: 40px'><a><strong>${config.orderBy}</strong></a></div>`;
      }

      if (col == "payloadDecoded") {
        let payloadProp = PayloadButtons();
        return `<th><div class="index__iconContainer">
<div class="index__iconContainerButton tempProp"></div>
<div class="index__iconContainerButton heightProp"></div>
<div class="index__iconContainerButton speedProp"></div>
<div class="index__iconContainerButton batteryProp"></div>
<div class="index__iconContainerButton alarmProp largerIcon"></div>
<div class="index__iconContainerButton stateProp largerIcon"></div>
<div class="index__iconContainerButton oxygenProp largerIcon"></div>
</div>${col} ${payloadProp}</th>`;
      }

      return `<th>${col}</th>`;
    })
    .join("")
    .replace(/,/g, "");

  let rows = json
    .map((row) => {
      let tableData = [];

      columns.map((col) => {
        if (
          row[col].toString().indexOf("-") !=
          row[col].toString().lastIndexOf("-")
        ) {
          row[col] = row[col].toString().replace(/-/g, "<br>-");
        }
        if (col === "payloadDecoded") {
          row[col] = payloadProps(row[col]);
        }
        if (col === "transmittedAt") {
          row[col] =
            new Date(row[col].iso).toLocaleDateString() +
            "<br>" +
            new Date(row[col].iso).toLocaleTimeString();
        }
        tableData.push(`<td>${row[col]}</td>`);
      });
      return `<tr>${tableData}</tr>`;
    })
    .join("")
    .replace(/,/g, "");

  //build the table
  const table = `
	<table class="flex-table">
		<thead class="table__header">
			<tr class="table__header">${headerRow}</tr>
		<thead>
		<tbody class="table__body">
			${rows}
		<tbody>
	<table>`;

  return table;
}

fetchData();
