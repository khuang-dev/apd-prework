(function ($) {

    const content = $('.content');
    const nav = $('nav');

    $.get('src/quiz.json', function (d) {

        $.each(d.quizzes, function (key, value) {
            content.append(`<button class="quiz-title">${value.title}</button>`);
        })

        $('.quiz-title').on('click', function (e) {

// QUIZ 1
            // content.empty();
            if (e.target.innerText === 'Abstract Quiz') {
                console.log('abstract');
                console.log(d.quizzes[0].questions[0].answers)
                content.append(`<h2>${d.quizzes[0].questions[0].question}<h2>`)
                $.each(d.quizzes[0].questions[0].answers, function (key, value) {
                    content.append(`<button class="answers ${value.value}">${value.content}</button>`);
                })
                const answer = $('.answers');
                const correct = $('.true');
                const incorrect = $('.false');
                answer.on('click', function (e) {
                    console.dir(e.target)
                    if (e.target.classList[1] === 'true'){
                        correct.css('background-color', 'green');
                    } else (e.target.classList[1] === 'false'); {
                        incorrect.css('background-color', 'red');
                    }
                    nav.append(`<button class="abstract-q-one">Next question</button>`);
                })
            }



// QUIZ 2
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