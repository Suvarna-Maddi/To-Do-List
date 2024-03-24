function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter your thoughts💭');
        return;
    }
        
    const taskList = document.getElementById('taskList');

    const listItem = document.createElement('li');
    listItem.className = 'task';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', toggleDeleteButton);

    const taskLabel = document.createElement('label');
    const taskDateTime = getCurrentDateTime();
    taskLabel.textContent = `${taskText} (${taskDateTime})`;

    const deleteButton = document.createElement('span');
    deleteButton.className = 'deleteButton';
    deleteButton.textContent = 'DELETE'; // Using a cross symbol for delete
    deleteButton.addEventListener('click', deleteTask);

    listItem.appendChild(checkbox);
    listItem.appendChild(taskLabel);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    addToHistory(taskText, taskDateTime); // Add to history

    taskInput.value = '';
}

function deleteTask() {
    const listItem = this.parentNode;
    const taskList = listItem.parentNode;
    taskList.removeChild(listItem);
}

function toggleDeleteButton() {
    const listItem = this.parentNode;
    const deleteButton = listItem.querySelector('.deleteButton');
    deleteButton.style.display = this.checked ? 'inline' : 'none';
}

function addToHistory(taskText, taskDateTime) {
    const historyList = document.getElementById('historyList');
    const historyItem = document.createElement('li');
    historyItem.textContent = `${taskText} (${taskDateTime})`;
    historyList.appendChild(historyItem);
}

// Function to toggle history visibility
function toggleHistory() {
    const historyBar = document.getElementById('taskHistory');
    const historyButton = document.getElementById('historyButton');
    
    if (historyBar.style.display === 'none') {
        historyBar.style.display = 'block';
        historyButton.textContent = 'Hide History';
    } else {
        historyBar.style.display = 'none';
        historyButton.textContent = 'Show History';
    }
}