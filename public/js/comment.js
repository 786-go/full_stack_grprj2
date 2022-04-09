async function commentHandler(event) {
  event.preventDefault();

  const comment = document.querySelector("post-comment").value.trim();

  if (comment) { //need to connect to api/comment route for fetch
    const response = await fetch("/api/comment", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) { 
      document.location.replace("/dashboard/"); //need to sort out the replacement for "/dashboard" to be relevant to our project
    } else {
      alert(response.statusText);
    }
  }
}

//In comment.hbs for class = "comment-form"
document.querySelector(".comment-form");
addEventListener.submit("submit", commentHandler);
