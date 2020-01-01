// Create variables
let gui;
let cookieButton;
let cookies;
let shopPrices;
let baseShopPrices
let cursor, grandma, farm, mine, factory, bank, temple, wizardTower, shipment, alchemyLab, portal, timeMachine, antimatterCondenser, prism, chancemaker, fractalEngine, javascriptConsole;
let cursorA, grandmaA, farmA, mineA, factoryA, bankA, templeA, wizardTowerA, shipmentA, alchemyLabA, portalA, timeMachineA, antimatterCondenserA, prismA, chancemakerA, fractalEngineA, javascriptConsoleA;

function setup() {
    createCanvas(800, 800);
    gui = createGui();

    cookies = 0;

    cursorA = 0
    grandmaA = 0;
    farmA = 0;
    mineA = 0;
    factoryA = 0;
    bankA = 0;
    templeA = 0;
    wizardTowerA = 0;
    shipmentA = 0;
    alchemyLabA = 0;
    portalA = 0;
    timeMachineA = 0;
    antimatterCondenserA = 0;
    prismA = 0;
    chancemakerA = 0;
    fractalEngineA = 0;
    javascriptConsoleA = 0;

    // Create Prices
    baseShopPrices = {
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
        prism: 21000000000000000n,
        chancemaker: 26000000000000000n,
        fractalEngine: 310000000000000000n,
        javascriptConsole: 71000000000000000000n
    }

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
        prism: 21000000000000000n,
        chancemaker: 26000000000000000n,
        fractalEngine: 310000000000000000n,
        javascriptConsole: 71000000000000000000n
    }


    // Create Buttons
    cookieButton = createButton("Cookie", 100, 150, 200, 200);

    cursor = createButton(`Cursor               ${shopPrices.cursor}`, 590, 100, 200, 50);
    grandma = createButton(`Grandma         ${shopPrices.grandma}`, 590, 150, 200, 50);



}

function draw() {
    background(127);
    drawGui();

    textSize(50)
    text(`Cookies: ${cookies}`, 80, 100)

    if (cookieButton.isPressed) {
        cookies += 1;
    }

    if (cursor.isPressed) {
        if (cookies >= shopPrices.cursor) {
            shopPrices.cursor = Math.ceil(baseShopPrices.cursor * Math.pow(1.15, Math.max(0, cursorA)));
            cursorA += 1;
            cursor = createButton(`Cursor               ${shopPrices.cursor}`, 590, 100, 200, 50);
            cookies -= shopPrices.cursor;
        } else {
            console.log('Not enough cookies');
        }
    }

}