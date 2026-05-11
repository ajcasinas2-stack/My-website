# My-website
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My May Project</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>My Project Website</h1>
    <p>By: Aj casiñas</p>
    <button onclick="toggleDarkMode()">🌙 Dark Mode</button>
</header>

<nav>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#gallery">Gallery</a>
    <a href="#contact">Contact</a>
</nav>

<section id="about" class="fade">
    <h2>About Me</h2>
    <p>I am an ICT student. This is my upgraded May project website with animations and design.</p>
</section>

<section id="projects" class="fade">
    <h2>My Projects</h2>

    <div class="card">
        <h3>Website Project</h3>
        <p>This project shows my skills in HTML, CSS, and JavaScript.</p>
    </div>

    <div class="card">
        <h3>Future Project</h3>
        <p>More projects coming soon!</p>
    </div>

</section>

<section id="gallery" class="fade">
    <h2>Gallery</h2>

    <div class="gallery">
        <img src="https://via.placeholder.com/200">
        <img src="https://via.placeholder.com/200">
        <img src="https://via.placeholder.com/200">
    </div>
</section>

<section id="contact" class="fade">
    <h2>Contact</h2>
    <p>Email: yourname@email.com</p>
    <button onclick="showMessage()">Say Hello</button>
</section>

<footer>
    <p>© 2026 My Website</p>
</footer>

<script src="script.js"></script>
</body>
</html>
