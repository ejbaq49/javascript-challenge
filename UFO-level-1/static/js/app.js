// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Add function to filter by date

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
