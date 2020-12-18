$(function () {
  var fselector = 0;

  var $grid = $(".gallery__items").isotope({
    itemSelector: ".gallery__item",
    layoutMode: "fitRows",
  });
  // filter functions
  var filterFns = {};
  // bind filter button click
  $(".filters-button-group").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({ filter: filterValue });
  });

  $(".button-group").each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function () {
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      $(this).addClass("is-checked");
    });
  });

  // filter .men items and hide other
  $grid.isotope({ filter: ".men" });

  //video

  var overlay = document.getElementById("overlay");
  var vid = document.getElementById("video");

  if (overlay.addEventListener) {
    overlay.addEventListener("click", play, false);
  } else if (overlay.attachEvent) {
    overlay.attachEvent("onclick", play);
  }

  function play() {
    if (vid.paused) {
      vid.play();
      overlay.className = "o";
    } else {
      vid.pause();
      overlay.className = "";
    }
  }
});
