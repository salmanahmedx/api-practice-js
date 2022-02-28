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

