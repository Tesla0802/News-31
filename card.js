let card = document.querySelector(".cards");
let PostArray = getArrayFromFirebase("Post");

setTimeout(() => {
  PostArray.forEach((element) => {
    card.innerHTML += `
    <div class="cards">
    <div class="card text-bg-dark">
      <img src="${element.data.imgSrc}" class="card-img" alt="dark bg" />
      <div class="card-img-overlay">
        <h5 class="card-title">${element.data.title} </h5>
        <p class="card-text">
          ${element.data.text}
        </p>
        <p class="card-text"><small>Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
        `;
    console.log(PostArray);
  });
}, 3000);
