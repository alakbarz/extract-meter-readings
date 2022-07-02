# extract-meter-readings
Extracts meter readings from the HTML of the Octupus Energy meter readings page.

This can be ran locally (`extractReadings.js`) or installed as a [temporary extension on Firefox](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/).

This will output the readings in a CSV format (without a header):

```
24th Jun 2022,11054
30th May 2022,10829
30th Apr 2022,10539
```

## Using as an Extension

1. Go to meter readings page on Octopus Energy
2. Refresh the page so that the extension loads (you'll see a "Download readings" button appear)

<img width="437" alt="image" src="https://user-images.githubusercontent.com/64750210/177008379-8f10a548-f923-476f-917f-301bb647f947.png">

2. Scroll down until you've loaded all of the readings you want to extract
3. Press the "Download readings" button near the top to download

## Running Locally

1. Go to meter readings page on Octopus energy
2. Find (or inspect element) the `<div>` containing the meter readings

```html
<div class="MeterReadingHistorystyled__StyledReadingsContainer-sc-1mqak03-0 ...">...</div>
```

3. Save the `<div>` along with its children into a `.html` file
4. Run the extractor using Node.js. Pass the `.html` file as the first argument and an arbitrary output file as the second argument

```sh
node extractReadings.js gas-reading.html gas.csv
```
