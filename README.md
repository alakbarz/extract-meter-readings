# extract-meter-readings
Extracts meter readings from the HTML of the Octupus Energy meter readings page.

This script outputs the readings in a CSV format (without a header):

```
24th Jun 2022,11054
30th May 2022,10829
30th Apr 2022,10539
```

## Instructions

1. Go to meter readings page on Octopus energy
2. Find (or inspect element) the `<div>` containing the meter readings

```html
<div class="MeterReadingHistorystyled__StyledReadingsContainer-sc-1mqak03-0 ...">...</div>
```

3. Save the `<div>` along with its children into a `.html` file
4. Run the extractor using Node.js. Pass the `.html` file as the first argument and and an arbitrary output file as the second argument

```sh
node extractReadings.js gas-reading.html gas.csv
```
