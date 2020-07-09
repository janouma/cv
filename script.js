function revealPosition ({ currentTarget, currentTarget: { parentNode, checked } }) {
  const { document, setTimeout, scrollBy } = window
  const multiColumnsThreshold = 540
  const isMultiColumns = document.documentElement.clientWidth >= multiColumnsThreshold
  const defaultMargin = 16

  currentTarget.focus()
  parentNode.style.order = checked && isMultiColumns ? 0 : 1

  setTimeout(() => {
    parentNode.scrollIntoView()
    scrollBy({ top: -defaultMargin, left: 0 })
  }, 50)
}
