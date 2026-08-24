const scriptURL = 'https://script.google.com/macros/s/AKfycbyIpodsU2IEm9eeEgVoFyRxvPiOpU4uY1_MtJDcfShOekMcpjBi9W2_PZYg5yF91SLr/exec';

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  const submitButton = form.querySelector('button[type="submit"]');
  if (submitButton) submitButton.disabled = true;

  const formData = new FormData();
  
  Array.from(form.elements).forEach(el => {
    if (el.name && el.type !== 'file') {
      formData.append(el.name, el.value);
    }
  });

  fetch(scriptURL, { 
    method: 'POST',
    mode: 'no-cors',
    body: formData
  })
  .then(() => {
    alert("Application Submitted Successfully!");
    form.reset();
    if (submitButton) submitButton.disabled = false;
  })
  .catch(error => {
    console.error('Error!', error.message);
    alert("Submission failed. Please try again.");
    if (submitButton) submitButton.disabled = false;
  });
});
