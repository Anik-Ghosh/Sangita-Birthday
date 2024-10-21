// Set the date for the next birthday
const birthdayDate = new Date('2024-10-26T00:00:00').getTime();

const countdownContainer = document.getElementById('countdown-container');
const birthdayMessageContainer = document.getElementById('birthday-message-container');
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    if (distance > 0) {
        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        countdownElement.innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;
    } else {
        // If the countdown is finished, show the birthday message
        countdownContainer.classList.add('hidden');
        birthdayMessageContainer.classList.remove('hidden');
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
