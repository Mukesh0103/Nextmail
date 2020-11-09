document.getElementById("more-btn").onclick = function () { myFunction() };

function myFunction() {
  document.getElementById("hidden-menus").classList.toggle("showMenus");
}

function activeClass(e) {
  var active = document.querySelectorAll(".active");
  [].forEach.call(active, function (el) {
    el.classList.remove("active");
  });
  e.target.className = "active";
}

function openSortDropdown() {
  var dropdownBox = document.getElementById("sortDropdown");
  if (dropdownBox.style.display === "block") {
    dropdownBox.style.display = "none";
  } else {
    dropdownBox.style.display = "block";
  }
  document.addEventListener('mouseup', function (e) {
    if (!dropdownBox.contains(e.target)) {
      dropdownBox.style.display = 'none';
    }
  });
}