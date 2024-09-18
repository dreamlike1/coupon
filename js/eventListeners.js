$(document).ready(function() {
    // Initialize the calendar for #type_calendar
    $('#type_calendar').calendar({
        type: 'date',
        initialDate: new Date(),
        text: {
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            today: 'Today',
            now: 'Now'
        },
        inline: false,
        monthFirst: false,
        popupOptions: {
            position: 'top right'
        }
    });

    // Attach click event to the submit button
    $('.ui.button.primary').click(calculateExpiryDate);

    // Attach click event to the result text field to copy text
    $('#read-only-field').click(function() {
        // Copy the text to the clipboard
        const text = $(this).val();
        navigator.clipboard.writeText(text).then(() => {
            // Show toast notification
            showToast(`Copied: ${text}`);
        });
    });
});

// Function to show Fomantic UI toast notification
function showToast(message) {
    $.toast({
        class: 'success',
        message: message,
        position: 'top right',
        showIcon: 'check',
        hideAfter: 3000 // Auto-hide after 3 seconds
    });
}
