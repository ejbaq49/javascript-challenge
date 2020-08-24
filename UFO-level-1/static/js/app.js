// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Loop through data and add row to table body
tableData.forEach((sighting) => {
  var row = tbody.append("tr");
  // Loop through each document and add td
  Object.entries(sighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
