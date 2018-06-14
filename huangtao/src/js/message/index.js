define([
    "jquery"
], function($) {
    $('.submit').on('click', function() {
        if ($(".text").val() === '') {
            alert("请输入内容");
            return;
        }
        $.ajax({
            url: '/api/add',
            data: {
                naem: '1603B',
                // userId: 1,
                text: $(".text").val(),

            },
            dataType: "json",
            success: function(data) {
                if (data.resule) {
                    window.location.href = "../"
                }
            }
        })
    })

});