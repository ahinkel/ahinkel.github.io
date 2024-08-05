---
layout: single
title: DIRAC - Direct pay incentives from the Inflation Reduction Act for Colleges
---

# DIRAC:  <ins>D</ins>irect pay incentives from the <ins>I</ins>nflation <ins>R</ins>eduction <ins>A</ins>ct for <ins>C</ins>olleges

The following search tool uses data derived from the DoE, IPEDS, and NREL to estimate return on investment for solar arrays on college campuses.  Comparisons are drawn to typical endowments, allowing schools to see the financial benefit of investing in on-campus solar.  The following assumes the array is under 1 MegaWatt in size, and annual energy savings estimates use a nameplate capacity of 80 kW.

PLEASE NOTE: This tool is in beta testing. Other Energy Communities exist that are not taken into account just yet.  Please see the [official website](https://energycommunities.gov/energy-community-tax-credit-bonus/) for more information.


<html lang="en">
    <body>
        <hr width="100%" size="2">
    </body>
</html>




## Data Provenance:
<html lang="en">
    <details>
    
        <summary>Click to expand or hide text</summary>
            <ul>
                <li>College and University data comes from IPEDS, the Integrated Postsecondary Education Data System. In particular, school locations are from <a href="https://nces.ed.gov/ipeds/datacenter/DataFiles.aspx?gotoReportId=7&fromIpeds=true&sid=d96aa052-e8ea-42e0-bf18-91165500f959&rtid=7">Directory information, institutional characteristics, 2022</a>.</li>
                <li>Solar Resource data comes from NREL's <a href="https://maps.nrel.gov/">RE Atlas</a>.</li>
                <li>Energy Community data comes from the US DoE: <a href="https://edx.netl.doe.gov/dataset/dbed5af6-7cf5-4a1f-89bc-a4c17e46256a/resource/4006c9da-f99c-4731-97b2-633cc1578994">Coal Closure Data 2024</a> and <a href="https://edx.netl.doe.gov/dataset/dbed5af6-7cf5-4a1f-89bc-a4c17e46256a/resource/13454403-ef6b-479b-b720-d5e3eaefbb91">MSAs and Non-MSAs and their fossil fuel employment (FFE) and energy community status as of June 7, 2024.</a></li>
                <li>State line shape file data: <a href="https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html">2018 US state 500k</a>.</li>
            </ul>
    
            School data was spatially joined with solar resource data to estimate the potential for solar power on each campus.  The resulting data was then spatially joined with the DoE's energy community data to inform the tax credit available to each institution. Brownfield data is not included.
    
    </details>
</html>



<html lang="en">
    <body>
        <hr width="100%" size="2">
    </body>
</html>


## Columns returned include:
<html lang="en">
    <details>
    
        <summary>Click to expand or hide text</summary>

            <ul>
              <li>Institution Name</li>
              <li>City of institution</li>
              <li>State of institution</li>
              <li>IRA Direct Pay Incentive estimate as a decimal (e.g., 0.30 corresponds to a 30% credit)</li>
              <li>Yearly Estimated Savings, in US Dollars, approximated from NREL solar resource data. Assumes an 80 kW array.</li>
              <li>Average daily solar resource data from NREL in Wh/m^2/day for the campus location given in IPEDS. Averaged over a year.</li>
              <li>Estimated return rate on investment assuming $2.00/installed Watt of DC solar, 0.2 panel efficiency, 0.8 system efficiency, 12 cents/kWh, the tax credit for the institution as estimated from DoE data, and solar resource given by NREL data. (e.g., 0.11 corresponds to 11%). You can customize your calculations in the calculator below the search tool.</li>
            </ul>


    </details>
</html>



<html lang="en">
    <body>
        <hr width="100%" size="2">
    </body>
</html>



## Additional Info: 
<html lang="en">
    <details>
    
        <summary>Click to expand or hide text</summary>

            These estimates are intended to be a starting point only and are not tax advice.  The data is limited by what is contained in IPEDS, NREL, and DoE data.  Further incentives can be leveraged as well, including:
            <ul>
                <li>US-made materials = additional 10%</li>
                <li>Low-inclome community or Native American land = additional 10%</li>
                <li>Low-income community benefit project = additional 10%</li>
                <li>Brownfield (EPA) status = additional 10% if not already satisfying Energy Community credit.</li>
            </ul>
    </details>
</html>



<html lang="en">
    <body>
        <hr width="100%" size="2">
    </body>
</html>


## Maps:
- Click [here](../assets/pdfs/allCollegesUSstates.pdf) for a map of the institutions of higher learning.
- Click [here](../assets/pdfs/both_EC_types_studied.pdf) for a map of the institutions within an Energy Community (excludes brownfields and depicts only the continental US)

<html lang="en">
    <body>
        <hr width="100%" size="2">
    </body>
</html>


## Search:
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Direct pay incentives from the Inflation Reduction Act for Colleges</title>
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


<html lang="en">
    <body>
        <hr width="100%" size="2">
    </body>
</html>


## Calculator:
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Solar Cost Calculator</title>
    <!-- <link rel="stylesheet" href="./styles.css"> -->
</head>
<body>
    <div class="calculator">
        <form id="calcForm">
            <div class="input-group">
                <label for="creditPercent">Credit Percent (0-70%)</label>
                <input type="number" id="creditPercent" step="0.1" required>
            </div>
            <div class="input-group">
                <label for="solarResource">Avg Daily Solar Resource (Wh/m²/day), from table above</label>
                <input type="number" id="solarResource" step="0.01" required>
            </div>
            <div class="input-group">
                <label for="nameplateCapacity">Nameplate Capacity (kiloWatts)</label>
                <input type="number" id="nameplateCapacity" step="0.1" required>
            </div>
            <div class="input-group">
                <label for="costElectricity">Cost of Electricity ($/kWh)</label>
                <input type="number" id="costElectricity" step="0.01" required>
            </div>
            <div class="input-group">
                <label for="wattCost">Cost of Solar Panels ($/W)</label>
                <input type="number" id="wattCost" step="0.01" required>
            </div>
            <button type="button" onclick="calculate()">Calculate</button>
        </form>
        <div id="result1"></div>
        <div id="result2"></div>
        <div id="result3"></div>
        <div id="result4"></div>
        <div id="result5"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>


<html lang="en">
    <body>
        <hr width="100%" size="2">
    </body>
</html>


## Some Final Notes:

Please feel free to use and share with attribution.

For more on Schools and the Inflation Reduction Act, see [here.](https://www.undauntedk12.org/resources-learn-more-ira-for-schools)

NB: html and javascript are not languages I am very experienced with.  Very open to help cleaning up this search tool.  Please get in touch.




### For comments on the acronym:
Please see [here.](https://www.youtube.com/watch?v=dQw4w9WgXcQ)


