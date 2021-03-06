// from data.js
var tableData = data;

// Map data points to new arrays
// Cities
var cities = ["- choose"];
tableData.map(function (sighting) {
  if (!cities.includes(sighting.city)) {
    cities.push(sighting.city);
  }
});
// Sort Cities
var citiesSort = cities;
citiesSort.sort();

// States
var states = ["- choose"];
tableData.map(function (sighting) {
  if (!states.includes(sighting.state)) {
    states.push(sighting.state);
  }
});
// Sort States
var statesSort = states;
statesSort.sort();

// Country
var countries = ["- choose"];
tableData.map(function (sighting) {
  if (!countries.includes(sighting.country)) {
    countries.push(sighting.country);
  }
});

// Shape
var shapes = ["- choose"];
tableData.map(function (sighting) {
  if (!shapes.includes(sighting.shape)) {
    shapes.push(sighting.shape);
  }
});

// Sort shapes
var shapesSort = shapes;
shapesSort.sort();

// console.log(cities);
// console.log(states);
// console.log(countries);

// Get needed HTML elements
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("form");
var citySelect = d3.select("#city-select"); // add "option" elements here
var stateSelect = d3.select("#state-select");
var countrySelect = d3.select("#country-select");
var shapeSelect = d3.select("#shape-select");

// Create event handlers
button.on("click", filterDate);
form.on("submit", filterDate);

// Add city list to html
citiesSort.forEach((city) => {
  // console.log(city);
  var newCity = citySelect.append("option");
  newCity.text(city);
});

// Add states to html
statesSort.forEach((state) => {
  var newState = stateSelect.append("option");
  newState.text(state);
});

// Add Countries to html
countries.forEach((country) => {
  var newCountry = countrySelect.append("option");
  newCountry.text(country);
});

// Add shapes to html
shapesSort.forEach((shape) => {
  var newShape = shapeSelect.append("option");
  newShape.text(shape);
});

// Add function to filter by date
function filterDate() {
  // Prevent refresh
  d3.event.preventDefault();

  // Get date from input
  var inputElement = d3.select(".form-control");
  var inputValue = inputElement.property("value");
  // Get selected city, state, country, shape
  //  empty value if default "- choose"
  var selectedCity = citySelect.property("value");
  if (selectedCity === "- choose") {
    selectedCity = "";
  }
  var selectedState = stateSelect.property("value");
  if (selectedState === "- choose") {
    selectedState = "";
  }
  var selectedCountry = countrySelect.property("value");
  if (selectedCountry === "- choose") {
    selectedCountry = "";
  }
  var selectedShape = shapeSelect.property("value");
  if (selectedShape === "- choose") {
    selectedShape = "";
  }

  //console
  console.log(`Date: ${inputValue}`);
  console.log(`City: ${selectedCity}`);

  filteredData = tableData.filter((sighting) => {
    return (
      (!inputValue || sighting.datetime === inputValue) &&
      (!selectedCity || sighting.city === selectedCity) &&
      (!selectedState || sighting.state === selectedState) &&
      (!selectedCountry || sighting.country === selectedCountry) &&
      (!selectedShape || sighting.shape === selectedShape)
    );
  });

  console.log(selectedCity);
  console.log(selectedState);
  console.log(selectedCountry);
  console.log(inputValue);

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
