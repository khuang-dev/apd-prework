(function ($) {


    
    const content = $('.content');

    $.get('src/quiz.json', function (d) {
        $.each(d.quizzes, function (key, value) {
            content.append(`<button class="quiz-title">${value.title}</button>`);
        })
        $('.quiz-title').on('click', function (e) {
            console.log(e.target);
            if (e.target.innerText === 'Abstract Quiz') {
                console.log('abstract');
            }
            if (e.target.innerText === 'Dev Quiz') {
                console.log('dev');
            }
        })
    })

})(jQuery);