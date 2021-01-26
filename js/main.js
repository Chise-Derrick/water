import Battery from "../js/iconComponents/Battery";
import Thermometer from "./iconComponents/Thermometer";
import HeightLevel from "./iconComponents/HeightLevel";
import Speed from "./iconComponents/Speed";
import AlarmBoolean from "./iconComponents/AlarmBoolean";
import StateDirection from "./iconComponents/StateDirection";
import OxygenLevel from "./iconComponents/OxygenLevel";
import PayloadButtons from "./iconComponents/PayloadButtons";

const changePage = (pageNumber, e) => {
  console.log(pageNumber.target.innerText);

  const data = fetch(
    "https://shrouded-crag-62244.herokuapp.com/sensors/" +
      pageNumber.target.innerText
  )
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("output").innerHTML = json2Table(data).replace(
        /'/g,
        ""
      );
    });
  const active = document.querySelector(".active");
  if (active) {
    active.classList.remove("active");
  }
  pageNumber.currentTarget.classList.add("active");
};

const pageEvent = Object.values(document.getElementsByClassName("pageLi"));
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

  const payloadProps = (t) => {
    let jwtTokenArray = [];
    let jwtToken = JSON.parse(t);

    for (let prop in jwtToken) {
      let valueProp = `<div>${prop}: ${jwtToken[prop].value} ${jwtToken[prop].unit}</div>`;
      let altProp = `<div>${prop}: ${jwtToken[prop]}</div>`;

      if (prop === "battery") {
        jwtToken["batteryIcon"] = Battery(jwtToken, prop);
        jwtTokenArray.push(jwtToken["batteryIcon"]);
        jwtToken[prop] = valueProp;
      }
      if (prop === "temperature") {
        jwtToken["temperatureIcon"] = Thermometer(jwtToken, prop);
        jwtTokenArray.push(jwtToken["temperatureIcon"]);
        jwtToken[prop] = valueProp;
      }
      if (prop === "height") {
        jwtToken["heightIcon"] = HeightLevel(jwtToken, prop);
        jwtTokenArray.push(jwtToken["heightIcon"]);
        jwtToken[prop] = valueProp;
      }
      if (prop === "speed") {
        jwtToken["speedIcon"] = Speed(jwtToken, prop);
        jwtTokenArray.push(jwtToken["speedIcon"]);
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
      if (prop === "oxygen") {
        jwtToken["oxygenIcon"] = OxygenLevel(jwtToken, prop);
        jwtTokenArray.push(jwtToken["oxygenIcon"]);
        jwtToken[prop] = valueProp;
      }

      jwtTokenArray.push(jwtToken[prop]);
    }
    jwtToken = jwtTokenArray.toString().toUpperCase();
    return jwtToken;
  };

  let headerRow = columns
    .map((col) => {
      if (col === "transmittedAt") {
        col = "transmitted<br>at";
      }
      if (col == "payload") {
        let payloadProp = PayloadButtons();
        return `<th>${col} ${payloadProp}</th>`;
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

const data = fetch("https://shrouded-crag-62244.herokuapp.com/sensors/1")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("output").innerHTML = json2Table(data).replace(
      /'/g,
      ""
    );
  });
