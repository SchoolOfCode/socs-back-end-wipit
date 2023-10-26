const buttonW1 = document.querySelector("#WeekOne__Button");

async function getAndDisplayWeekOneResources() {
  const weekOneResources = await retrieveWeekOneResources();
  displayWeekOneResources(weekOneResources);
}

async function retrieveWeekOneResources() {
  //Send GET request to the resource library API. Await the response
  const response = await fetch("http://localhost:3000/api/resources/", {
    headers: {
      Accept: "application/json",
    },
  });
  //Check if response failed, if so log an error and halt the app
  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }
  //return the parsed JSON from the response (which contains weather object)
  const data = await response.json();
  return data;
}

function displayWeekOneResources(weekOneResources) {
  const containerDiv = document.getElementById("resource-container");
  for (let i = 0; i < weekOneResources.payload.length; i++) {

    newWeekP = document.createElement("p");
    newWeekP.innerText = weekOneResources.payload[i].week;
    containerDiv.appendChild(newWeekP);
    newSubjectP = document.createElement("p");
    newSubjectP.innerText = weekOneResources.payload[i].subject;
    containerDiv.appendChild(newSubjectP);
    newTitleP = document.createElement("p");
    newTitleP.innerText = weekOneResources.payload[i].title;
    containerDiv.appendChild(newTitleP);
    newAnchorElement = document.createElement("a");
    newAnchorElement.href = `${weekOneResources.payload[i].resource}`;
    newAnchorElement.textContent = "Link";
    containerDiv.appendChild(newAnchorElement);
  }
}

buttonW1.addEventListener("click", getAndDisplayWeekOneResources);

// FUNCTION WEEK ONE COMPLETED ABOVE =================================================

const buttonW3 = document.querySelector("#WeekThree__Button");

async function getAndDisplayWeekThreeResources() {
  const weekThreeResources = await retrieveWeekThreeResources();
  displayWeekThreeResources(weekThreeResources);
}

async function retrieveWeekThreeResources() {
  //Send GET request to the resource library API. Await the response
  const response = await fetch("http://localhost:3000/api/resources/week3/", {
    headers: {
      Accept: "application/json",
    },
  });
  //Check if response failed, if so log an error and halt the app
  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }
  const data = await response.json();
  return data;
}

function displayWeekThreeResources(weekThreeResources) {
  const containerDiv = document.getElementById("resource-container");
  for (let i = 0; i < weekThreeResources.payload.length; i++) {

    newWeekP = document.createElement("p");
    newWeekP.innerText = weekThreeResources.payload[i].week;
    containerDiv.appendChild(newWeekP);
    newSubjectP = document.createElement("p");
    newSubjectP.innerText = weekThreeResources.payload[i].subject;
    containerDiv.appendChild(newSubjectP);
    newTitleP = document.createElement("p");
    newTitleP.innerText = weekThreeResources.payload[i].title;
    containerDiv.appendChild(newTitleP);
    newAnchorElement = document.createElement("a");
    newAnchorElement.href = `${weekThreeResources.payload[i].resource}`;
    newAnchorElement.textContent = "Link";
    containerDiv.appendChild(newAnchorElement);
  }
}

buttonW3.addEventListener("click", getAndDisplayWeekThreeResources);

// FUNCTION WEEK THREE COMPLETED ABOVE =================================================