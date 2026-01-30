const footballTeam = {
  team: "Star Wars",
  year: 2026,
  headCoach: "Padme Amidala",
  players: [
    {name: "R2D2", position: "midfielder", isCaptain: false},
    {name: "Chewbaka", position: "goalkeeper", isCaptain: false},
    {name: "C3PO", position: "defender", isCaptain: true},
    {name: "Anakin Skywalker", position: "forward", isCaptain: false}]
}

const team = document.getElementById("team")
const year = document.getElementById("year")
const headCoach = document.getElementById("head-coach")
team.textContent = footballTeam.team
year.textContent = footballTeam.year
headCoach.textContent = footballTeam.headCoach

const cardArea = document.querySelector("#player-cards")
//make player cards show up (addElement)

const createCard = (obj) => {
  const playerCard = document.createElement("div")
  //playerCard.innerHTML += playerCardContent
  //console.log("createCard hit")
  //const playerCard = document.createElement("div")
  //give playerCard a class
  playerCard.classList.add("player-card")
  cardArea.appendChild(playerCard)
  const name = document.createElement("h2")
  name.style.fontWeight = "bold"
  const position = document.createElement("p")
  playerCard.appendChild(name)
  playerCard.appendChild(position)
  name.textContent = obj.isCaptain ? `(Captain) ${obj.name}`: obj.name
  position.textContent = `Position: ${obj.position}`
}

footballTeam.players.forEach((player) => {
createCard(player)})

const dropDownChoice = document.querySelector("select")
dropDownChoice.addEventListener("change", () => {
  //remove all cards
  //const allCards = document.querySelectorAll(".player-card")
  //allCards.forEach((card) => {card.style.display = "none"})
  cardArea.replaceChildren()
  //filter which cards to show
  filterPlayersFromDropDown()
  }
)

const filterPlayersFromDropDown = () => {
  if (dropDownChoice.value == "all"){
  footballTeam.players.forEach((player) => {
    createCard(player)
    })
  }
  else{
   // console.log("all did not hit")
      const filterResult = footballTeam.players.filter((player) => player.position == dropDownChoice.value)
  //console.log(dropDownChoice.value)
  filterResult.forEach((player) => {
    createCard(player)
            })
  }
}
