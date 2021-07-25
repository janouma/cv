if (matchMedia('(hover: none)').matches) {
  document.querySelector('.demos')
    .addEventListener('touchend', ({ target }) => {
      if (target.matches('.demo')) {
        target.classList.toggle('hover')
      }
    })

  document.body
    .addEventListener('touchstart', ({ target }) => {
      if (!target.matches('.demo .link')) {
        for (const demoElement of document.querySelectorAll('.demos .demo')) {
          demoElement.classList.remove('hover')
        }
      }
    })
}

const urlElement = document.getElementById('url')
const url = document.URL.replace(/\/(\w+\.html)?$/, '')

urlElement.textContent = url
urlElement.parentElement.setAttribute('href', url)
