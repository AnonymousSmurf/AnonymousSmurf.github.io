// Variables
// resources
var numGold = 29;
var numHealth = 100;
var numEnergy = 100;
var numHunger = 100;
var numFood = 0;
var numMedicine = 0;

// sleep
var amountEnergy = 100;

// day - time
var tempTime = 0;
var numTime = "";
var numDay = 0;

// rent
var goldRent = 10;
var rentDay = 0;

// mining
var mineFail = 10;
var costMining = 25;
var xpMining = "";
var tempMining = 0;
var lvlMining = 0;

// fishing
var chanceFish = 30;
var costFishing = 10;
var xpFishing = "";
var tempFishing = 0;
var lvlFishing = 0;
var fishingPole = "Fishing pole 50$";
var skillFishing = "Requires fishing pole"

// skill unlocks
learnfishing = false;


// Make random number
function getRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}


// Recources
// Increase golds
$("#work-mine").on("click", function () {
    if (Math.random() * 100 < mineFail) {
        numHealth -= getRandom(10, 30);
    } else {
        numGold += getRandom(1, 5) + lvlMining;
        tempMining += 10 - lvlMining;
    }
    numEnergy -= costMining;
    numHunger -= costMining / 2;
    tempTime++;
});

$("#work-fish").on("click", function () {

    if (Math.random() * 100 < chanceFish / 2){
        numFood += getRandom(2, 3);
    } else if (Math.random() * 100 < chanceFish){
        numFood++;
    } else {
        alert("You caugth nothing")
    }

    numEnergy -= costFishing;
    numHunger -= costFishing / 2;
    tempFishing += 10 - lvlFishing;
    tempTime++;
})

// character
// increase energy
$("#produce-energy").on("click", function () {
    numEnergy = amountEnergy;
    tempTime++;
})

$("#produce-hunger").on("click", function () {
    numFood--;
    numHunger = 100;
    numTime++;
})

$("#produce-medicine").on("click", function () {
    numMedicine--;
    numHealth = 100;
})

// Market
// buy
$("#get-food").on("click", function () {
    numGold -= 10;
    numFood++;
})

$("#learn-fishing").on("click", function () {
    numGold -= 50;
    learnfishing = true;
    fishingPole = "Sold out";
    skillFishing = "Try to fish";
})

$("#get-medicine").on("click", function () {
    numGold -= 15;
    numMedicine++;
})

// Sell
$("#sell-food").on("click", function () {
    numGold += 6;
    numFood--;
})

// update code every 10ms
window.setInterval(function () {
    
    // Mining skill
    xpMining = tempMining;

    if (lvlMining < 10) {
        if (tempMining > 99) {
            tempMining = 0;
            lvlMining++;
            costMining -= 1.5;
            mineFail -= 1;
        }
    } else {
        xpMining = "MAX";
    }

    // fishing skill
    xpFishing = tempFishing;

    if (lvlFishing < 10) {
        if (tempFishing > 99) {
            tempFishing = 0;
            lvlFishing++;
            costFishing -= 0.5;
            chanceFish += 7;
        }
    } else {
        xpFishing = "MAX";
    }


    // Time of day
    if (tempTime > 4) {
        tempTime = 0;
        numDay++;
        rentDay++;
    } else {
        switch (tempTime) {
            case 0:
                numTime = "Morning";
                break;
            case 1:
                numTime = "Midday";
                break;
            case 2:
                numTime = "Afternoon";
                break;
            case 3:
                numTime = "Evening";
                break;
            case 4:
                numTime = "Night";
                break;
            default:
                break; 
        }
    }

    // Update amount
    $("#gold-count").text(Math.floor(numGold));
    $("#health-count").text(Math.floor(numHealth));
    $("#energy-count").text(Math.floor(numEnergy));
    $("#hunger-count").text(Math.floor(numHunger));
    $("#food-count").text(Math.floor(numFood));
    $("#time-count").text(numTime);
    $("#day-count").text(Math.floor(numDay));
    $("#medicine-count").text(Math.floor(numMedicine));


    $("#skill-mining").text(xpMining);
    $("#level-mining").text(Math.floor(lvlMining));

    $("#fishing-unlock").text(skillFishing);
    $("#fishing-pole").text(fishingPole);
    $("#skill-fishing").text(xpFishing);
    $("#level-fishing").text(Math.floor(lvlFishing));


    // diable button if requirements not met
    $("#work-mine").prop("disabled", costMining > numEnergy);
    $("#produce-hunger").prop("disabled", numFood <= 0);
    $("#get-food").prop("disabled", 10 > numGold);
    $("#learn-fishing").prop("disabled", learnfishing == 1 || 50 > numGold);
    $("#work-fish").prop("disabled", learnfishing == 0 || costFishing > numEnergy);
    $("#sell-food").prop("disabled", 0 >= numFood);
    $("#produce-medicine").prop("disabled", 0 >= numMedicine);
    $("#get-medicine").prop("disabled", 15 > numGold);

    // Health damage
    switch (numHealth) {
        case 10:
            amountEnergy = 10;
            break;
        case 20:
            break;
        case 30:
            break;
        case 40:
            break;
        case 50:
            break;
        case 60:
            break;
        case 70:
            break;
        case 80:
            break;
        case 90:
            break;
        case 100:
            break;
        default:
            break;
    }


    // Game over functions
    if (numHunger <= 0) {
        $(':button').prop('disabled', true);
        alert("You have starved!!!")
    }

    if (rentDay == 7) {
        if (goldRent > numGold) {
            $(':button').prop('disabled', true);
            alert("You are bankrupt!!!")
        } else {
            numGold -= goldRent;
            rentDay = 0;
        }
    }

    if (numHealth <= 0) {
        $(':button').prop('disabled', true);
        alert("You have died!!!")
    }

}, 10);