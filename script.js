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

document.getElementById('url').textContent = document.URL.replace(/\/(\w+\.html)?$/, '')
