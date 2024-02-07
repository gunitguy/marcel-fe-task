import TubesDataStorage from "./tubes-data-storage";
import { groupTubesToLimitedRacks } from "./group-tubes";

const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("groupButton");
const fileInput = document.getElementById("file");
const rackLimitInput = document.getElementById("racks") as HTMLInputElement;

const onReaderLoad = (event) => {
  const obj = JSON.parse(event.target.result);

  TubesDataStorage.setTubes(obj.tubes);
};

const onChange = (event) => {
  if (event.target.files && event.target.files.length) {
    const reader: FileReader = new FileReader();
    const file = event.target.files[0];
    reader.onload = onReaderLoad;
    reader.readAsText(file);
    document.documentElement.style.setProperty(
      "--input-placeholder",
      `"${file.name}"`
    );
  }
};

const onClickButton = () => {
  const tubes = TubesDataStorage.getTubes();
  const rackLimit = Number(rackLimitInput?.value);
  let element: HTMLElement;

  if (tubes.length === 0) {
    element = document.createElement("div");
    element.className = "error";
    element.innerHTML = "Firstly upload json with data.";
  } else {
    const result = groupTubesToLimitedRacks(tubes, rackLimit);

    element = document.createElement("pre");
    element.className = "code-result";
    element.innerHTML = `<code>${JSON.stringify(result, null, 4)}</code>`;
  }

  if (resultContainer?.firstChild) {
    resultContainer?.removeChild(resultContainer.firstChild as Node);
  }
  resultContainer?.appendChild(element);
};

fileInput?.addEventListener("change", onChange);
submitButton?.addEventListener("click", onClickButton);
