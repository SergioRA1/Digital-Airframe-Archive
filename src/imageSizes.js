// Smaller versions of a photo for smaller screens, as a `srcset`.
//
// Photos are Wikimedia Commons thumbnails such as ".../1280px-Name.jpg".
// Commons serves the same image at its other standard widths by changing
// that number, so a phone can load the 500px or 960px version instead of
// the 1280px one. Only standard widths work (see CLAUDE.md), and only ones
// narrower than the address given, which the original is known to exceed.
// Any other address (an original file, another site) gets no srcset and
// loads as before.

export const thumbnailWidths = [500, 960, 1280, 1920];

const thumbnail = /\/thumb\/.+\/(\d+)px-[^/?]+(?:\?.*)?$/;

// Every address in the srcset for `url`, smallest first, with its width.
export function sizesOf(url) {
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
