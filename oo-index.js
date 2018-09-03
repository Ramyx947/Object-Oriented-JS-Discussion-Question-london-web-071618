const eventArea = document.getElementById('event_area')
const imageArea = document.getElementById('image_area')
const restartButton = document.getElementById('restart').addEventListener("click",()=> unicorn1.restart())
const attackButton = document.getElementById('attack').addEventListener("click",()=> unicorn1.attack())
const defendButton = document.getElementById('defend').addEventListener("click",()=> unicorn1.defend())
const healButton = document.getElementById('heal').addEventListener("click",()=> unicorn1.heal())
const breakdanceButton = document.getElementById('breakdance').addEventListener("click",()=> unicorn1.breakdance())
const eatButton = document.getElementById('eat').addEventListener("click",()=> unicorn1.eatCronut())

class Unicorn {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = 1000
  }
 restart() {
    while (eventArea.hasChildNodes()) {
        eventArea.removeChild(eventArea.lastChild);
    }
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("Out on the street, ready to go!"));
    eventArea.prepend(div);
    imageArea.className = 'new';
  }

 attack() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("'ATTAAAAAAAAAK!''"));
    eventArea.prepend(div);
    imageArea.className = 'attack';
  }

 defend() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You put sunglasses on."));
    eventArea.prepend(div);
    imageArea.className = 'defend';
  }

 heal() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You feel refreshed after yoga."));
    eventArea.prepend(div);
    imageArea.className = 'heal';
  }

 breakdance() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("It's really spinning class"));
    eventArea.prepend(div);
    imageArea.className = 'breakdance';
  }

 eatCronut() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You've gained 1000 health points."));
    eventArea.prepend(div);
    imageArea.className = 'eat';
  }

}


let unicorn1 = new Unicorn ("r", "sheep-herder")
