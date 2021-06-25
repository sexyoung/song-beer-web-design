(() => {
  const checkJQ = () => {
    setTimeout(() => {
      if (window.$) {
        $(function () {
          $("#songprize_bt").click(function () {
            $("body,html").animate(
              { scrollTop: $("#songprize").offset().top },
              500
            );
          });
        });
      } else {
        checkJQ();
      }
    }, 200);
  };
  checkJQ();
})();