const gradePoints = {
    "A": 4.0,
    "A-": 3.7,
    "B+": 3.3,
    "B": 3.0,
    "B-": 2.7,
    "C+": 2.3,
    "C": 2.0,
    "C-": 1.7,
    "D": 1.0,
    "F": 0.0
};

let courses =
    JSON.parse(localStorage.getItem("academicCourses")) || [];

let tasks =
    JSON.parse(localStorage.getItem("academicTasks")) || [];


const courseForm = document.getElementById("course-form");
const taskForm = document.getElementById("task-form");

const courseList = document.getElementById("course-list");
const taskList = document.getElementById("task-list");

const gpaValue = document.getElementById("gpa-value");
const courseCount = document.getElementById("course-count");
const taskCount = document.getElementById("task-count");


function saveData() {

    localStorage.setItem(
        "academicCourses",
        JSON.stringify(courses)
    );

    localStorage.setItem(
        "academicTasks",
        JSON.stringify(tasks)
    );
}


function calculateGPA() {

    if (courses.length === 0) {
        return 0;
    }

    const totalPoints = courses.reduce(
        (total, course) => total + gradePoints[course.grade],
        0
    );

    return totalPoints / courses.length;
}


function updateSummary() {

    const gpa = calculateGPA();

    gpaValue.textContent = gpa.toFixed(2);
    courseCount.textContent = courses.length;

    const pendingTasks = tasks.filter(
        task => !task.completed
    ).length;

    taskCount.textContent = pendingTasks;
}


function renderCourses() {

    courseList.innerHTML = "";

    courses.forEach((course, index) => {

        const courseCard = document.createElement("article");

        courseCard.className = "course-card";

        courseCard.innerHTML = `
            <span class="course-code">${course.code}</span>
            <h3>${course.name}</h3>
            <p>Grade: ${course.grade}</p>
            <button
                class="delete-button"
                onclick="deleteCourse(${index})"
            >
                Remove
            </button>
        `;

        courseList.appendChild(courseCard);
    });

    updateSummary();
}


function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const taskItem = document.createElement("div");

        taskItem.className =
            task.completed
                ? "task-item completed"
                : "task-item";

        taskItem.innerHTML = `
            <div>
                <h3>${task.name}</h3>
                <p>Course: ${task.course}</p>
                <p>Due: ${task.date}</p>
                <p>Priority: ${task.priority}</p>
            </div>

            <div class="task-actions">

                <button
                    class="task-status ${
                        task.completed
                            ? "complete"
                            : "pending"
                    }"
                    onclick="toggleTask(${index})"
                >
                    ${
                        task.completed
                            ? "Complete"
                            : "Pending"
                    }
                </button>

                <button
                    class="delete-button"
                    onclick="deleteTask(${index})"
                >
                    Remove
                </button>

            </div>
        `;

        taskList.appendChild(taskItem);
    });

    updateSummary();
}


courseForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const code =
        document.getElementById("course-code").value.trim();

    const name =
        document.getElementById("course-name").value.trim();

    const grade =
        document.getElementById("course-grade").value;

   courses.push({
    code,
    name,
    grade
});

saveData();

courseForm.reset();

renderCourses();
});


taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("task-name").value.trim();

    const course =
        document.getElementById("task-course").value.trim();

    const date =
        document.getElementById("task-date").value;

    const priority =
        document.getElementById("task-priority").value;

    tasks.push({
        name,
        course,
        date,
        priority,
        completed: false
    });

    saveData();

    taskForm.reset();

    renderTasks();
});


function deleteCourse(index) {

    courses.splice(index, 1);

    saveData();

    renderCourses();
}


function deleteTask(index) {

    tasks.splice(index, 1);

    saveData();

    renderTasks();
}


function toggleTask(index) {

    tasks[index].completed =
        !tasks[index].completed;

    saveData();

    renderTasks();
}


renderCourses();
renderTasks();