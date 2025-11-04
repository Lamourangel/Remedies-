window.onload = () => {
  document.body.classList.add('blue-mode');
};

function navigate(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

function toggleMode() {
  const body = document.body;

  if (body.classList.contains('blue-mode')) {
    body.classList.remove('blue-mode');
    body.classList.add('gray-mode');
  } else if (body.classList.contains('gray-mode')) {
    body.classList.remove('gray-mode');
    body.classList.add('blue-mode');
  } else {
    body.classList.add('blue-mode'); // default start
  }
}


  const form = document.getElementById('commentForm');
  const commentList = document.getElementById('commentList');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const comment = document.getElementById('comment').value.trim();

    if (name && comment) {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${name}</strong>: ${comment}`;
      commentList.appendChild(li);

      form.reset();
    }
  });


function validateForm() {
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('form-feedback');

  if (!email || !message) {
    feedback.textContent = "Please fill in all fields.";
    feedback.style.color = "red";
    return false;
  }

  feedback.textContent = "Message sent successfully!";
  feedback.style.color = "green";
  return false; // Prevent actual submission for demo
}