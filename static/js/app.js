// from data.js
// var tableData = data;

// //Select the filter table button
// var submit = d3.select('#filter-btn');

// submit.on("click", function(){

//     //Prevent the page from refreshing
//     d3.event.preventDefault();

//     //Select the input element and get the raw HTML node
//     var inputElement = d3.select("#datetime");

//     //Get the value property of the input element
//     var inputValue = inputElement.property("value");

//     console.log(inputValue);
//     console.log(tableData);

//     var filteredData = tableData.filter(date =>date.datetime == inputValue);

//     console.log(filteredData);

//     d3.select("#ufo-table")
// });

//Reference tbody element, input field and button //document.getElementById() = $
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $stateInput = document.querySelector("#state");
var $searchBtn = document.querySelector("#search");
var $cityInput = document.querySelector("#city");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");

//Event listener for search button
$searchBtn.addEventListener("click", searchButtonClick);
    //d3.event.preventDefault()


//set tableData = data;
var tableData = data;

//render table renders tableData to the tbody
function renderTable(){
    $tbody.innerHTML ="";
    for(var i=0; i < tableData.length; i++){
    //Get current address object and its fields
        var address = tableData[i];
        console.log(address)
        var fields = Object.keys(address);
        //Create a new rown in the tbody, set the indect to be i + startingIndex
        var $row = $tbody.insertRow(i);
        for (var j = 0; j < fields.length; j++){
            //for every field in the address object, create a new cell
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = address[field];
        }
    }
}
function searchButtonClick(){
    //format the user's search by removing spaces, lowercase the string
    d3.event.preventDefault(); 
        
    var filterDate = $dateInput.value;
    var filterState = $stateInput.value.trim().toLowerCase();
    var filterCity = $cityInput.value.trim().toLowerCase();
    var filterCountry = $countryInput.value.trim().toLowerCase();
    var filterShape = $shapeInput.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  
    if (filterDate != "")
    {
        tableData = data.filter(function(address) 
        {
            var addressDate = address.datetime; 
        
        // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
            return addressDate === filterDate;
        });
    }
    else {tableData};
    
    if(filterState != "")
    {
        tableData = tableData.filter(function(address)
        {
            var addressState = address.state;
            return addressState === filterState;
        });
    }
    else{tableData};

    if(filterCity != "")
    {
        tableData = tableData.filter(function(address)
        {
            var addressCity = address.city;
            return addressCity === filterCity;
        });
    }

    else{tableData};

    if(filterCountry != "")
    {
        tableData = tableData.filter(function(address)
        {
            var addressCountry = address.country;
            return addressCountry === filterCountry;
        });
    }
    else{tableData};

    if(filterShape != "")
    {
        tableData = tableData.filter(function(address)
        {
            var addressShape = address.shape;
            return addressShape === filterShape;
        });
    }
    else{tableData};
console.log(tableData);
renderTable();

}

    // Render the table for the first time on page load
renderTable();



