// Document ready function to ensure the DOM is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {

    // Modal functionality
    const modal = document.getElementById('myModal');
    const openModalBtn = document.querySelector('.open-modal-btn');
    const closeModalBtn = document.getElementsByClassName('close')[0];

    // Open the modal
    openModalBtn.onclick = function() {
        modal.style.display = 'block';
    };

    // Close the modal
    closeModalBtn.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Appointment booking form validation
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        // Basic validation
        if (!name || !date || !time) {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate a successful booking
        alert(`Appointment booked for ${name} on ${date} at ${time}.`);
        bookingForm.reset(); // Reset form fields
        modal.style.display = 'none'; // Close modal after booking
    });

    // Smooth scrolling for internal links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    // Example function to fetch and display doctors dynamically
    function loadDoctors() {
        const doctorsContainer = document.getElementById('doctorsContainer');
        const doctors = [
            { name: 'Dr. John Doe', specialty: 'Cardiology', image: 'doctor1.jpg' },
            { name: 'Dr. Jane Smith', specialty: 'Pediatrics', image: 'doctor2.jpg' },
            { name: 'Dr. Emily Johnson', specialty: 'Orthopedics', image: 'doctor3.jpg' }
        ];

        doctors.forEach(doctor => {
            const doctorCard = document.createElement('div');
            doctorCard.className = 'doctor-card';
            doctorCard.innerHTML = `
                <img src="${doctor.image}" alt="${doctor.name}" />
                <h3>${doctor.name}</h3>
                <p>${doctor.specialty}</p>
                <button class="open-modal-btn">Book Appointment</button>
            `;
            doctorsContainer.appendChild(doctorCard);
        });
    }

    // Load doctors on page load
    loadDoctors();
});
