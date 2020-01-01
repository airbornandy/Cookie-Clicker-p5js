// Create variables
let gui;
let cookieButton;
let cookies;
let shopPrices;

function setup() {
    createCanvas(800, 800);
    gui = createGui();

    cookies = 0;

    shopPrices = {
        cursor: 15,
        grandma: 100,
        farm: 1100,
        mine: 12000,
        factory: 130000,
        bank: 1400000,
        temple: 20000000,
        wizardTower: 330000000,
        shipment: 51000000000,
        alchemyLab: 75000000000,
        portal: 1000000000000,
        timeMachine: 14000000000000,
        antimatterCondenser: 170000000000000,
        prism: 21000000000000000,
        chancemaker: 26000000000000000,
        fractalEngine: 310000000000000000,
        javascriptConsole: 71000000000000000000
    }

    cookieButton = createButton("Cookie", 100, 150, 200, 200);

}

function draw() {
    background(127);
    drawGui();

    textSize(50)
    text(`Cookies: ${cookies}`, 80, 100)

    if (cookieButton.isPressed) {
        cookies += 1;
    }


}