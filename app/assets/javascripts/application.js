// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
// bootstrap/sprockets provides individual Bootstrap Javascript files (alert.js or dropdown.js)
// while bootstrap provides a concatenated file containing all Bootstrap Javascripts.

//= require jquery
//= require jquery_ujs
//= require bootstrap/custom
//= require turbolinks
//= require wysihtml5-0.3.0
//= require bootstrap-wysihtml5
//= require_tree .

document.addEventListener("turbolinks:load", function() {
    if ($('li.active').html() != undefined) {
        $('li.active').removeClass('active');
    }
    $('a[href="' + location.pathname + '"]').parent('li').addClass('active');
});