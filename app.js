function nightTheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("night")) {
    body.classList.remove("night");
    nightButton.textContent = "See me at night";
    document.getElementById("main-picture").src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/055/721/original/warsday1.jpeg?1669754166";

    document.getElementById("wars1").src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/055/728/original/warsday6.jpeg?1669756290";
    document.getElementById("wars2").src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/055/722/original/warsday2.jpeg?1669754182";
    document.getElementById("wars3").src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/055/723/original/warsday3.jpeg?1669754206";
    document.getElementById("wars4").src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/055/726/original/warsday7.jpeg?1669754634";
    document.getElementById("wars5").src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/055/724/original/warsday4.jpeg?1669754375";
    document.getElementById("wars6").src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/055/725/original/warsday5.jpeg?1669754550";
  } else {
    body.classList.add("night");
    nightButton.textContent = "Back to Day";
    document.getElementById("main-picture").src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/055/961/original/wars1.jpeg?1669920918";
    document.getElementById("wars1").src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/055/973/original/wars5.jpeg?1669921825";
    document.getElementById("wars2").src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/055/971/original/wars7.jpeg?1669921644";
    document.getElementById("wars3").src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/055/972/original/wars8.jpeg?1669921685";
    document.getElementById("wars4").src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/055/968/original/wars2.jpeg?1669921478";
    document.getElementById("wars5").src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/055/970/original/wars6.jpeg?1669921577";
    document.getElementById("wars6").src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/055/969/original/wars3.jpeg?1669921524";
  }
}

let nightButton = document.querySelector("button");
nightButton.addEventListener("click", nightTheme);
