function openInvite() {
  const Cover = document.querySelector("#Cover");
  const main = document.querySelector("#main");

  Cover.style.opacity = "0";
  setTimeout(() => {
    Cover.style.display = "none";
    main.style.display = "block";
    setTimeout(() => {
      main.style.opacity = "1";
    }, 50);
    main.classList.add("active");
  }, 1500);
}
