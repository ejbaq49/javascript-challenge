// from data.js
var tableData = data;

// Map data points to new arrays
// Cities
var cities = [];
tableData.map(function (sighting) {
  if (!cities.includes(sighting.city)) {
    cities.push(sighting.city);
  }
});

// States
var states = [];
tableData.map(function (sighting) {
  if (!states.includes(sighting.state)) {
    states.push(sighting.state);
  }
});

// console
console.log(cities);
console.log(states);

// Get needed HTML elements
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("form");
var citySelect = d3.select("#city-select"); // add "option" elements here

// Create event handlers
button.on("click", filterDate);
form.on("submit", filterDate);

// Add city list to html
cities.forEach((city) => {
  console.log(city);
  var newCity = citySelect.append("option");
  newCity.text(city);
});

// Add function to filter by date
function filterDate() {
  // Prevent refresh
  d3.event.preventDefault();
  // Get date from input
  var inputElement = d3.select(".form-control");
  var inputValue = inputElement.property("value");
  // Filter data
  filteredData = tableData.filter(
    (sighting) => sighting.datetime === inputValue
  );

  // Call function to populate table
  populateTable(filteredData);
}

function populateTable(filteredData) {
  // Clear table
  tbody.html("");
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
