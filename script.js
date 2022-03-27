const dino = document.querySelector('.dino');

function jump() {
    isJumping = true;
  
    let upInterval = setInterval(() => {
      if (position >= 150) {
        // Descendo
        clearInterval(upInterval);
  
        let downInterval = setInterval(() => {
          if (position <= 0) {
            clearInterval(downInterval);
            isJumping = false;
          } else {
            position -= 20;
            dino.style.bottom = position + 'px';
          }
        }, 20);
      } else {
        // Subindo
        position += 20;
        dino.style.bottom = position + 'px';
      }
    }, 20);
  }   