
document.addEventListener("DOMContentLoaded", () => {

  const menubar1 = document.getElementById('menubar1');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const overlay1 = document.getElementById('overlay1');
  const side1 = document.getElementById('side1');
  const side2 = document.getElementById('side2');
  const side3 = document.getElementById('side3');
  const menubtn = document.getElementById('menubtn');
  
  let menuOpen = false;
  
  function openMenu() {
    menuOpen = true;
    overlay1.style.display = 'block';
    overlay.style.display = 'block';
    sidebar.style.width = '180px';
  }
  
  menubar1.addEventListener('click', function () {
    if (!menuOpen) {
      openMenu();
    }
  });
  
  menubtn.addEventListener('click', function () {
    if (!menuOpen) {
      openMenu();
    }
  });
  
  function closeMenu() {
      menuOpen = false
      overlay1.style.display = 'none'
      overlay.style.display = 'none'
      sidebar.style.width = '0px'
  }
  
  overlay.addEventListener('click', function () {
    if (menuOpen) {
      closeMenu(); 
      }
    });
  
  overlay1.addEventListener('click', function () {
    if (menuOpen) {
      closeMenu(); 
      }
    });
  
  side1.addEventListener('click', redirectToNewPage);

  function redirectToNewPage() {
    window.location.href = "home.html";
  }
  
  side2.addEventListener('click', redirectToNewPage);

  function redirectToNewPage() {
    window.location.href = "about.html";
  }
  
  side3.addEventListener('click', redirectToNewPage);

  function redirectToNewPage() {
    window.location.href = "contact.html";
  }


  
  });
