// Smaller versions of a photo for smaller screens, as a `srcset`.
//
// Photos are Wikimedia Commons thumbnails such as ".../1280px-Name.jpg".
// Commons serves the same image at its other standard widths by changing
// that number, so a phone can load the 500px or 960px version instead of
// the 1280px one. Only standard widths work (see CLAUDE.md), and only ones
// narrower than the address given, which the original is known to exceed.
// The same works for photos stored in public/photos/. Any other address (an
// original file, another site) gets no srcset and loads as before.

export const thumbnailWidths = [500, 960, 1280, 1920];

const thumbnail = /\/thumb\/.+\/(\d+)px-[^/?]+(?:\?.*)?$/;

// Photos stored in public/photos/ are saved at 640, 1280 and 1920 pixels
// wide, named "<name>-<width>.jpg".
const localWidths = [640, 1280, 1920];
const local = /\/photos\/[^/]+-(\d+)\.jpg$/;

// Every address in the srcset for `url`, smallest first, with its width.
export function sizesOf(url) {
  const localWidth = Number(url?.match(local)?.[1]);

  if (localWidths.includes(localWidth)) {
    return localWidths
      .filter((each) => each <= localWidth)
      .map((each) => ({
        url: url.replace(new RegExp(`-${localWidth}\\.jpg$`), `-${each}.jpg`),
        width: each,
      }));
  }

  const width = Number(url?.match(thumbnail)?.[1]);

  if (!width) {
    return [];
  }

  return [
    ...thumbnailWidths
      .filter((each) => each < width)
      .map((each) => ({
        url: url.replace(`/${width}px-`, `/${each}px-`),
        width: each,
      })),
    { url, width },
  ];
}

export function srcSet(url) {
  const sizes = sizesOf(url);

  return sizes.length > 1
    ? sizes.map(({ url: each, width }) => `${each} ${width}w`).join(", ")
    : undefined;
}
