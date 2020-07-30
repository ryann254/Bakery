function stickyHeader() {
  $(document).ready(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 120) {
        $(".navbar").attr("id", "active");
      } else {
        //Remove the background css so it becomes transparent again
        $(".navbar").removeAttr("id", "active");
      }
    });
  });
}

stickyHeader();
