function updateVolume() {
  var video = document.getElementById("myVideo");
  var volumeControl = document.getElementById("volume");
  video.volume = volumeControl.value;
}
