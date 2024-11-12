// Tab Functionality
function openTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-button');

  // Hide all tab contents and remove active class from buttons
  tabs.forEach(tab => tab.classList.remove('active'));
  buttons.forEach(button => button.classList.remove('active'));

  // Show selected tab content and add active class to clicked button
  document.getElementById(tabName).classList.add('active');
  event.currentTarget.classList.add('active');
}

// Modal Functionality
function openAboutModal() {
  document.getElementById('aboutModal').style.display = 'flex';
}

function closeAboutModal() {
  document.getElementById('aboutModal').style.display = 'none';
}

// Close modal when clicking outside the content
window.onclick = function(event) {
  const modal = document.getElementById('aboutModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};


// Gallery 
// Function to open the image modal with details
function openImageModal(title, artist, imageSrc) {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalArtist').innerText = `By ${artist}`;
  document.getElementById('modalImage').src = imageSrc;
  document.getElementById('imageModal').style.display = 'flex';
}

// Function to close the image modal
function closeImageModal() {
  document.getElementById('imageModal').style.display = 'none';
}

// active
// Function to set the active link based on the current page URL
function setActiveLink() {
  const navLinks = document.querySelectorAll('nav ul li a');
  const currentPath = window.location.pathname.split('/').pop(); // Get current page file name

  navLinks.forEach(link => {
    // Extract the href value of each link, and add "active" if it matches the current page
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
}

// Run the function once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setActiveLink);


// modal for history 
// Function to open the About modal
function openAboutModal() {
  document.getElementById('aboutModal').style.display = 'block';
}

// Function to close the About modal
function closeAboutModal() {
  document.getElementById('aboutModal').style.display = 'none';
}

// Function to open the History modal
function openHistoryModal() {
  document.getElementById('historyModal').style.display = 'block';
}

// Function to close the History modal
function closeHistoryModal() {
  document.getElementById('historyModal').style.display = 'none';
}

// Close modals when clicking outside of them
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    closeAboutModal();
    closeHistoryModal();
  }
}
// Function to open the History modal
function openHistoryModal() {
  document.getElementById('historyModal').style.display = 'block';
}

// Function to close the History modal
function closeHistoryModal() {
  document.getElementById('historyModal').style.display = 'none';
}


// audio
