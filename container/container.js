class SpecialContainer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <div class="container">
        <div>
            <h1>Website design</h1>
            <p>Welcome to our website. Here you can find various resources and information.</p>
            <p>Feel free to explore and learn more about what we offer.</p>

            <p>We hope you enjoy your stay.</p>
           
        </div>
    </div>`
    }
}
customElements.define('special-container', SpecialContainer);