document.getElementById('mail').addEventListener('click', function () {
    var link = "mailto:ashikurrahmanbhuiyan@gmail.com"
        + "?cc=" + encodeURIComponent(document.getElementById('email').value)
        + "&subject=" + encodeURIComponent("From " + document.getElementById('name').value)
        + "&body=" + encodeURIComponent(document.getElementById('myText').value);
    window.location.href = link;
    alert('Your message has been sent. Thank you!');
});