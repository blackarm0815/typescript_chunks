const divCircle = (
  parentDiv: HTMLElement,
  xPos: number,
  yPos: number,
  radius: number,
) => {
  const left = xPos - radius;
  const top = yPos - radius;
  const diameter = radius * 2;
  const newDiv = document.createElement('div');
  newDiv.style.position = 'absolute';
  newDiv.style.top = `${top.toString()}px`;
  newDiv.style.left = `${left.toString()}px`;
  newDiv.style.width = `${diameter.toString()}px`;
  newDiv.style.height = `${diameter.toString()}px`;
  newDiv.style.borderRadius = `${radius.toString()}px`;
  newDiv.classList.add('red');
  parentDiv.appendChild(newDiv);
  return newDiv;
};

const parentDiv = document.getElementById('main');
if (parentDiv !== null) {
  divCircle(parentDiv, 200, 200, 150);
}
