document.getElementById("more-btn").onclick = function () { myFunction() };

function myFunction() {
    document.getElementById("hidden-menus").classList.toggle("showMenus");
}

function activeClass(e) {
    var active = document.querySelectorAll(".active");
    [].forEach.call(active, function(el) {
      el.classList.remove("active");
    });
    e.target.className = "active";
  }
  