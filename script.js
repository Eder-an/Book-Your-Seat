const seatMap = document.getElementById('seat-map');
const rows = 10;
const cols = 10;

// Generate seats
for (let i = 0; i < rows * cols; i++) {
  const seat = document.createElement('div');
  seat.classList.add('seat');
  
  // Simulate occupied seats randomly
  if (Math.random() < 0.2) {
    seat.classList.add('occupied');
  }

  seat.addEventListener('click', () => {
    if (!seat.classList.contains('occupied')) {
      seat.classList.toggle('selected');
    }
  });

  seatMap.appendChild(seat);
}

// Dynamic Controls Example
function adjustControls() {
  const confirmBtn = document.getElementById('confirm-btn');
  if (window.innerWidth < 480) {
    confirmBtn.textContent = 'Confirm';
  } else {
    confirmBtn.textContent = 'Confirm Selection';
  }
}

window.addEventListener('resize', adjustControls);
adjustControls();
