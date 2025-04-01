class SpecialHead extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <header class="navbar">
        <nav class="nav-container">
         <div class="logo"><img src="../images/logo.jpg" alt="" srcset=""></div>
            <ul class="nav-links">
                <li><a href="https://andisoftwaresolutions.com/">Toll Free Panel </a></li>
                <li><a href="https://dbssms.in/login.php">Voice call  Panel </a></li>
                <li><a href="https://andisoftwaresolutions.com/">SMS Panel</a></li>
                <li><a href="https://sms.dbssms.in/">Whatsapp Panel</a></li>
                <li><a href="https://andisoftwaresolutions.com/payment.php">Payment</a></li>
            </ul>
            <button class="menu-btn" onclick="toggleMenu()">
                <span class="menu-icon">&#9776;</span>
                Menu
            </button>
        </nav>
        <div class="menu-container">
            <ul class="menu-list" id="menu">
                <li><a href="./index.html"> - Home</a></li>
                <li><a href="./proSev.html"> - Products & Services</a></li>
                <li><a href="./digiMarket.html"> - Digital Marketing</a></li>
                <li><a href="./cloudSoft.html"> - Cloud Software</a></li>
                <li><a href="./partner.html"> - Our Partners</a></li>
                <li><a href="./clients.html"> - Our Clients</a></li>
                <li><a href="./contacts.html"> - Contact Us</a></li>
            </ul>
        </div>
    </header>
        `;
    }
}

function toggleMenu() {
    if (document.getElementById("menu").classList.contains("show")) {
        document.getElementById("menu").classList.remove("show");
        document.getElementById("menu").classList.add("hide");
        document.querySelector('.navbar').classList.remove("bg")
    } else {
        document.getElementById("menu").classList.remove("hide");
        document.getElementById("menu").classList.add("show");
        document.querySelector('.navbar').classList.add("bg")
    }
}

const scrollThreshold = 10;

// Function to change navbar background color on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
        document.querySelector('.navbar').classList.add('scrolled');
    } else {
        document.querySelector('.navbar').classList.remove('scrolled');
    }
});
customElements.define('special-head', SpecialHead);