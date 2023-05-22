let scoreTeamOne = document.getElementById("teamScore-1")
let scoreTeamTwo = document.getElementById("teamScore-2")
let pointsTeamOne = 0
let pointsTeamTwo = 0

//Team One Adding Points
function AddOnePointTeamOne() {
    pointsTeamOne+=1
    scoreTeamOne.textContent = pointsTeamOne
}

function AddTwoPointsTeamOne() {
    pointsTeamOne+=2
    scoreTeamOne.textContent = pointsTeamOne
}

function AddThreePointsTeamOne() {
    pointsTeamOne+=3
    scoreTeamOne.textContent = pointsTeamOne
}

//Team Two Adding Points
function AddOnePointTeamTwo() {
    pointsTeamTwo+=1
    scoreTeamTwo.textContent = pointsTeamTwo
}

function AddTwoPointsTeamTwo() {
    pointsTeamTwo+=2
    scoreTeamTwo.textContent = pointsTeamTwo
}

function AddThreePointsTeamTwo() {
    pointsTeamTwo+=3
    scoreTeamTwo.textContent = pointsTeamTwo
}

function resetScore() {
    pointsTeamOne = 00
    pointsTeamTwo = 00
    scoreTeamOne.innerText = pointsTeamOne
    scoreTeamTwo.innerText = pointsTeamTwo
}