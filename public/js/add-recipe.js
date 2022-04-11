async function newFormHandler(event) {
  event.preventDefault();

  const recipeName = document.querySelector('input[name="name"]').value;
  const ingredients = document.querySelector('input[name="ingredients"]').value;
  const post_date = document.querySelector('input[name="post_date"]').value;
  const directions = document.querySelector('input[name="directions"]').value;

  const response = await fetch(`/api/recipes`, {
    method: "POST",
    body: JSON.stringify({
      recipeName,
      ingredients,
      post_date,
      directions,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
