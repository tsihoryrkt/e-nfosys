fetch('/system-info')
    .then(response => response.json())
    .then(data => {

        // Hostname & IP
        document.getElementById('hostname').textContent = data.hostname;
        document.getElementById('ip').textContent = data.ip;

        // Docker status
        const box = document.getElementById("docker-status-box");
        const text = document.getElementById("docker-status-text");
        const desc = document.getElementById("docker-description");

        if (data.docker === true) {
            box.classList.add("border-green-100", "bg-green-50", "text-green-600");
            text.textContent = "Running";
            desc.textContent = "Running inside Docker container.";
        } else {
            box.classList.add("border-red-100", "bg-red-50", "text-red-600");
            text.textContent = "Not Running";
            desc.textContent = "Application is not running inside Docker.";
        }

    })
    .catch(error => console.error('Error :', error));
