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
dismisses it. Photos appear directly on the card; cards without photos have no
image box. Failed images are hidden. Leave `photo: null`
until the correct photo is available. Do not place CVs or private documents here.

Competition photos also appear in the horizontal Competition Moments gallery.
Gallery-only moments are listed in `src/data/competitionPhotos.js`. Use `fit:
'contain'` to keep portrait photos fully visible, or `position` to adjust a crop.
For multiple photos of one competition, add a `photos` array to its achievement
using the same fields as `photo`. The gallery uses `photos` when present, otherwise
it uses the single `photo`. Scholarship photos are excluded from this gallery.
