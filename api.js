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
