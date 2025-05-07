// expose.js
console.log('expose.js loaded');

const jsConfetti = new JSConfetti();

window.addEventListener('DOMContentLoaded', init);

function init() 
{
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const audio = document.querySelector('#expose audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');

  // when the user picks a horn
  hornSelect.addEventListener('change', () => 
  {
    const horn = hornSelect.value; // airhorn , carhorn, or partyhorn

    // update pic
    hornImage.src = `assets/images/${horn}.svg`;
    hornImage.alt = `${hornSelect.selectedOptions[0].text} image`;

    // point the audio at the right file
    audio.src = `assets/audio/${horn}.mp3`;

  });

  // when the volume slider moves
  volumeSlider.addEventListener('input', () =>
  {
    const vol = Number(volumeSlider.value); // 0 - 100

    // HTMLAudioElement.voume is 0.0-1.0
    audio.volume = vol / 100;

    // swap the volume icon
    if (vol === 0)
    {
      volumeIcon.src = `assets/icons/volume-level-0.svg`;
      volumeIcon.alt = 'Muted';
    }
    else if (vol < 33)
    {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    }
    else if (vol < 67)
    {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    }
    else
    {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }

  });

  // when the user clicks “Play Sound”…
  playButton.addEventListener('click', () => 
  {
    // only play if an audio src is set
    if (audio.src) 
    {
      audio.play();

      // if it’s the party horn, confetti!
      if (hornSelect.value === 'party-horn') 
      {
        jsConfetti.addConfetti();
      }
    }
  });

  // fire an initial “input” event so the icon matches the default slider position
  volumeSlider.dispatchEvent(new Event('input'));

}