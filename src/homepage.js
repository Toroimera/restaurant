import cafe_background from './assets/Cafe_background.jpg';
import coffe_home from './assets/coffee_home.jpg';

export function loadHomePage(content) {
    content.innerHTML = `
            <img class="cafe_background" src="${ cafe_background }" alt="cafe_background">
            <div class="container">
                <h1>COFEE & BREAKFAST</h1>
                <pre>The Gilded Bean in Saint Tropez, is a great place to meet up
with friends over a cup of coffee.
We take pride in serving quality brews and aim to create
a warm, welcoming space for every guests.
                </pre>
                <img class="coffee_home" src="${ coffe_home }">
                <button>What will you Order?</button>
                <div class="info">
                    <span>CALL :</span>
                    <a class="link">+33 6 22 33 44 55</a>

                    <span>MAIL :</span>
                    <a class="link">Gilded@gmail.com</a>

                    <span>INSTA :</span>
                    <a class="link">@gildedbean</a>
                </div>
                <div class="location">
                    <p>Vist Us At :</p>
                    <br>
                    <p class="link">Q2GV+Q8X Mosquero, New Mexico, USA</p>
                </div>
            </div>
    `;
};
