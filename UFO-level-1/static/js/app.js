// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("form");

// Create event handlers
button.on("click", filterDate);
form.on("submit", filterDate);

// Add function to filter by date
function filterDate() {
  // Prevent refresh
  d3.event.preventDefault();
  // Get date from input
  var inputElement = d3.select(".form-control");
  var inputValue = inputElement.property("value");
  // Filter data
  filteredData = tableData.filter(
    (sighting) => sighting.datetime >= inputValue
  );
  // Loop through data and add row to table body
  filteredData.forEach((sighting) => {
    var row = tbody.append("tr");
    // Loop through each document and add td
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
