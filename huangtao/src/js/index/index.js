define([
    'jquery',
    'handlebars'
], function($, Handlebars) {
    $.getJSON("/api/list", function(data) {
        var text = $('.text').html();
        var compile = Handlebars.compile(text);
        Handlebars.registerHelper('sort', function(items) {
            return items + 1;
        })
        $('.list').html(compile(data))
    });

});