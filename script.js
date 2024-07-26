window.onscroll = function() {
  console.clear();
  onScroll();

  const isDocumentOverScrolled = isOverScrolled(document.documentElement);
  console.log(isDocumentOverScrolled);
  console.log(checkScrollSpeed());
};

var checkScrollSpeed = (function(settings) {
  settings = settings || {};

  var lastPos, newPos, timer, delta,
    delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

  function clear() {
    lastPos = null;
    delta = 0;
  }

  clear();

  return function() {
    newPos = window.scrollY;
    if (lastPos != null) { // && newPos < maxScroll 
      delta = newPos - lastPos;
    }
    lastPos = newPos;
    clearTimeout(timer);
    timer = setTimeout(clear, delay);
    return delta;
  };
})();

function isOverScrolled(element) {
  const scrollTop = element.scrollTop;
  const scrollHeight = element.scrollHeight;
  const clientHeight = element.clientHeight;

  console.log(scrollTop + " " + clientHeight + " " + scrollHeight);

  return scrollTop + clientHeight > scrollHeight;
}

// This is javascript code that adds the class "scroll-top" to the body whenever the body is at the top of the page and removes it otherwise.
function onScroll() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    console.log("scroll-top removed");
    document.body.classList.remove("scroll-top");
  } else {
    console.log("scroll-top added");
    document.body.classList.add("scroll-top");
  }
}