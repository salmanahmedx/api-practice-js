const fetchComments = () => fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(data => showComment(data))

const commentBtn = document.querySelector(".comment")
commentBtn.addEventListener('click', fetchComments)

const showComment = (data) => {
    const randomId = Math.floor(Math.random() * 500 + 1)
    console.log(randomId)
    data.forEach(function (comment) {
        const p = document.querySelector(".comments");
        if (comment.id === randomId) {
            console.log(comment)
            p.textContent = comment.body;
        } else { return }
    })
}

// dynamic api JSON placeholder
const dynamicBtn = document.querySelector(".dynamic-comment")
const numberInput = document.querySelector(".number")

dynamicBtn.addEventListener('click', function () {
    const newInputValue = Number(numberInput.value);
    dynamicApi(newInputValue)

})

const dynamicApi = (postId) => fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(response => response.json())
    .then(data => showData(data))

function showData(data) {
    const p = document.querySelector(".dynamic-comments")
    const firstObject = data[0];
    p.textContent = firstObject.body;
}

//sportsDB


const playerDetails = async allPlayers => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchloves.php?u=zag`;
    const response = await fetch(url);
    const data = await response.json();
    singlePlayers(data)
}

const detailBtn = document.querySelector(".details")
detailBtn.addEventListener("click", playerDetails)

const searchPlayer = playerID => {
    fetch(`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerID}`)
        .then(response => response.json())
        .then(data => displayPlayers(data))
}

function singlePlayers(data) {

    const random = Math.floor(Math.random() * 182)
    const playerID = data.players[random].idPlayer
    searchPlayer(playerID)
}
function displayPlayers(player) {
    const container = document.querySelector(".sportsDB-container")
    console.log(player.players[0])
    const playerName = player.players[0].strPlayer
    const playerPhoto = player.players[0].strThumb
    container.innerHTML = `
    <h3>${playerName}<h3>
    <img src="${playerPhoto}">
    `
}