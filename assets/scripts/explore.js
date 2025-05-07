// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() 
{
  const voiceSelect = document.getElementById('voice-select');
  const textArea    = document.getElementById('text-to-speak');
  const talkButton  = document.querySelector('#explore button');
  const faceImage   = document.querySelector('#explore img');
  let voices = [];

  // give select all available voices
  function populateVoiceList()
  {
    voices = window.speechSynthesis.getVoices();

    //reset options
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach((voice, i) => 
    {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  
  }
}

populateVoiceList();
window.speechSynthesis.addEventListener('voiceschanged', populateVoiceList);