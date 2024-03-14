const markAll_Btn = document.querySelector('header button');

markAll_Btn.addEventListener('click', markAllAsRead);

function markAllAsRead() {
    const notifications = document.querySelectorAll('article');
    notifications.forEach(notification => {
        notification.classList.add('read');
    });
    setNotificationToZero();
}

function setNotificationToZero() {
    const notificationCount = document.querySelector('h1 span');
    notificationCount.textContent = '0';
}