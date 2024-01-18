window.onload = function() {
    var text = "You're your own kind of beautiful ❤️";
    var i = 0;
    var speed = 100; // Adjust as needed

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typed-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
};
