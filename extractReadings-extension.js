const addDownloadButton = () => {
  let container = document.getElementsByClassName(
    "MeterReadingHistory__content"
  );

  let readings;
  let blob;
  let url;

  const button = document.createElement("a");
  button.className = "extractReadings";
  button.innerHTML = "Download readings";
  button.onclick = () => {
    container = document.querySelectorAll(
      '[class^="MeterReadingHistorystyled__StyledReadingsContainer"]'
    )[0].innerText;
    readings = extractReadings(container);
    blob = new Blob([readings], { type: "text/csv" });
    url = window.URL.createObjectURL(blob);
    button.setAttribute("href", url);
  };

  const text = document.createElement("p");
  text.innerHTML = "Scroll down to load all readings before downloading";

  container[0].prepend(text);
  container[0].prepend(button);
};

const extractReadings = (data) => {
  const readingsArray = data.split("\n");
  let c = 0;
  let readings = "";

  for (let i = 0; i < readingsArray.length; i++) {
    if (c === 6) {
      c = 0;
    }

    if (c === 0) {
      readings += readingsArray[i] + ",";
    } else if (c === 4) {
      readings += readingsArray[i] + "\n";
    }

    c++;
  }

  return readings;
};

const timer = setInterval(() => {
  if (
    document.getElementsByClassName("MeterReadingHistory__content").length > 0
  ) {
    clearInterval(timer);
    addDownloadButton();
  }
}, 500);
