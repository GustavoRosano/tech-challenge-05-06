const form = document.getElementById('group-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const names = Array.from(form.querySelectorAll('input[name="name"]'))
    .map(input => input.value.trim())
    .filter(name => name !== '');

  const message = form.querySelector('textarea[name="message"]').value.trim();

  const payload = { names, message };

  try {
    const response = await fetch('https://fsdt-contact.onrender.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      alert('Formulário enviado com sucesso!');
      form.reset();
    } else {
      alert('Erro ao enviar formulário. Tente novamente.');
    }
  } catch (error) {
    alert('Erro de conexão. Verifique sua internet.');
    console.error(error);
  }
});
