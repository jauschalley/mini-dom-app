document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (text === '') return;

    const item = document.createElement('li');
    item.textContent = text;

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.addEventListener('click', () => {
      list.removeChild(item);
    });

    item.appendChild(deleteBtn);
    list.appendChild(item);

    input.value = '';
  });
});
