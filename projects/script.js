const csvUrl = './college_ira_data.csv'; // URL to CSV file for search...

document.getElementById('searchInput').addEventListener('input', filterTable);

let csvData = [];

function fetchCSV() {
    Papa.parse(csvUrl, {
        header: true,
        download: true,
        complete: function(results) {
            csvData = results.data;
            displayTable(csvData);
        },
        error: function(error) {
            console.error("Error fetching CSV:", error);
        }
    });
}

function displayTable(data) {
    const table = document.getElementById('csvTable');
    const thead = table.querySelector('thead tr');
    const tbody = table.querySelector('tbody');

    // Clear previous content
    thead.innerHTML = '';
    tbody.innerHTML = '';

    if (data.length === 0) return;

    // Add headers
    const headers = Object.keys(data[0]);
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        thead.appendChild(th);
    });

    // Add rows
    data.forEach(row => {
        const tr = document.createElement('tr');
        headers.forEach(header => {
            const td = document.createElement('td');
            td.textContent = row[header];
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}

function filterTable() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const filteredData = csvData.filter(row => {
        return Object.values(row).some(value => value.toLowerCase().includes(searchText));
    });
    displayTable(filteredData);
}


function calculate() {
    // Get input values
    const creditPercentElem = parseFloat(document.getElementById('creditPercent').value);
    const solarResourceElem = parseFloat(document.getElementById('solarResource').value);
    const nameplateCapacityElem = parseFloat(document.getElementById('nameplateCapacity').value);
    const costElectricityElem = parseFloat(document.getElementById('costElectricity').value);
    const wattCostElem = parseFloat(document.getElementById('wattCost').value);

    // Validate inputs
    if (isNaN(creditPercentElem) || isNaN(solarResourceElem) || isNaN(nameplateCapacityElem) || isNaN(costElectricityElem) || isNaN(wattCostElem)) {
        alert('Please fill in all fields with valid numbers.');
        return;
    }

    // Log elements to check if they are found
    console.log('creditPercentElem:', creditPercentElem);
    console.log('solarResourceElem:', solarResourceElem);
    console.log('nameplateCapacityElem:', nameplateCapacityElem);
    console.log('costElectricityElem:', costElectricityElem);
    console.log('wattCostElem:', wattCostElem);
    
    // Annual Savings
    const annualProductionOut = (solarResourceElem / 1000) * 0.8 * 0.2 * 365 * 1.65 * (nameplateCapacityElem / 0.350); // in kWh
    const annualSavingsOut = annualProductionOut * costElectricityElem;
    const arrayCostOut = nameplateCapacityElem * wattCostElem * 1000;
    const creditAmountOut = arrayCostOut * (creditPercentElem / 100);
    const netArrayCostOut = arrayCostOut - creditAmountOut;

    // Display the result
    document.getElementById('result1').textContent = `Estimated Annual Savings: $${annualSavingsOut.toFixed(2)}`;
    document.getElementById('result2').textContent = `Estimated Cost of Array: $${arrayCostOut.toFixed(2)}`;
    document.getElementById('result3').textContent = `Estimated Credit: $${creditAmountOut.toFixed(2)}`;
    document.getElementById('result4').textContent = `Estimated Net Cost: $${netArrayCostOut.toFixed(2)}`;
}



// Fetch and parse CSV on page load
fetchCSV();

