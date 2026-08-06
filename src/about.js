import cafe_background from './assets/Cafe_background.jpg';

export function loadAboutPage(content) {
    content.innerHTML = `
        <img class="cafe_background" src="${ cafe_background }" alt="cafe_background">
        <main class="about-container">
        <div class="about-header">
            <h1>Our Story</h1>
            <div class="divider"></div>
        </div>

        <div class="about-content">
            
            <div class="content-section">
                <h2>A Warm Welcome</h2>
                <p>The Gilded Bean in Saint Tropez is more than just a café; it is a great place to meet up with friends over a cup of coffee. We believe that a great day begins with a perfect cup, and we have dedicated ourselves to curating an environment where every visitor feels at home the moment they walk through our doors.</p>
            </div>

            <div class="content-section">
                <h2>Our Philosophy</h2>
                <p>We take pride in serving quality brews and aim to create a warm, welcoming space for every guest. From sourcing the finest beans to mastering the art of the perfect roast, our baristas are passionate about their craft. Whether you are seeking a quiet corner to read or a lively table to catch up with loved ones, The Gilded Bean is designed to be your sanctuary in the city.</p>
            </div>

            <!-- Location and Hours -->
            <div class="info-grid">
                <div class="info-card">
                    <h3>Visit Us</h3>
                    <p>12 Rue des Artisans</p>
                    <p>83990 Saint Tropez, France</p>
                    <p>contact@thegildedbean.com</p>
                </div>
                <div class="info-card">
                    <h3>Hours of Operation</h3>
                    <p><strong>Mon - Fri:</strong> 7:00 AM - 5:00 PM</p>
                    <p><strong>Saturday:</strong> 8:00 AM - 6:00 PM</p>
                    <p><strong>Sunday:</strong> 8:00 AM - 2:00 PM</p>
                </div>
            </div>

        </div>
    </main>

    <footer>
        <p>&copy; 2026 The Gilded Bean, Saint Tropez. All rights reserved.</p>
    </footer>
    `;
};