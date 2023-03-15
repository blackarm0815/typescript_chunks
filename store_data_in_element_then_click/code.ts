const clickUseData = (
  message: string,
) => {
  // uses the extracted data
  const outputPre: HTMLElement | null = document.getElementById('output');
  if (outputPre !== null) {
    outputPre.innerText = message;
  }
};
const clickReaction = (
  mouseEvent: MouseEvent,
) => {
  // when the element is clicked extract the data and pass it to another function
  let message: string | undefined;
  const selectedElement = <HTMLElement>document.elementFromPoint(mouseEvent.x, mouseEvent.y);
  if (selectedElement !== null) {
    message = selectedElement.dataset.message;
    if (message !== undefined) {
      clickUseData(message);
    } else {
      console.log('Error: message not found.');
    }
  }
};
const clickAddFunctionality = (
  elementId: string,
  message: string,
) => {
  // adds data and functionality to element
  const htmlElement: HTMLElement | null = document.getElementById(elementId);
  if (htmlElement) {
    htmlElement.style.cursor = 'pointer';
    htmlElement.dataset.message = message;
    htmlElement.addEventListener('click', clickReaction, false);
  }
};
clickAddFunctionality('alpha', 'i am alpha');
clickAddFunctionality('bravo', 'i am bravo');
