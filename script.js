const scriptURL = 'https://script.google.com/macros/s/AKfycbxTLjlomN6rCzn1cJNieIVU5DUhWm0JXeo1KBSxoW2uL6vYfOz_xnMroLlxpwmkqK5N/exec';

const form = document.getElementById('jobForm') || document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  const submitButton = form.querySelector('button[type="submit"]');
  if(submitButton) submitButton.disabled = true;

  fetch(scriptURL, { 
    method: 'POST', 
    body: new FormData(form)
  })
  .then(response => {
    alert("Application Submitted Successfully!");
    form.reset();
    if(submitButton) submitButton.disabled = false;
  })
  .catch(error => {
    console.error('Error!', error.message);
    alert("Submission failed. Please try again.");
    if(submitButton) submitButton.disabled = false;
  });
});
