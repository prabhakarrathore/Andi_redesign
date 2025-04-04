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
            <div class="trigger-buttons">
                <button id="toggleMenu3">Menu</button>
            </div>
        </nav>

    <nav id="mobile-menu-3" class="mobile-menu menu-style-3">
        <div class="menu-header">
            <button class="close-btn" data-target="mobile-menu-3">×</button>
        </div>
        <ul class="menu-links">
          <li><a href="./index.html">Home</a></li>
                <li><a href="./proSev.html">Products & Services</a></li>
                <li><a href="./digiMarket.html">Digital Marketing</a></li>
                <li><a href="./cloudSoft.html">Cloud Software</a></li>
                <li><a href="./partner.html">Our Partners</a></li>
                <li><a href="./clients.html">Our Clients</a></li>
                <li><a href="./contacts.html">Contact Us</a></li>
        </ul>
        
    </nav>
    </header>
        `;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    // Get all trigger buttons and menus
    const toggleButtons = document.querySelectorAll('.trigger-buttons button');
    const mobileMenus = document.querySelectorAll('.mobile-menu');
    const closeButtons = document.querySelectorAll('.mobile-menu .close-btn');

    // Function to close all menus
    const closeAllMenus = () => {
        mobileMenus.forEach(menu => menu.classList.remove('active'));
    };

    // Add event listeners to trigger buttons
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const menuId = button.id.replace('toggleMenu', 'mobile-menu-'); // e.g., toggleMenu1 -> mobile-menu-1
            const targetMenu = document.getElementById(menuId);

            if (targetMenu) {
                // Close other menus before opening a new one
                closeAllMenus();
                // Toggle the target menu
                targetMenu.classList.add('active');
            }
        });
    });

    // Add event listeners to close buttons within menus
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetMenuId = button.getAttribute('data-target');
            const targetMenu = document.getElementById(targetMenuId);
            if (targetMenu) {
                targetMenu.classList.remove('active');
            }
            // Alternatively, just close all menus:
            // closeAllMenus();
        });
    });

    // Optional: Close menu if clicking outside of it
    document.addEventListener('click', (event) => {
        // Check if the click is outside any active menu and not on a toggle button
        const isClickInsideMenu = Array.from(mobileMenus).some(menu => menu.contains(event.target) && menu.classList.contains('active'));
        const isClickOnToggleButton = Array.from(toggleButtons).some(button => button.contains(event.target));

        if (!isClickInsideMenu && !isClickOnToggleButton) {
            closeAllMenus();
        }
    });

});
customElements.define('special-head', SpecialHead);