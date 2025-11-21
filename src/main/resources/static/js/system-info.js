fetch('/system-info')
    .then(response => response.json())
    .then(data => {
        document.getElementById('hostname').textContent = data.hostname;
        document.getElementById('ip').textContent = data.ip;

        const box = document.getElementById("docker-status-box");
        const text = document.getElementById("docker-status-text");
        const desc = document.getElementById("docker-description");

        if (data.docker === true) {
            box.classList.add("status-running");
            text.textContent = "Running";
            desc.textContent = "Running inside Docker container.";
        } else {
            box.classList.add("status-not-running");
            text.textContent = "Not Running";
            desc.textContent = "Application is not running inside Docker.";
        }

        const k8sBox = document.getElementById("k8s-status-box");
        const k8sText = document.getElementById("k8s-status-text");
        const k8sDesc = document.getElementById("k8s-description");

        if (data.kubernetes === true) {
            k8sBox.classList.add("status-running");
            k8sText.textContent = "Running";
            k8sDesc.textContent = "Running inside a Kubernetes pod.";
        } else {
            k8sBox.classList.add("status-not-running");
            k8sText.textContent = "Not Running";
            k8sDesc.textContent = "Application is not running inside Kubernetes.";
        }

        document.getElementById('app-version').textContent = data.appversion;
    })
    .catch(error => console.error('Error :', error));