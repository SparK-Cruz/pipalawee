(function() {
  var decodeHtmlEntity = function(str) {
    return str.replace(/&#(\d+);/g, function(match, dec) {
      return String.fromCharCode(dec);
    });
  };

  (function() {
    var debug = false;
    var Pipalawee = (function() {
      function Pipalawee(config) {
        var _this = this;
        document.addEventListener('DOMContentLoaded', function() {
          var styles = document.createElement("style");
          styles.innerText =
            ".paused-card{ border-color: #eaa; }"+
            ".paused-card:after{"+
            "  position: relative;"+
            "  display: block;"+
            "  float: right;"+
            "  bottom: 30px;"+
            "  right: 10px;"+
            "  width: 12px;"+
            "  content: '▋▋';"+
            "  font-size: 18px;"+
            "  color: #c00;"+
            "}";

          document.body.appendChild(styles);
          var elements = [].slice.call(document.body.querySelectorAll(
            "div.closed-card-label[title='Paused'], " +
            "div.closed-card-label[title='Pausado'], " +
            "div.closed-card-label[title='On Hold']"));

          elements.forEach(function(element){
            element.parentNode.parentNode.className += " paused-card";
            element.parentNode.removeChild(element);
          });
        });
      }

      return Pipalawee;
    })();
    console.log("Pipefy Paused Label Awareness Enhancement Extension");
    return new Pipalawee();
  })();
}).call(this);
