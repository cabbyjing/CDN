var a_idx = 0;
jQuery(document).ready(function ($) {
  $("body").click(function (e) {
    var a = new Array("青青子衿", "悠悠我心", "纵我不往", "子宁不嗣音", "青青子佩", "悠悠我思", "纵我不往", "子宁不来", "挑兮达兮", "在城阙兮", "一日不见", "如三月兮");
    var $i = $("<span/>").text(a[a_idx]);
    a_idx = (a_idx + 1) % a.length;
    var x = e.pageX,
      y = e.pageY;
    $i.css({
      "z-index": 100000000,
      "top": y - 20,
      "left": x,
      "position": "absolute",
      "font-weight": "bold",
      "color": "#ff6651"
    });
    $("body").append($i);
    $i.animate({
      "top": y - 180,
      "opacity": 0
    }, 1500, function () {
      $i.remove();
    });
  });
});