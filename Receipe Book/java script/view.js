function search() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.flex-item');

    items.forEach(item => {
      const itemName = item.getAttribute('data-name').toLowerCase();
      if (itemName.includes(searchTerm)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }

  function toggleFullscreen(element) {
    if (element.classList.contains('fullscreen')) {
      element.classList.remove('fullscreen');
      document.querySelector('.hidden-background').classList.remove('active');
    } else {
      document.querySelectorAll('.flex-item').forEach(item => {
        item.classList.remove('fullscreen');
      });
      element.classList.add('fullscreen');
      document.querySelector('.hidden-background').classList.add('active');
    }
  }

  function closeFullscreen() {
    document.querySelectorAll('.flex-item').forEach(item => {
      item.classList.remove('fullscreen');
    });
    document.querySelector('.hidden-background').classList.remove('active');
  }