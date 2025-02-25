const btn = document.querySelectorAll(".faq");
if (btn) {
    btn.forEach((i) => {
        i.addEventListener("click", function() {
          if (i.classList.contains("active")) {
              i.classList.remove("active")
          } else {
              i.classList.add("active")
          }
        })
      })
}