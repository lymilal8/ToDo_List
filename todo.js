function fetchTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json());
  }

  function markCompletedTodoCount(checkedCount) {
    return new Promise((resolve, reject) => {
      if (checkedCount === 5) {
        resolve(checkedCount);
      } else {
        reject(checkedCount);
      }
    });
  }

  fetchTodos()
    .then(todos => {
      const todoTableBody = document.querySelector('#todoTable tbody');
      let checkedCount = 0;

      todos.forEach(todo => {
        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = todo.id;

        const titleCell = document.createElement('td');
        titleCell.textContent = todo.title;

        const completedCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        if (todo.completed)
          {
              checkbox.disabled= true;
          }


        checkbox.addEventListener('change', function() {
          if (this.checked) {
            checkedCount++;
          } else {
            checkedCount--;
          }

          markCompletedTodoCount(checkedCount)
            .then(count => {
              alert(`Congrats. ${count} Tasks have been Successfully Completed`);
            })
            .catch(count => {
              // No alert if less than 5 tasks completed
            });
        });

        completedCell.appendChild(checkbox);
        
        row.appendChild(idCell);
        row.appendChild(titleCell);
        row.appendChild(completedCell);

        todoTableBody.appendChild(row);
      });
    });