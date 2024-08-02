# DIRAC:  <ins>D</ins>irect pay incentives from the <ins>I</ins>nflation <ins>R</ins>eduction <ins>A</ins>ct for <ins>C</ins>olleges


The following search tool (scroll down) uses data derived from the DoE, IPEDS, and NREL to estimate return on investment for solar arrays on college campuses.  Comparisons are drawn to typical endowments, allowing schools to see the financial benefit of investing in on-campus solar.  The following assumes the array is under 1 MegaWatt in size.


### Data Provenance:
- College and University data comes from IPEDS, the Integrated Postsecondary Education Data System. In particular, school locations are from [Directory information, institutional characteristics, 2022](https://nces.ed.gov/ipeds/datacenter/DataFiles.aspx?gotoReportId=7&fromIpeds=true&sid=d96aa052-e8ea-42e0-bf18-91165500f959&rtid=7).
- Solar Resource data comes from NREL's [RE Atlas](https://maps.nrel.gov/).
- Energy Community data comes from the US DoE: [Coal Closure Data 2024](https://edx.netl.doe.gov/dataset/dbed5af6-7cf5-4a1f-89bc-a4c17e46256a/resource/4006c9da-f99c-4731-97b2-633cc1578994)
- State line shape file data: [2018 US state 500k](https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html).

School data was spatially joined with solar resource data to estimate the potential for solar power on each campus.  The resulting data was then spatially joined with the DoE's energy community data to inform the tax credit available to each institution.


### Columns returned include:
- Index
- Institution Name
- City of institution
- State of institution
- IRA Direct Pay Incentive estimate as a decimal (e.g., 0.30 corresponds to a 30% credit)
- Yearly Estimated Savings, in US Dollars, approximated from NREL solar resource data. Assumes an 80 kW array.
- Annual average solar resource data from NREL in Wh/m^2/day for the campus location given in IPEDS
- Estimate return rate on investment assuming $2.00/installed Watt of DC solar, 0.2 panel efficiency, 0.8 system efficiency, 12 cents/kWh, the tax credit for the institution as estimated from DoE data, and solar resource given by NREL data.

These estimates are intended to be a starting point only and are not tax advice.  The data is limited by what is contained in IPEDS, NREL, and DoE data.  Further incentives can be leveraged as well, including:
- US-made materials = additional 10%
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
