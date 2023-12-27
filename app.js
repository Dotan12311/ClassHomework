// app.js

let currentUser = null;

function login() {
    const username = document.getElementById("username").value;
    const users = getUsers();

    const user = users.find(u => u.username === username);

    if (user) {
        currentUser = user;
        alert("Login successful!");
    } else {
        alert("Invalid username.");
    }
}

function postHomework() {
    const users = getUsers();

    if (currentUser && currentUser.permissions === 1) {
        const subject = document.getElementById("subject").value;
        const dueDate = document.getElementById("dueDate").value;
        const homeworkContent = document.getElementById("homeworkInput").value;

        const newHomework = {
            "subject": subject,
            "dueDate": dueDate,
            "content": homeworkContent
        };

        const homeworkList = getHomework();
        homeworkList.push(newHomework);

        // Save the updated homework list
        saveHomework(homeworkList);

        alert("Homework posted successfully!");
    } else {
        alert("You don't have permission to post homework.");
    }
}

function revealHomework() {
    const users = getUsers();

    if (currentUser) {
        // Logic to fetch and display homework (you can use localStorage or fetch from a server).
        const homeworkContent = "Assignment due to date: [Due Date]";
        document.getElementById("homeworkContent").innerText = homeworkContent;
        document.getElementById("homeworkContent").style.display = "block";
    } else {
        alert("You don't have permission to reveal homework.");
    }
}

function getUsers() {
    // Fetch users from the JSON file (you may need to use a server in a real-world scenario)
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "users.json", false);
    xhr.send();
    return JSON.parse(xhr.responseText);
}

function getHomework() {
    // Fetch homework from the JSON file (you may need to use a server in a real-world scenario)
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "homework.json", false);
    xhr.send();
    return JSON.parse(xhr.responseText);
}

function saveHomework(homeworkList) {
    // Save homework to localStorage
    localStorage.setItem("homework", JSON.stringify(homeworkList));
      }
