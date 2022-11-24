const cards =  document.querySelector(".cards")
function displayAlert(title, text, icon) {
    Swal.fire({
      icon: icon,
      text: text,
      title: title,
    });
  }
