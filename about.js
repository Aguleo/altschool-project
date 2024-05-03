document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tablinks button");
    const tabContents = document.querySelectorAll(".tabcontents .tabitem");
  
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetData = button.getAttribute("data");
        tabContents.forEach((content) => {
          const contentData = content.getAttribute("data");
          if (contentData === targetData) {
            content.classList.add("opacity-100", "translate-y-0");
            content.classList.remove("-z-10", "opacity-0", "translate-y-20");
          } else {
            content.classList.remove("opacity-100", "translate-y-0");
            content.classList.add("-z-10", "opacity-0", "translate-y-20");
          }
        });
      });
    });
  });