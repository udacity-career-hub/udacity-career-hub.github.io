$(document).ready(function() {

  // track searches
  $('#rtd-search-form').on('submit', function(evt) {
    evt.preventDefault();
    var form = this;
    var text = $("#rtd-search-form input[name='q']")[0].value;
    analytics.track('Search', {
      searchedFor: text,
      pagePath: location.pathname
    });
    setTimeout(function() {
      form.submit(), 300;
    });
  });

  // track nested links in the navigation pane
  $('.toctree-l1').on('click keypress', 'a', function(evt) {
    if (evt.which === 13 || evt.type === 'click') {
      evt.preventDefault();
      var href = $(this).attr('href');
      var text = this.text;
      analytics.track('Clicked Nav Link', {
        linkText: text,
        category: 'Navigation',
        type: 'Link',
        pagePath: location.pathname,
        link: href
      });
      window.location = href;
    }
  });

  // track navigation links in the footer of articles
  $('.rst-footer-buttons').on('click keypress', 'a', function(evt) {
    if (evt.which === 13 || evt.type === 'click') {
      evt.preventDefault();
      var href = $(this).attr('href');
      var text = this.text;
      analytics.track('Clicked Nav Link', {
        linkText: text,
        category: 'Navigation',
        type: 'Link',
        pagePath: location.pathname,
        link: href
      });
      window.location = href;
    }
  });

  // track clicked links in main article pages
  $('.document').on('click', 'a', function(evt) {
    if (evt.which === 13 || evt.type === 'click') {
      evt.preventDefault();
      var href = $(this).attr('href');
      var text = this.text
      // track clicks on feature jobs separately
      if (link.closest('#featured-jobs').length) {
        analytics.track('Clicked Job',  {
          linkText: text,
          category: 'Featured Job',
          type: 'Link',
          pagePath: location.pathname,
          link: href
        });
      } else {
        analytics.track('Clicked Link',  {
          linkText: text,
          category: 'External Link',
          type: 'Link',
          pagePath: location.pathname,
          link: href
        });
      }
      window.location = href;
    }
  });
});
