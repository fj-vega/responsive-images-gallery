(() => {

  /**
   * Gallery configuration
   */

  const IMAGES = {
    settings: {
      'imageAspectRatio': [3, 4],
      'imageMinWidth': 300,
      'imageGap': 20,
      'units': 'px'
    },
    meta: [
      {
        src: "https://source.unsplash.com/random/?read"
      },
      {
        src: "https://source.unsplash.com/random/?nature"
      },
      {
        src: "https://source.unsplash.com/random/?computer"
      },
      {
        src: "https://source.unsplash.com/random/?music"
      },
      {
        src: "https://source.unsplash.com/random/?girl"
      },
      {
        src: "https://source.unsplash.com/random/?animal"
      },
      {
        src: "https://source.unsplash.com/random/?retro"
      },
      {
        src: "https://source.unsplash.com/random/?camera"
      },
      {
        src: "https://source.unsplash.com/random/?beach"
      }
    ]
  }

  // Insert images into gallery
  const gallery = document.querySelector('#responsive-image-gallery.gallery');

  IMAGES.meta.forEach((meta, idx) => {
    gallery.insertAdjacentHTML(
      'beforeend',
      `<div class="gallery__container">
        <img class="gallery__image" src="${meta.src}" alt="${meta.alt || 'Img num ' + (idx + 1)}">
       </div>`
    )
  })

  // Apply gallery settings
  const setGallery = () => {
    const { imageMinWidth, imageGap, units } = IMAGES.settings;
    
    gallery.style.gridTemplateColumns = `repeat(auto-fit, minmax(${imageMinWidth + units}, 1fr))`;
    gallery.style.gridGap = imageGap + units;

    console.log('Gallery settings successfully applied.');
  }

  const setContainerHeight = () => {
    // Get image container dimensions
    const [width, height] = IMAGES.settings.imageAspectRatio;

    document.querySelectorAll('#responsive-image-gallery .gallery__container').forEach(container => {
      const domRect = container.getBoundingClientRect();
        container.style.height = domRect.width * (height / width) + 'px';
    })

    console.log('Image containers sizing set correctly.');
  }


  // Run initial configuration
  setGallery();

  // Size containers and images accordingly after all images are loaded
  document.querySelectorAll('#responsive-image-gallery .gallery__image').forEach(image => (
    image.addEventListener('load', setContainerHeight)
  ));

  // Adapt images on screen resize and orientation change
  window.addEventListener('resize', setContainerHeight);
  window.addEventListener('orientationchange', setContainerHeight);

})();
