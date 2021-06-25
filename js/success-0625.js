(() => {
  const checkJQ = () => {
    setTimeout(() => {
      if (window.$) {
        $(function () {
          $(".bt_send").click(function () {
            $(".success_formin").fadeOut(300);
            $(".success_change").fadeIn(500);
          });
        });
      } else {
        checkJQ();
      }
    }, 200);
  };
  checkJQ();
})();