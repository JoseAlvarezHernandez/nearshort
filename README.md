# nearshort
Nearshort Technology test

# Technical Exercise - Consume, Filter and Sort raw data for display in HTML.
## End Goal (highlighted in red): 
http://drop.ballisty.com/E9IHRGCOubYp 

## API
API Endpoint: https://applefacilities.review.blueriver.com/index.cfm/_api/json/v1/scv/building/?andOpenGrouping&locationCode%5B0%5D=sqo&or&locationCode%5B2%5D=nwr&or&locationCode%5B4%5D=scv&or&locationCode%5B6%5D=sfo&closeGrouping&fields=buildingname,buildingabbr,lat,lng,black,buildingZone&active=1&cachedwithin=600

## Requirements
* Buildings should be grouped by Building Zone. This is a property in the "items" building object array.
* Building Zone should be sorted alphabetically, except for "Other", which should display last.
* Building Name should be sorted alphabetically.
* Non Black (black=0) buildings should link to https://applefacilities.review.blueriver.com.
* Black (black=1) buildings should have no link.

## Notes:
* CORS has been configured for localhost, localhost:3000, localhost:8080
* Use any programming language you prefer

## Delivery:
* You have 1.5 hours to complete this challenge.
* When complete, please email with either a link to a Git Repo or attach a zip of your code with a README on how to run.

### Good Luck!