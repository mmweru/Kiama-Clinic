// main.js

function loadContent(section) {
    const contentContainer = document.getElementById('content-container');
    const fileName = section + '.html';

    fetch(fileName)
        .then(response => response.text())
        .then(data => {
            contentContainer.innerHTML = data;
            // Initialize animations or any other logic for the loaded content
            initializeContent();

            // Load associated CSS file dynamically
            loadCSS(section);

            // Load associated JavaScript file dynamically
            loadJS(section);
        })
        .catch(error => console.error('Error loading content:', error));
}

function loadJS(section) {
    const script = document.createElement('script');
    script.src = section + '.js';
    document.body.appendChild(script);
}

// Your existing JavaScript code for animations goes here
