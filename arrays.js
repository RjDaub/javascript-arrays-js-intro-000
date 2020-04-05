var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(Array, Element) {
  return [Element, ...Array]
}

function destructivelyAddElementToEndOfArray(Array, Element) {
 Array.unshift(Element)
 return Array
}
