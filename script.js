document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Generate Resume HTML
    const resumeOutput = `
        <h2>${name}</h2>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Address:</strong> ${address}</p>

        <div class="section">
            <h3>Education</h3>
            <p>${education.replace(/\n/g, '<br>')}</p>
        </div>

        <div class="section">
            <h3>Experience</h3>
            <p>${experience.replace(/\n/g, '<br>')}</p>
        </div>

        <div class="section">
            <h3>Skills</h3>
            <p>${skills.replace(/\n/g, '<br>')}</p>
        </div>
    `;

    // Display the resume
    document.getElementById('resumeOutput').innerHTML = resumeOutput;
});