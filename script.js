window.onload = () => {
  document.body.classList.add('blue-mode');
};

function navigate(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

https://natural-remedies-comments-default-rtdb.europe-west1.firebasedatabase.app/
:
null

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

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('commentForm');
  const commentList = document.getElementById('commentList');

  // Load comments from Firebase if available, otherwise from localStorage
  if (window.firebase && firebase.database) {
    firebase.database().ref('comments').on('child_added', function (snapshot) {
      const data = snapshot.val();
      const li = document.createElement('li');
      li.innerHTML = `<strong>${data.name}</strong>: ${data.comment}`;
      commentList.appendChild(li);
    });
  } else {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    savedComments.forEach(function (c) {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${c.name}</strong>: ${c.comment}`;
      commentList.appendChild(li);
    });
  }

  // Save new comment (to Firebase if available, otherwise to localStorage)
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const comment = document.getElementById('comment').value.trim();

    if (name && comment) {
      if (window.firebase && firebase.database) {
        firebase.database().ref('comments').push({
          name: name,
          comment: comment
        });
      } else {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${name}</strong>: ${comment}`;
        commentList.appendChild(li);

        const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
        savedComments.push({ name, comment });
        localStorage.setItem('comments', JSON.stringify(savedComments));
      }

      form.reset();
    }
  });
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
