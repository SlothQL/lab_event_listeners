document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);


  const deleteButton = document.createElement('button');
  deleteButton.textContent = "Delete All";
  const body = document.querySelector('body')
  body.appendChild(deleteButton);
  deleteButton.addEventListener('click', handleDeleteAll);
  
})

  const handleFormSubmit = function(event) {
    event.preventDefault();
    //const form = document.querySelector('#new-item-form');
    const resultList = document.querySelector('#reading-list');
    const newListItem = document.createElement('li');
    newListItem.classList.add('list-item');
    newListItem.textContent = `Title: ${event.target.title.value} Author: ${event.target.author.value} Category: ${event.target.category.value}`;
    resultList.appendChild(newListItem);
    this.reset(); 
    // we can use this here, cause we are inside the event on that form therefore the context we are calling this is the form
  }

  const handleDeleteAll = function(event) {
    const deletedList = document.querySelector('#reading-list');
    deletedList.querySelectorAll('*').forEach(listItem => listItem.remove());
    // deletedList.innerHTML = '';
  }

  