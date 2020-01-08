(function ($) {



    const content = $('.content');

    $.get('src/quiz.json', function (d) {

        $.each(d.quizzes, function (key, value) {
            content.append(`<button class="quiz-title">${value.title}</button>`);
        })

        $('.quiz-title').on('click', function (e) {
            // content.empty();
            if (e.target.innerText === 'Abstract Quiz') {
                console.log('abstract');
                console.log(d.quizzes[0].questions[0].answers)
                content.append(`<h2>${d.quizzes[0].questions[0].question}<h2>`)
                $.each(d.quizzes[0].questions[0].answers, function (key, value) {
                    content.append(`<button class="answers">${value.content}</button>`);
                })
            }

            if (e.target.innerText === 'Dev Quiz') {
                console.log('dev');
                content.append(`<h2>${d.quizzes[1].questions[1].question}<h2>`)
                $.each(d.quizzes[1].questions[1].answers, function (key, value) {
                    content.append(`<button class="answers">${value.content}</button>`);
                })
            }

        })


    })

})(jQuery);