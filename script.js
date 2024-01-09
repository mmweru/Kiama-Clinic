document.addEventListener("DOMContentLoaded", function () {
    const tipsCarousel = document.getElementById('tipsCarousel');

    // Use your Twitter API credentials
    

    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + accessToken);

    // Set the search query for beauty tips and skincare
    const searchQuery = 'beauty OR "skin care" OR "stretch marks"';

    // Example code using the Fetch API with authentication and search query:
    fetch(`https://api.twitter.com/2/tweets/search/recent?query=${encodeURIComponent(searchQuery)}`, {
        method: 'GET',
        headers: headers,
    })
        .then(response => response.json())
        .then(data => {
            const tipsContainer = document.querySelector('.tips-carousel');
            
            data.data.forEach(tweet => {
                const tipCard = document.createElement('div');
                tipCard.className = 'tip-card';
                tipCard.textContent = tweet.text;
                tipsContainer.appendChild(tipCard);
            });
        })
        .catch(error => console.error('Error fetching tips:', error));
});

