fetch('/system-info')
    .then(response => response.json())
    .then(data => {
        document.getElementById('hostname').textContent = data.hostname;
        document.getElementById('ip').textContent = data.ip;
    })
    .catch(error => console.error('Error :', error));
