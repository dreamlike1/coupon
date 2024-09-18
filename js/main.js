import { setupSwitchButton } from './switch/switch.js';

document.addEventListener('DOMContentLoaded', () => {
    const defaultServiceType = 'expressPaid';

    function formatDateToWorded(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }

    function setTodayDate() {
        const today = new Date();
        const formattedDate = formatDateToWorded(today);
        document.getElementById('couponDate').value = formattedDate;
    }
    setTodayDate();
});
