var componentObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("layoutShow2");
    } else {
      entry.target.classList.remove("layoutShow2");
    }
  });
});

var hiddenElements = document.querySelectorAll(".layoutHidden2");
hiddenElements.forEach((el) => componentObserver.observe(el));
