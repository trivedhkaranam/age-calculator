document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dob = new Date(document.getElementById('dob').value);
    const now = new Date();

    if (dob > now) {
        document.getElementById('result').innerText = 'Please enter a valid date of birth.';
        return;
    }

    const ageInMilliseconds = now - dob;
    const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);

    const years = now.getFullYear() - dob.getFullYear();
    const months = now.getMonth() - dob.getMonth();
    const days = now.getDate() - dob.getDate();

    const totalYears = years;
    const totalMonths = months < 0 ? (months + 12) : months; // Adjust if negative
    const totalDaysSinceLastBirthday = days < 0 ? (new Date(now.getFullYear(), now.getMonth(), 0).getDate() + days) : days; // Adjust if negative
    const totalWeeks = ageInWeeks;
    const totalDays = ageInDays; // Corrected line
    const totalHours = ageInHours; // Corrected line
    const totalMinutes = ageInMinutes;
    const totalSeconds = ageInSeconds;

    // Calculate total months passed since the date of birth
    const totalMonthsPassed = (totalYears * 12) + totalMonths;

    // Calculate months passed since last birthday
    const monthsPassedSinceLastBirthday = (now.getMonth() - dob.getMonth() + 12) % 12;

    document.getElementById('result').innerHTML = `
        <p>Age: ${totalYears} years, ${totalMonths} months, ${totalDaysSinceLastBirthday} days</p>
        <p>Total months passed since birth: ${totalMonthsPassed}</p>
       
        <p>Weeks: ${totalWeeks}</p>
        <p>Days: ${totalDays}</p>
        <p>Hours: ${totalHours}</p>
        <p>Minutes: ${totalMinutes}</p>
        <p>Seconds: ${totalSeconds}</p>
    `;
});

// Refresh icon functionality
document.getElementById('refreshButton').addEventListener('click', function() {
    document.getElementById('dob').value = ''; // Clear the date input
    document.getElementById('result').innerHTML = ''; // Clear the result display
});