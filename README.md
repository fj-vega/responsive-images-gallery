# Responsive images gallery
By [fj-vega](https://fj-vega.github.io/myportfolio/)

Creates a responsive image gallery that will automatically resize any container width you specify, keeping the image aspect ratio and centering it in both axis relative to the container. Perfect for **working with APIs** that deal with images of different sizes.

To get the ready to use files use the donwload button in the [live version](https://fj-vega.github.io/responsive-images-gallery/) or grab it fromt he repo in ``assets/files/resp-img-gal.7z``.

## How to use

In your HTML, add this line where you want to render the gallery:
```
<div id="responsive-image-gallery" class="gallery"></div>
```
Link the CSS file after your stylesheets, and the JS file before the closing body tag in your HTML.

To **add new images** and tweak their **settings**, you **only** have to edit the ``IMAGES`` constant at the top of **app.js**. For further editing, the rest of the source code is present there as well.

```
  const IMAGES = {
    settings: {
      'imageAspectRatio': [3, 4],
      'imageMinWidth': 300,
      'imageGap': 20,
      'units': 'px'
    },
    meta: [
      {
        src: "https://source.unsplash.com/random/?read",
        alt: ''
      }
  }
```
Every setting is required expect "alt".

Keep in mind that the gallery takes 100% of its parent width. In order to size or position it, enclose it on a parent element and style it accordingly.

### Notes

This library uses ``display: grid`` so older browsers might not be supported.
If you find any bug, please contact me.
