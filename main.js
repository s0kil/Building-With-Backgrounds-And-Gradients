(function() {
  let cta = document.getElementById("cta");
  let modal = document.getElementById("modal");
  let modalClose = document.getElementById("modal-close");

  let video;

  window.onload = () => {
    video = document.createElement("video");
    video.poster =
      "https://web.archive.org/web/20140225064542/http://images.apple.com/global/elements/quicktime/qt_endstate848x480.jpg";
    video.src =
      "https://web.archive.org/web/20150928034113/http://images.apple.com/media/us/ipad/2013/tv-spots/anthem/ipad-anthem-cc-us-20140117_848x480.mp4";
    video.width = 848;
    video.height = 480;
    video.controls = true;
    modal.appendChild(video);
  };

  cta.onclick = event => {
    event.preventDefault();
    modal.classList.add("modal-active");
    video.play();
  };

  modalClose.onclick = () => {
    video.pause();
    modal.classList.remove("modal-active");
  };
})();
