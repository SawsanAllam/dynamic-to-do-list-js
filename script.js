// انتظر تحميل كل عناصر الصفحة
document.addEventListener('DOMContentLoaded', () => {
    // تحديد العناصر من الـ DOM
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // دالة لإضافة مهمة جديدة
    function addTask() {
        const taskText = taskInput.value.trim(); // إزالة المسافات من الطرفين

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // إنشاء عنصر <li> جديد للمهمة
        const li = document.createElement('li');
        li.textContent = taskText;

        // إنشاء زر الحذف
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // عند الضغط على زر الحذف يتم إزالة المهمة
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // إضافة الزر إلى <li> ثم إضافته إلى القائمة
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // مسح خانة الإدخال
        taskInput.value = '';
    }

    // عند الضغط على زر "Add Task"
    addButton.addEventListener('click', addTask);

    // عند الضغط على زر Enter من الكيبورد
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
