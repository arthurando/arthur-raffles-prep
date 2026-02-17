/* Shared Navigation JS — All Pages */
document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('hamburger');
    var navMenu = document.getElementById('navMenu');
    var dropdownToggle = document.getElementById('interviewPrepToggle');
    var dropdownMenu = document.getElementById('interviewPrepMenu');

    // Hamburger toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Dropdown toggle
    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle('active');
        });
    }

    // Close on outside click
    document.addEventListener('click', function(e) {
        if (dropdownMenu && !e.target.closest('.dropdown')) {
            dropdownMenu.classList.remove('active');
        }
        if (navMenu && hamburger && !e.target.closest('.nav-menu') && !e.target.closest('.hamburger')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Close mobile menu on link click
    if (navMenu) {
        navMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                if (hamburger) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });
    }
});
