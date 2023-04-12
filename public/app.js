document.addEventListener('click', (e) => {
  switch (e.target.dataset.type) {
    case 'remove':
      const id = e.target.dataset.id
      remove(id).then(() => {
        e.target.closest('li').remove()
      })
      break

    case 'edit':
      const editId = e.target.dataset.id
      const elemTitle = document
        .querySelector(`#title${editId}`)
        .textContent.trim()
      const result = prompt('Введите новое название', elemTitle)
      if (result === null || !result) {
        break
      } else {
        document.querySelector(`#title${editId}`).textContent = result
        put({ id: editId, data: result })
      }
  }
})

async function remove(id) {
  await fetch(`/${id}`, { method: 'DELETE' })
}

async function put(id, data) {
  await fetch('/', {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ id, data }),
  })
}
