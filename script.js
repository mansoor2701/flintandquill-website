/* ===== Flint & Quill — script.js ===== */

(function () {
  'use strict';

  /* -- Mobile nav toggle -- */
  var toggle = document.querySelector('.nav-toggle');
  var navList = document.querySelector('.nav-list');
  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      navList.classList.toggle('open');
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
    });
    /* Close nav when a link is clicked (mobile) */
    navList.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navList.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* -- Consultation form → mailto -- */
  var form = document.getElementById('consultation-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('[name="name"]').value.trim();
      var business = form.querySelector('[name="business"]').value.trim();
      var email = form.querySelector('[name="email"]').value.trim();
      var phone = form.querySelector('[name="phone"]').value.trim();
      var message = form.querySelector('[name="message"]').value.trim();

      var subject = encodeURIComponent('Free Consultation Request — ' + (business || name));
      var body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Business: ' + business + '\n' +
        'Email: ' + email + '\n' +
        'Phone: ' + phone + '\n\n' +
        'Message:\n' + message
      );
      window.location.href = 'mailto:hello@flintandquill.com?subject=' + subject + '&body=' + body;
    });
  }

  /* -- Mark current page in nav -- */
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();
