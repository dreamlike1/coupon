function calculateExpiryDate() {
    const selectedDate = $('#expiry-date').val();
    const daysToAdd = parseInt($('#text-input').val(), 10) || 0; // Default to 0 if not a number

    if (selectedDate) {
        const expiryDate = new Date(selectedDate);
        expiryDate.setDate(expiryDate.getDate() + daysToAdd);

        if ($('#remove-day').is(':checked')) {
            expiryDate.setDate(expiryDate.getDate() - 1); // Remove one day
        }

        const formattedResult = formatDate(expiryDate);
        $('#read-only-field').val(formattedResult);
    } else {
        alert('Please select a valid expiry date.');
    }
}

function formatDate(date) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${monthName} ${day}, ${year}`;
}
