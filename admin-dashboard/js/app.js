const screenPaths = {
  dashboard: '../overview/dashboard.html',
  users: '../management/users.html',
  courses: '../management/courses.html',
  content: '../management/content.html',
  videos: '../management/videos.html',
  activities: '../learning/activities.html',
  homework: '../learning/homework.html',
  payments: '../finance/payments.html',
  certificates: '../finance/certificates.html',
  notifications: '../system/notifications.html',
  categories: '../system/categories.html',
  settings: '../system/settings.html',
};

function showScreen(screenId) {
  const path = screenPaths[screenId];
  if (path) window.location.href = path;
}

// Tab switching (used on users, homework, payments, certificates pages)
function switchTab(clickedTab, tabContentId) {
  const tabGroup = clickedTab.parentElement;
  tabGroup.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  clickedTab.classList.add('active');

  const parentScreen = clickedTab.closest('.screen');
  parentScreen.querySelectorAll('.tab-content').forEach(content => {
    content.style.display = 'none';
  });

  document.getElementById(tabContentId).style.display = 'block';
}

// Activity type selection (used on activities page)
function selectActivityType(card, type) {
  document.querySelectorAll('.activity-type-card').forEach(c => c.classList.remove('active'));
  card.classList.add('active');

  document.getElementById('flashcards-builder').style.display = 'none';
  document.getElementById('quiz-builder').style.display = 'none';
  document.getElementById('dragdrop-builder').style.display = 'none';

  document.getElementById(type + '-builder').style.display = 'block';
}
