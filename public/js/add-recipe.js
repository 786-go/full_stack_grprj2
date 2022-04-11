async function newFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const ingredients = document.querySelector('input[name="ingredients"]').value;
  const post_date = document.querySelector('input[name="post_date"]').value;
  const directions = document.querySelector('input[name="directions"]').value;

  const response = await fetch(`/api/recipes`, {
    method: "POST",
    body: JSON.stringify({
      name,
      ingredients,
      post_date,
      directions,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //need to figure out the location of the document we are replacing
  if (response.ok) {
    document.location.replace("recipes");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
