let currentPhoto = 1;

// Добавим функцию для управления видимостью кнопки помощи в зависимости от текущей фотографии
// Обновляем функцию toggleVirtualTourVisibility для обновления видимости кнопки помощи и установки текущей фотографии
function toggleVirtualTourVisibility(photoNumber) {
  const helpButton = document.getElementById('help-button');
  if (photoNumber === 1 || photoNumber === 4 || photoNumber === 5 || photoNumber === 6 || photoNumber === 7
      || photoNumber === 9) {
    helpButton.style.display = 'block';
  } else {
    helpButton.style.display = 'none';
  }
  currentPhoto = photoNumber; // Установка текущей фотографии
}

const currentPage = window.location.pathname;

// Обновляем обработчик события для кнопки помощи
document.getElementById('help-button').addEventListener('click', function() {
  let videoSource = '';

  if (currentPage === '/punk') {
    // Определяем, какое видео воспроизводить в зависимости от текущей фотографии
    if (currentPhoto === 1) {
      videoSource = '/static/videos/punk/ru/KPP.webm';
    } else if (currentPhoto === 4) {
      videoSource = '/static/videos/punk/ru/10_PUNK.webm';
    } else if (currentPhoto === 5) {
      videoSource = '/static/videos/punk/ru/12_PUNK.webm';
    } else if (currentPhoto === 6) {
      videoSource = '/static/videos/punk/ru/13_PUNK.webm';
    } else if (currentPhoto === 7) {
      videoSource = '/static/videos/punk/ru/14_PUNK.webm';
    } else if (currentPhoto === 9) {
      videoSource = '/static/videos/punk/ru/16_PUNK.webm';
    }
  } else if (currentPage === '/punkZH') {
    if (currentPhoto === 1) {
      videoSource = '/static/videos/punk/zh/kpp_zh.webm';
    } else if (currentPhoto === 4) {
      videoSource = '/static/videos/punk/zh/10_zh.webm';
    } else if (currentPhoto === 5) {
      videoSource = '/static/videos/punk/zh/12_zh.webm';
    } else if (currentPhoto === 6) {
      videoSource = '/static/videos/punk/zh/13_zh.webm';
    } else if (currentPhoto === 7) {
      videoSource = '/static/videos/punk/zh/14_zh.webm';
    } else if (currentPhoto === 9) {
      videoSource = '/static/videos/punk/zh/16_zh.webm';
    }
  } else if (currentPage === '/punkES') {
    if (currentPhoto === 1) {
      videoSource = '/static/videos/punk/es/kpp.webm';
    } else if (currentPhoto === 4) {
      videoSource = '/static/videos/punk/es/10_punk.webm';
    } else if (currentPhoto === 5) {
      videoSource = '/static/videos/punk/es/12_punk.webm';
    } else if (currentPhoto === 6) {
      videoSource = '/static/videos/punk/es/13_punk.webm';
    } else if (currentPhoto === 7) {
      videoSource = '/static/videos/punk/es/14_punk.webm';
    } else if (currentPhoto === 9) {
      videoSource = '/static/videos/punk/es/16_punk.webm';
    }
  }


  const guidedVideo = document.getElementById('guided-video');

  if (videoSource) {
    guidedVideo.setAttribute('src', videoSource);
    guidedVideo.load();
    guidedVideo.play();

    // Показать видео и затемнение
    const videoContainer = document.getElementById('video-container');
    const overlay = document.getElementById('overlay');

    videoContainer.style.display = 'block';
    overlay.style.display = 'block';
  }
});


function fadeOut(element) {
  element.setAttribute('animation', {
    property: 'material.opacity',
    dur: 1000,
    from: 1,
    to: 0,
    easing: 'easeOutQuad'
  });
}

function fadeIn(element) {
  element.setAttribute('animation', {
    property: 'material.opacity',
    dur: 1000,
    from: 0,
    to: 1,
    easing: 'easeOutQuad'
  });
  element.setAttribute('opacity', '0');
}

function showPhoto(photoNumber) {
  const current = document.getElementById(`photo${currentPhoto}`);
  fadeOut(current);

  currentPhoto = photoNumber;

  const targetPhoto = document.getElementById(`photo${photoNumber}`);
  fadeIn(targetPhoto);

  const photos = document.querySelectorAll('a-sky');
  photos.forEach(function (photo) {
    photo.classList.remove('active');
  });
  photos[photoNumber - 1].classList.add('active');

  togglePanel();

  toggleVirtualTourVisibility(photoNumber); // Обновлен вызов функции для управления видимостью виртуального тура
}

function togglePanel() {
  const panel = document.querySelector('.overlay-navigation');
  panel.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
  const menuButton1 = document.querySelector('.overlay-navigation ul li:nth-child(1) a');
  menuButton1.addEventListener('click', function(e) {
    e.preventDefault();
    showPhoto(1);
  });
});

const overlay = document.getElementById('overlay');
const videoContainer = document.getElementById('video-container');
const guidedVideo = document.getElementById('guided-video');
let videoPlaying = false;

document.getElementById('help-button').addEventListener('click', function() {
  if (!videoPlaying) {
    // Плавно показать видео
    videoContainer.style.display = 'block';
    videoContainer.style.opacity = '0';
    setTimeout(() => {
      videoContainer.style.opacity = '1';
    }, 50); // Небольшая задержка для старта анимации

    // Плавно показать затемнение
    overlay.style.display = 'block';
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.classList.add('active');
      overlay.style.opacity = '1';
    }, 50); // Небольшая задержка для старта анимации

    guidedVideo.play();
    videoPlaying = true; // Установить флаг в true, т.к. видео воспроизводится
  } else {
    // Плавно скрыть видео
    videoContainer.style.opacity = '0';
    setTimeout(() => {
      videoContainer.style.display = 'none';
      videoContainer.style.opacity = '1';
    }, 500); // Подождать завершения анимации (2.5 секунды)

    // Плавно скрыть затемнение
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
      overlay.classList.remove('active');
      overlay.style.opacity = '1'; // Вернуть начальную прозрачность для следующего появления
    }, 500); // Подождать завершения анимации (2.5 секунды)

    guidedVideo.pause();
    guidedVideo.currentTime = 0;
    videoPlaying = false; // Установить флаг в false, т.к. видео закрыто
  }
});

guidedVideo.addEventListener('ended', function() {
  // Аккуратно закрыть видео после завершения воспроизведения
  videoContainer.style.opacity = '0';
  setTimeout(() => {
    videoContainer.style.display = 'none';
    videoContainer.style.opacity = '1';
  }, 2500); // Подождать завершения анимации (2.5 секунды)

  // Плавно скрыть затемнение
  overlay.style.opacity = '0';
  setTimeout(() => {
    overlay.style.display = 'none';
    overlay.classList.remove('active');
    overlay.style.opacity = '1'; // Вернуть начальную прозрачность для следующего появления
  }, 2500); // Подождать завершения анимации (2.5 секунды)

  videoPlaying = false; // Установить флаг в false, т.к. видео закрыто


  helpButton.className = 'kf1';
});



window.onload = function() {
  autoRotateOnLoad();
};
