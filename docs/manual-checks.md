# Manual checks

Behaviour that is checked by hand in a browser rather than by the test suite. Run `npm run dev`, open `http://localhost:5173/Digital-Airframe-Archive/`, and go through the ones a change can affect.

## Boot overlay
- A first visit in a new tab shows the boot overlay for about 1.5 seconds.
- Reloading, or opening another page in the same tab, shows no overlay.

## Moving between pages
- Clicking a link fades the old page out and the new one in, with no blank flash and no reload.
- Back and Forward return to the right page.
- Moving the mouse towards an aircraft card requests that page's code before the click (Network panel: `f35.js` appears while the address is still the hangar). Hovering, pressing and keyboard focus do the same.
- With the browser's data saver on, nothing is requested before the click.

## Language switch
- Halfway down an aircraft page, the EN/ES switch opens the other language at the same section, about the same distance into it.
- The same holds for the "Leer en español" / "Read in English" notice.
- At the top of a page, switching language stays at the top.
- Opening the switch in a new tab, then following another link in the first tab, starts that page at the top.

## Aircraft pages
- The back-to-top button is hidden on the first screen, appears after scrolling past it, and returns to the top.
- It works on the J-20 and F-22 pages as well as the data-driven ones.

## Photos and gallery
- Photos fade in over a dim placeholder as they load, and already-cached photos show at once.
- Hovering a photo on an aircraft page still zooms it smoothly.
- In the gallery viewer, a swipe left shows the next photo and a swipe right the previous one; a short drag does nothing.
- The arrow keys still change the photo.

## Polish
- Tab through the hangar: every card shows a focus outline inside its edge.
- The lime buttons move and lighten slightly while pressed.
- The header's current section is underlined as well as lime.
- Figures in the comparison table line up in columns.
