// ننتظر تحميل محتوى الصفحة بالكامل قبل تشغيل أي كود
document.addEventListener('DOMContentLoaded', () => {
    // اختيار العناصر من الـ DOM
    const addButton = document.getElementById('add-task-btn'); // زر إضافة المهمة
    const taskInput = document.getElementById('task-input');   // حقل إدخال المهمة
    const taskList = document.getElementById('task-list');     // قائمة عرض المهام

    // دالة لإضافة مهمة جديدة
    function addTask() {
        const taskText = taskInput.value.trim(); // نحصل على النص ونتخلص من المسافات الزائدة

        // التحقق من أن المستخدم كتب مهمة فعلًا
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // إنشاء عنصر <li> جديد لتمثيل المهمة
        const li = document.createElement('li');
        li.textContent = taskText;

        // إنشاء زر للحذف
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // عند الضغط على زر الحذف يتم حذف العنصر من القائمة
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // إضافة زر الحذف لعنصر المهمة
        li.appendChild(removeBtn);

        // إضافة عنصر المهمة إلى قائمة المهام
        taskList.appendChild(li);

        // إفراغ حقل الإدخال بعد الإضافة
        taskInput.value = '';
    }

    // تشغيل دالة addTask عند الضغط على زر "Add Task"
    addButton.addEventListener('click', addTask);

    // تشغيل دالة addTask عند الضغط على مفتاح "Enter" داخل خانة الإدخال
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
