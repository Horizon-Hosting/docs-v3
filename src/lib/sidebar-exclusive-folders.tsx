import { useEffect } from 'react';

/**
 * Closes the other Games game-category folders (BeamMP, Garry's Mod, etc.)
 * whenever one of them is opened, without affecting folders nested deeper inside them
 * (e.g. BeamMP's "Resources"/"Common issues") or any other part of the sidebar.
 *
 * Fumadocs' sidebar folders are independent, uncontrolled collapsibles with no shared
 * "only one open" state, so this wires it up by finding the Games folder's
 * direct children in the rendered DOM and simulating a click on whichever sibling is
 * still open when a new one is clicked.
 */
export function SidebarExclusiveFolders() {
  useEffect(() => {
    // The .click() calls below bubble back up to document and would otherwise
    // re-trigger this same listener, cascading into closing the folder just opened.
    let suppress = false;

    function onClick(e: MouseEvent) {
      if (suppress) return;

      const sidebar = document.getElementById('nd-sidebar');
      const link = sidebar?.querySelector<HTMLAnchorElement>('a[href="/games"]');
      const content = link?.nextElementSibling;
      const list = content?.firstElementChild;
      if (!list) return;

      const groups = Array.from(list.children).filter((el) => el.hasAttribute('data-state'));
      const target = e.target as Node;
      const clicked = groups.find((g) => g.firstElementChild?.contains(target));
      if (!clicked) return;

      // Defer: clicking another sibling's button synchronously, inside this same
      // click's dispatch, races React's own state update for the folder just
      // clicked. Waiting a tick lets that update commit first.
      setTimeout(() => {
        suppress = true;
        for (const group of groups) {
          const trigger = group.firstElementChild;
          if (group !== clicked && trigger instanceof HTMLButtonElement && group.getAttribute('data-state') === 'open') {
            trigger.click();
          }
        }
        suppress = false;
      }, 0);
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
