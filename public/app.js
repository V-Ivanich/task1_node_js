document.addEventListener('click', (e) => {
  switch (e.target.dataset.type) {
    case 'remove':
      const id = e.target.dataset.id
      remove(id).then(() => {
        e.target.closest('li').remove()
      })
    case 'edit':
      const editId = e.target.dataset.id
      const result = prompt('Введите новое название', 'Edits text')
      if (result === null || !result) {
        break
      } else {
        const data = JSON.stringify(result)
        put(editId, data)
      }
  }
})

async function remove(id) {
  await fetch(`/${id}`, { method: 'DELETE' })
}

async function put(id, data) {
  await fetch(`/${id}`, { method: 'PUT', body: data })
}
