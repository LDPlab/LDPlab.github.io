// borrowed from https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb
function resizeGridItem(item) {
  grid = document.getElementsByClassName('masonry')[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.masonry-content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = 'span ' + rowSpan;
}

function resizeAllGridItems() {
  allItems = document.getElementsByClassName('member-profile');
  for (i = 0; i < allItems.length; i++) {
    resizeGridItem(allItems[i]);
  }
}

function resizeInstance(instance) {
    item = instance.elements[0];
  resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener('resize', resizeAllGridItems);

allItems = document.getElementsByClassName('member-profile');
for (i = 0; i < allItems.length; i++) {
  imagesLoaded( allItems[i], resizeInstance);
}