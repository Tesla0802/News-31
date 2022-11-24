let Title = document.querySelector("#title");
let text = document.querySelector("#text");
let image = document.querySelector("#image");
let Btn = document.querySelector("#button");
console.log(Title,image,text,Btn);

Btn.addEventListener("click", () => {
    let Titlevalue = Title.value;
    let Textvalue = text.value;
    if(Titlevalue == "" || Textvalue == "" ) {
        return;
    }
    let imgSrc = "";
    try {
        const reader = new FileReader();
        reader.readAsDataURL(image.files[0]);
        reader.onload = () => {
          imgSrc = reader.result;
          addElementInFirebase("Post/", {
            title : Titlevalue,
            text : Textvalue,
            imgSrc: imgSrc,
            uploadTime: new Date().toLocaleString(),
          });
        };
      } catch (err) {
        imgSrc =
          "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png";
        addElementInFirebase("Post/", {
            title : Titlevalue,
            text : Textvalue,
            imgSrc: imgSrc,
            uploadTime: new Date().toLocaleString(),
        });
      }
      displayAlert("წარმატებული ოპერაცია", "პოსტი წარმატებით დაემატა", "success");
      Title.value = "";
      text.value = "";
      setTimeout( () => {
        location.href = "index.html"
      },1500);
} )