$.get("components/sidebar.html", function (header_var) {
  $("#sidebar").html(header_var);
});

$.get("components/footer.html", function (header_var) {
  $("#footer").html(header_var);
});

$.get("components/header.html", function (header_var) {
  $("#header").html(header_var);
});

function showFilter() {
  $("#left_side").toggleClass("active");
  $("#close").toggleClass("active");
  $(".sidebarLi").toggleClass("active");
}

function showSnapshot() {
  $(".snapshot").toggleClass("active");
  $("#close_snapshot").toggleClass("active");
  $(".sidebarLi").toggleClass("active");
}

function showNav() {
  $("#midNav").toggleClass("active");
  $("#rightNav").toggleClass("active");
}

function showDataworks() {
  $("#dataworks").toggleClass("active");
}

function showDashboard() {
  $("#dashboard").toggleClass("active");
}

function toggleSidebar() {
  $(".mainContent").toggleClass("active");
}
