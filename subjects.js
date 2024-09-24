// Sample list of subjects
const subjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "History",
    "English Literature"
];

// Function to display the list of subjects
function displaySubjects() {
    const subjectsList = document.getElementById('subjectsList');

    subjects.forEach(subject => {
        const li = document.createElement('li');
        li.textContent = subject;
        subjectsList.appendChild(li);
    });
}

// Call the function to display subjects on page load
displaySubjects();

