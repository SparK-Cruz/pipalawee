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
            ".paused-card:after{"+
            "  position: relative;"+
            "  display: block;"+
            "  float: right;"+
            "  bottom: 30px;"+
            "  right: 10px;"+
            "  width: 12px;"+
            "  content: '▋▋';"+
            "  font-size: 18px;"+
            "  color: #f20;"+
            "}";

          document.body.appendChild(styles);
          var labels = [].slice.call(
            document.body.querySelectorAll(".filter-label.filter-item[data-id] a span:nth-child(2)"))
            .filter(function(element){
              switch(element.innerText.toLowerCase()){
                case "on hold":
                case "paused":
                case "pausado":
                  return true;
              }
              return false;
            })
            .map(function(element){
              return ".label-bullet[data-id='"+element.parentNode.parentNode.attributes["data-id"].value+"']";
            });

          var elements = [].slice.call(document.body.querySelectorAll(labels.join(", ")));

          elements.forEach(function(element){
            element.parentNode.parentNode.parentNode.className += " paused-card";
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
