async function commentHandler(event) {
    event.preventDefault();
    const comment = document
        .querySelector('textarea[name="comment-body"]')
        .value.trim();
    const post_id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];
    if (comment) {
        //need to connect to api/comment route for fetch
        const response = await fetch("/api/comment", {
            method: "post",
            body: JSON.stringify({
                post_id,
                comment,
            }),
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (response.ok) {
            document.location.reload(); //need to sort out the replacement for "/dashboard" to be relevant to our project
        } else {
            alert(response.statusText);
        }
    }
}
//In comment.hbs for class = "comment-form"
document.querySelector(".comment-form").addEventListener.submit("submit", commentHandler);