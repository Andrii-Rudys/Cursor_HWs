const playSound = (e) => {
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if (!sound) return;
        key.classList.add('playing');
        sound.currentTime = 0;
        sound.play();
      }
      const removeTransition = (e) => {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
      }

      window.addEventListener('keydown', playSound);
      const keys = Array.from(document.querySelectorAll('.key'));
      keys.forEach(key => key.addEventListener('transitionend', removeTransition));