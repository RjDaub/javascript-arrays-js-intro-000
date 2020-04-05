var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
return addElementToBeginningOfArray();


function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
  addElementToBeginningOfArray();
}
