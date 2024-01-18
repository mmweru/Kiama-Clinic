window.onload = function() {
    var marquee = document.getElementById("marquee");
    var cards = marquee.children;
    var cardWidth = cards[0].offsetWidth;
    var speed = 2; // Adjust as needed
    var i = 0;

    setInterval(function() {
        marquee.style.transform = "translateX(" + (-cardWidth * i) + "px)";
        i = (i + 1) % cards.length;
    }, speed * 1000);
};
