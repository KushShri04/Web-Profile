function playVideo(projectId) {
  // You can replace this with the actual video link or embed code
  // For now, let's just alert a message
  alert("Video for project " + projectId);
}
function showMoreProjects() {
  var hiddenProjects = document.querySelector('.hidden-projects');
  hiddenProjects.classList.toggle('show');
}

function viewAchievement(achievementId) {
  // You can replace this with the actual implementation to view the achievement
  alert("View achievement " + achievementId);
}
document.getElementById('showMoreProjects').addEventListener('click', function() {
  document.getElementById('hiddenProjects').classList.toggle('hidden');
});
