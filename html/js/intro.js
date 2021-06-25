
(() => {
  const checkJQ = () => {
    setTimeout(() => {
      if (window.$) {
        $(function () {
          $(".intro_no").click(function () {
            $(".intro_text").addClass("show");
            $(".intro_text_milk").addClass("show");
            $(".songbeer").addClass("show");
            $(".milk").addClass("show");
          });
        });
      } else {
        checkJQ();
      }
    }, 200);
  };
  checkJQ();
})();