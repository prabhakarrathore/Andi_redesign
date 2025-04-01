class SpacielFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <footer class="footer-div">
        <header class="navbar-bottom">
            <div class="logo-bottom"><img src="../images/logo.jpg" alt="" srcset=""></div>
            <div class="manu-bottom">
                <ul class="menu-bottom-list" id="menu">
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="../proSev/proSev.html">Products & Services</a></li>
                    <li><a href="../digiMarket/digiMarket.html">Digital Marketing</a></li>
                    <li><a href="../cloudSoft/cloudSoft.html">Cloud Software</a></li>
                    <li><a href="#">Our Clients</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div class="icons">
                <a href="https://www.facebook.com/Andi-Software-Solutions-100644611294859/" target="_blank">
                    <i class="fab fa-facebook" style="color:#9aaab6; font-size:1.5rem;"></i>
                </a>
                <a href="https://www.instagram.com/andisoftwaresolutions5/?hl=en" target="_blank">
                    <i class="fab fa-instagram" style="color:#9aaab6; font-size:1.5rem;"></i>
                </a>
                <a href="https://www.youtube.com/channel/UC0mfGwSDteVVWqmggE3MtYQ" target="_blank">
                    <i class="fab fa-youtube" style="color:#9aaab6; font-size:1.5rem;"></i>
                </a>
                <a href="https://in.pinterest.com/andisoftwaresolutions/" target="_blank">
                    <i class="fab fa-pinterest" style="color:#9aaab6; font-size:1.5rem;"></i>
                </a>
                <a href="https://andisoftwaresolutions.tumblr.com/" target="_blank">
                    <i class="fab fa-tumblr" style="color:#9aaab6; font-size:1.5rem;"></i>
                </a>
                <a href="https://www.linkedin.com/company/andisoftwaresolutions" target="_blank">
                    <i class="fab fa-linkedin" style="color:#9aaab6; font-size:1.5rem;"></i>
                </a>
                <a href="https://www.reddit.com/user/ANDIsoftsol" target="_blank">
                    <i class="fab fa-reddit" style="color:#9aaab6; font-size:1.5rem;"></i>
                </a>
                <a href="https://www.flickr.com/people/andi_software_solutions/" target="_blank">
                    <i class="fab fa-flickr" style="color:#9aaab6; font-size:1.5rem;"></i>
                </a>
            </div>
        </header>
    </footer>
        `
    }
}

customElements.define('special-footer', SpacielFooter);