document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    // Function to add a task
    const addTask = () => {
      const taskText = taskInput.value.trim();
      if (taskText === '') {
        alert('Please enter a task.');
        return;
      }
  
      const taskItem = document.createElement('li');
      taskItem.className = 'task-item';
  
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => taskItem.remove());
  
      taskItem.appendChild(taskSpan);
      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);
  
      taskInput.value = '';
    };
  
    // Add task on button click
    addTaskBtn.addEventListener('click', addTask);
  
    // Add task on Enter key press
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });
  