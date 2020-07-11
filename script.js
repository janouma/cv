function revealPosition ({ currentTarget }) {
  const wrapper = currentTarget.closest('.position-wrapper')
  const { document, setTimeout, scrollBy } = window
  const multiColumnsThreshold = 540
  const isMultiColumns = document.documentElement.clientWidth >= multiColumnsThreshold
  const defaultMargin = 16

  currentTarget.focus()
  wrapper.style.order = currentTarget.checked && isMultiColumns ? 0 : 1

  setTimeout(() => wrapper.scrollIntoView({ behavior: 'smooth' }), 50)
}
