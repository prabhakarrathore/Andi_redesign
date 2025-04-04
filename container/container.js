class SpecialContainer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <div class="collage-container">
        <!-- Item 1: Top Left -->
        

        <!-- Item 2: Top Right -->
        <div class="collage-item item-2">
            <img src="./images/banner2.jpg" alt="Web Site Development with Laptop">
        </div>

        <!-- Item 3: Middle Left (Taller) -->
        <div class="collage-item item-3">
            <img src="./images/banner7.jpg" alt="Web Development Process Cloud">
        </div>

        <!-- Item 4: Middle Right -->
        <div class="collage-item item-4">
            <img src="./images/banner6.jpg" alt="Web Design, Development, Mobile Apps">
        </div>

        <!-- Item 5: Bottom Right -->
        <div class="collage-item item-5">
            <img src="./images/banner1.png" alt="Software Development Concept">
        </div>
    </div>`
    }
}
customElements.define('special-container', SpecialContainer);