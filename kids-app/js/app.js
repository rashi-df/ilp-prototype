const screenPaths = {
  login: '../auth/login.html',
  register: '../auth/register.html',
  onboarding: '../auth/onboarding.html',
  dashboard: '../dashboard/dashboard.html',
  courses: '../dashboard/courses.html',
  profile: '../dashboard/profile.html',
  'course-detail': '../learning/course-detail.html',
  'module-view': '../learning/module-view.html',
  lesson: '../learning/lesson.html',
  'lesson-progress': '../learning/lesson-progress.html',
  flashcards: '../activities/flashcards.html',
  'drag-drop': '../activities/drag-drop.html',
  quiz: '../activities/quiz.html',
  homework: '../homework/homework.html',
  'homework-feedback': '../homework/homework-feedback.html',
  progress: '../support/progress.html',
  chat: '../support/chat.html',
  certificate: '../support/certificate.html',
  payment: '../support/payment.html',
  'mentor-dashboard': '../mentor/mentor-dashboard.html',
  'mentor-review': '../mentor/mentor-review.html',
};

function showScreen(screenId) {
  const path = screenPaths[screenId];
  if (path) window.location.href = path;
}

// Sync nav dropdown to current page on load
(function initNav() {
  const dropdown = document.getElementById('screenSelector');
  if (!dropdown) return;
  const current = Object.entries(screenPaths).find(([, path]) =>
    window.location.href.endsWith(path.replace('../', ''))
  );
  if (current) dropdown.value = current[0];
})();
