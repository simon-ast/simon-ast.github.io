// Initialize medium zoom.
$(document).ready(function () {
  const background = getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee";
  medium_zoom = mediumZoom("[data-zoomable]:not(.preview)", {
    background: background,
  });

  const getPublicationPreviewMargin = () => Math.min(window.innerWidth, window.innerHeight) * 0.1;
  publication_preview_zoom = mediumZoom("[data-zoomable].preview", {
    background: background,
    margin: getPublicationPreviewMargin(),
  });
  window.addEventListener("resize", function () {
    publication_preview_zoom.update({ margin: getPublicationPreviewMargin() });
  });
});
