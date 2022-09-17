var componentObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("layoutShow");
    } else {
      entry.target.classList.remove("layoutShow");
    }
  });
});

var hiddenElements = document.querySelectorAll(".layoutHidden");
hiddenElements.forEach((el) => componentObserver.observe(el));
