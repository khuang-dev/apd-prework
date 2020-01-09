(function ($) {

    const content = $('.content');

    $.get('src/quiz.json', function (d) {

        $.each(d.quizzes, function (key, value) {
            content.append(`<button class="quiz-title">${value.title}</button>`);
        })

        $('.quiz-title').on('click', function (e) {

            $('.title').hide();
            $('.score-title').show();
            let scoreCount = 0;
            let score = $('.score');
            score.append(scoreCount);

            // QUIZ 1
            $('.quiz-title').hide();
            if (e.target.innerText === 'Abstract Quiz') {
                content.append(`<h2>${d.quizzes[0].questions[0].question}<h2>`)
                $.each(d.quizzes[0].questions[0].answers, function (key, value) {
                    content.append(`<button class="answers ${value.value}">${value.content}</button>`);
                })
                const answer = $('.answers');

                answer.one('click', function (e) {
                    answer.attr('disabled', 'disabled');
                    if ($(this)[0].classList[1] === 'true') {
                        $(this).css('background-color', 'green');
                        score.html(function(i, val) { return val*1+1 });
                    } else {
                        $(this).css('background-color', 'red');
                    }
                    $('.abstract-q-one').show();
                })

                $('.abstract-q-one').on('click', function () {
                    $('.abstract-q-one').hide();
                    content.empty();
                    content.append(`<h2>${d.quizzes[0].questions[1].question}<h2>`)
                    $.each(d.quizzes[0].questions[1].answers, function (key, value) {
                        content.append(`<button class="answers ${value.value}">${value.content}</button>`);
                    })
                    const answer = $('.answers');
                    answer.one('click', function (e) {
                        answer.attr('disabled', 'disabled');
                        if ($(this)[0].classList[1] === 'true') {
                            $(this).css('background-color', 'green');
                            score.html(function(i, val) { return val*1+1 });
                        } else {
                            $(this).css('background-color', 'red');
                        }
                        $('.abstract-q-one').hide();
                        $('.abstract-q-two').show();
                    })
                })
                $('.abstract-q-two').on('click', function () {
                    $('.abstract-q-one').hide();
                    $('.abstract-q-two').hide();
                    content.empty();
                    content.append(`<h2>${d.quizzes[0].questions[2].question}<h2>`)
                    $.each(d.quizzes[0].questions[2].answers, function (key, value) {
                        content.append(`<button class="answers ${value.value}">${value.content}</button>`);
                    })
                    const answer = $('.answers');
                    answer.one('click', function (e) {
                        answer.attr('disabled', 'disabled');
                        if ($(this)[0].classList[1] === 'true') {
                            $(this).css('background-color', 'green');
                            score.html(function(i, val) { return val*1+1 });
                        } else {
                            $(this).css('background-color', 'red');
                        }
                        $('.abstract-q-one').hide();
                        $('.abstract-q-two').hide();
                        $('.abstract-results').show();
                    })
                })
                $('.abstract-results').on('click', function () {
                    content.empty();
                    $('.abstract-results').hide();
                    $('.score-title').hide();
                    content.append('<h1>Your score is ' + score[0].innerText + ".")
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