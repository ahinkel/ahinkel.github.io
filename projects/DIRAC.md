# DIRAC:  Direct pay incentives from the Inflation Reduction Act for Colleges


The following search tool uses data derived from the DoE, IPEDS, and NREL to estimate return on investment for solar arrays on college campuses.  Comparisons are drawn to typical endowments, allowing schools to see the financial benefit of investing in on-campus solar.  The following assumes the array is under 1 MegaWatt in size.

### Columns returned include:
- Index
- Institution Name
- City of institution
- State of institution
- IRA Direct Pay Incentive estimate as a decimal (e.g., 0.3 corresponds to a 30% credit)
- Yearly Estimated Savings, in US Dollars, approximated from NREL solar resource data. Assumes an 80 kW array.
- Annual average solar resource data from NREL in Wh/m^2/day for the campus location given in IPEDS
- Longitude of campus location
- Latitude of campus location
- Estimate return rate on investment assuming $2.00/installed Watt of DC solar, 0.2 panel efficiency, 0.8 system efficiency, 12 cents/kWh, the tax credit for the institution as estimated from DoE data, and solar resource given by NREL data.

These estimates are intended to be a starting point only and are not tax advice.  The data is limited by what is contained in IPEDS, NREL, and DoE data.  Further incentives can be leveraged as well, including:
- US-made materials = Additional 10%
- Low-inclome community or Native American land = additional 10%
- Low-income community benefit project = additional 10%

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSV Search</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 8px;
            text-align: left;
        }
    </style>
</head>
<body>
    <input type="text" id="searchInput" placeholder="Search..." />
    <table id="csvTable">
        <thead>
            <tr></tr>
        </thead>
        <tbody></tbody>
    </table>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>
    <script src="./script.js"></script>
</body>
</html>


NB: html and js are not languages I am all that familiar with.  Very open to help cleaning up this search tool. Please get in touch.
