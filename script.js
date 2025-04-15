$(document).ready(function () {
    // Sidebar toggle functionality
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
    });

    // Auto-collapse sidebar on mobile
    if ($(window).width() <= 768) {
        $('#sidebar').addClass('active');
        $('#content').addClass('active');
    }

    // Handle window resize
    $(window).resize(function() {
        if ($(window).width() <= 768) {
            $('#sidebar').addClass('active');
            $('#content').addClass('active');
        } else {
            $('#sidebar').removeClass('active');
            $('#content').removeClass('active');
        }
    });
});