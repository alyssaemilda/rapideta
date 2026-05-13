let linesData = {};
let currentType = "lrt";

fetch("routes&stations.json")
  .then(res => res.json())
  .then(data => {
    linesData = data;
    loadButtons("lrt");
  });

function showTransport(type, button){

  document.querySelectorAll(".transport-buttons button")
  .forEach(btn => btn.classList.remove("active"));

  button.classList.add("active");

  currentType = type;
  loadButtons(type);
}

function loadButtons(type){

  let lineButtons = document.getElementById("lineButtons");
  lineButtons.innerHTML = "";

  linesData[type].forEach(line => {

    let btn = document.createElement("button");
    btn.innerHTML = line.name;

    btn.onclick = function(){
      document.getElementById("mapImage").src = line.image;
      document.getElementById("title").innerHTML = line.name + " Route Map";
    };

    lineButtons.appendChild(btn);
  });

  document.getElementById("mapImage").src = linesData[type][0].image;
  document.getElementById("title").innerHTML = linesData[type][0].name + " Route Map";
}