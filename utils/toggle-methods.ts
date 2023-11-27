const expandSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <path fill="currentColor" d="m17.5 4.75l-7.5 7.5l-7.5-7.5L1 6.25l9 9l9-9z"/>
  </svg>`
const collapseSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <path fill="currentColor" d="m2.5 15.25l7.5-7.5l7.5 7.5l1.5-1.5l-9-9l-9 9z"/>
  </svg>`

const getSiblings = (e) => {
  const siblings = [] // for collecting siblings
  let sibling = e.parentNode.firstChild // first child of the parent node
  while (sibling) { // collecting siblings
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling)
    }
    sibling = sibling.nextSibling
  }
  return siblings
}
// https://www.javascripttutorial.net/javascript-dom/javascript-siblings/

export { getSiblings, expandSvg, collapseSvg }
