

document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('.tablink');
  
    tabLinks.forEach(function (tabLink) {
      tabLink.addEventListener('click', function () {
        tabLinks.forEach(function (link) {
          link.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  });
  

  
  