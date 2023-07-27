// Yamete Kudasai

yameteKudasai = new Audio("./Yamete Kudasai.m4a");
playYamete = () => {
  yameteKudasai.play();
};


const trackElements = document.querySelectorAll('.track');





const trackRecordings = {
    "track1":"ajfkd"
};

function handleTrackClick(event) {
  const trackId = event.target.id;

  if (trackRecordings.hasOwnProperty('track1')) {
console.log("Have it");
  } else {

    const mediaRecorder = new MediaRecorder(mediaStream);
    const chunks = [];
    
    mediaRecorder.ondataavailable = (event) => {
      chunks.push(event.data);
    };
    
    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(chunks, { type: 'audio/wav' });
      trackRecordings[trackId] = audioBlob;
      console.log(`Recording for ${trackId} completed.`);
    };
    
    mediaRecorder.start();
    // Call mediaRecorder.stop() when the recording is done.
  }
}

trackElements.forEach(track => {
  track.addEventListener('click', handleTrackClick);
});
