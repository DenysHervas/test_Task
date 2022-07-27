export function isWebp() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
  }
  testWebP(function (support) {
    let className = support === true ? 'no-webp' : 'webp';
    document.documentElement.classList.add(className);
  });
}
