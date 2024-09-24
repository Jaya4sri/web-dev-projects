document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('attendance-form');
    const attendanceTableBody = document.querySelector('#attendance-table tbody');

    // Load attendance records from localStorage
    loadAttendance();

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const status = document.getElementById('status').value;

        // Create attendance record object
        const record = { name, date, status };

        // Save to localStorage
        saveAttendance(record);

        // Clear the form
        form.reset();
    });

    function saveAttendance(record) {
        let attendanceRecords = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
        attendanceRecords.push(record);
        localStorage.setItem('attendanceRecords', JSON.stringify(attendanceRecords));

        // Update the table
        appendRecordToTable(record);
    }

    function loadAttendance() {
        const attendanceRecords = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
        attendanceRecords.forEach(record => {
            appendRecordToTable(record);
        });
    }

    function appendRecordToTable(record) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.name}</td>
            <td>${record.date}</td>
            <td>${record.status}</td>
        `;
        attendanceTableBody.appendChild(row);
    }
});
