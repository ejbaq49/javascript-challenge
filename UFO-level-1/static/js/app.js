// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("form");

// Create event handlers
// button.on("click")

// Add function to filter by date
function filterDate(prmData, prmDate) {
  // Prevent refresh
  d3.event.preventDefault();
  // Filter data
  filteredData = prmData.filter((sighting) => sighting.datetime >= prmDate);
  return filteredData;
}

// Capture date parameter on submit/click

// Create new filtered data set using function and date parameter

// Replace tableData in loop below with filteredData from function
// Loop through data and add row to table body
tableData.forEach((sighting) => {
  var row = tbody.append("tr");
  // Loop through each document and add td
  Object.entries(sighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
