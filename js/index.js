(function($) {
const title = $('.title');
const content = $('.content');

let data;

$.get('src/quiz.json', function(d){
    $.each(d.quizzes, function(key, value){
            content.append(`<div>${value.title}</div>`);
    })
})

})(jQuery);