# Achievement photos

Add only approved public photos here, preferably compressed WebP or JPEG.
In `src/data/portfolio.js`, replace the matching achievement's `photo: null` with:

```js
photo: {
  src: '/achievements/intechfest-2026.webp',
  alt: 'Describe the people and activity actually shown in the photo',
  caption: 'Optional caption',
  position: 'center',
},
```

The card uses a 4:3 crop. Adjust `position` (for example `center top`) to keep
subjects visible. Clicking the photo opens its full aspect ratio; Escape or Close
dismisses it. Missing or failed images display the placeholder. Leave `photo: null`
until the correct photo is available. Do not place CVs or private documents here.
