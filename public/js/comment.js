async function commentHandler(event) {
  event.preventDefault();

  const comment = document.querySelector("post-comment").value.trim();

  if (comment) {
    const response = await fetch("/api/comment", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".comment-form");
addEventListener.submit("submit", commentHandler);
