import cafe_background from './assets/Cafe_background.jpg';

export function loadMenuPage(content) {
    content.innerHTML = `
        <img class="cafe_background" src="${ cafe_background }" alt="cafe_background">
        <main class="menu-container">
        <div class="menu-header">
            <h1>Our Menu</h1>
            <p>Quality brews and warm mornings in Saint Tropez</p>
        </div>

        <!-- Coffee Section -->
        <section class="category">
            <h2 class="category-title">Coffee & Espresso</h2>
            
            <div class="menu-item">
                <div class="item-details">
                    <div class="item-row">
                        <h3 class="item-name">The Gilded Drip</h3>
                        <div class="dots"></div>
                        <span class="item-price">€4.50</span>
                    </div>
                    <p class="item-description">Our signature house blend, locally roasted and freshly brewed.</p>
                </div>
            </div>

            <div class="menu-item">
                <div class="item-details">
                    <div class="item-row">
                        <h3 class="item-name">Café Crème</h3>
                        <div class="dots"></div>
                        <span class="item-price">€5.50</span>
                    </div>
                    <p class="item-description">Rich espresso topped with velvety steamed milk.</p>
                </div>
            </div>

            <div class="menu-item">
                <div class="item-details">
                    <div class="item-row">
                        <h3 class="item-name">Double Espresso</h3>
                        <div class="dots"></div>
                        <span class="item-price">€3.50</span>
                    </div>
                    <p class="item-description">A robust, concentrated shot of our finest dark roast.</p>
                </div>
            </div>

            <div class="menu-item">
                <div class="item-details">
                    <div class="item-row">
                        <h3 class="item-name">Vanilla Bean Latte</h3>
                        <div class="dots"></div>
                        <span class="item-price">€6.00</span>
                    </div>
                    <p class="item-description">Espresso, steamed milk, and natural Madagascar vanilla syrup.</p>
                </div>
            </div>
        </section>

        <!-- Breakfast Section -->
        <section class="category">
            <h2 class="category-title">Breakfast & Pastries</h2>
            
            <div class="menu-item">
                <div class="item-details">
                    <div class="item-row">
                        <h3 class="item-name">Butter Croissant</h3>
                        <div class="dots"></div>
                        <span class="item-price">€3.50</span>
                    </div>
                    <p class="item-description">Flaky, golden pastry baked fresh every morning.</p>
                </div>
            </div>

            <div class="menu-item">
                <div class="item-details">
                    <div class="item-row">
                        <h3 class="item-name">Pain au Chocolat</h3>
                        <div class="dots"></div>
                        <span class="item-price">€4.00</span>
                    </div>
                    <p class="item-description">Classic French pastry filled with rich dark chocolate.</p>
                </div>
            </div>

            <div class="menu-item">
                <div class="item-details">
                    <div class="item-row">
                        <h3 class="item-name">Riviera Avocado Toast</h3>
                        <div class="dots"></div>
                        <span class="item-price">€12.50</span>
                    </div>
                    <p class="item-description">Smashed avocado, cherry tomatoes, and olive oil on artisanal sourdough.</p>
                </div>
            </div>

            <div class="menu-item">
                <div class="item-details">
                    <div class="item-row">
                        <h3 class="item-name">Gilded Breakfast Bowl</h3>
                        <div class="dots"></div>
                        <span class="item-price">€11.00</span>
                    </div>
                    <p class="item-description">Greek yogurt topped with organic granola, local honey, and fresh berries.</p>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <p>&copy; 2026 The Gilded Bean, Saint Tropez. All rights reserved.</p>
    </footer>
    `;
};