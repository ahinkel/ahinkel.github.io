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
    const creditPercent = parseFloat(document.getElementById('creditPercent').value);
    const solarResource = parseFloat(document.getElementById('solarResource').value);
    const nameplateCapacity = parseFloat(document.getElementById('nameplateCapacity').value);
    const costElectricity = parseFloat(document.getElementById('costElectricity').value);
    const wattCost = parseFloat(document.getElementById('wattCost').value);

    // Validate inputs
    if (isNaN(creditPercent) || isNaN(solarResource) || isNaN(nameplateCapacity) || isNaN(costElectricity) || isNaN(wattCost)) {
        alert('Please fill in all fields with valid numbers.');
        return;
    }

    // Annual Savings
    const annualProduction = solarResource * 0.8 * 0.2 * 365 * (1.65 * nameplateCapacity / ( 0.350 )); // in kWh
    const annualSavings = annualProduction * costElectricity;
    const arrayCost = nameplateCapacity * wattCost * 1000;
    const creditAmount = arrayCost * (creditPercent / 100);
    const netArrayCost = arrayCost - creditAmount;

    // Display the result
    document.getElementById('result').textContent = `Estimated Annual Savings: $${annualSavings.toFixed(2)}`;
}


function ignoreMe() {
    document.getElementById('result').textContent = `Estimated Cost of Array: $${arrayCost.toFixed(2)}`;
    document.getElementById('result').textContent = `Estimated Credit: $${creditAmount.toFixed(2)}`;
    document.getElementById('result').textContent = `Estimated Net Cost: $${netArrayCost.toFixed(2)}`;
}

// Fetch and parse CSV on page load
fetchCSV();

