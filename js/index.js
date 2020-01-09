(function ($) {

    // Variables
    const content = $('.content');
    const title = $('.title');
    const scoreTitle = $('.score-title');
    const qOne = $('.question-one');
    const qTwo = $('.question-two');
    const Results = $('.results');
    const reload = $('.try-again');

    $.get('src/quiz.json', function (d) { //fetch data

        $.each(d.quizzes, function (key, value) { // loop for quiz title
            content.append(`<button class="quiz-title">${value.title}</button>`);
        })

        const quizTitle = $('.quiz-title');
        quizTitle.on('click', function (e) { // click to select a quiz

            title.hide();
            scoreTitle.show();

            let scoreCount = 0; // score counter
            let score = $('.score');
            score.append(scoreCount);

            // QUIZ 1
            quizTitle.hide();

            if (e.target.innerText === 'Abstract Quiz') { // check for which quiz, loop for question one
                content.append(`<h2>${d.quizzes[0].questions[0].question}<h2>`)

                $.each(d.quizzes[0].questions[0].answers, function (key, value) { // loop for answers to question one
                    content.append(`<button class="answers ${value.value}">${value.content}</button>`);
                })

                const answer = $('.answers');

                answer.one('click', function (e) { // click to select an answer
                    answer.attr('disabled', 'disabled');
                    if ($(this)[0].classList[1] === 'true') { // check if answer is correct
                        $(this).addClass('correct');
                        score.html(function (i, val) { return val * 1 + 1 }); // add 1 point to score count
                    } else { // check if answer is incorrect
                        $(this).addClass('incorrect');
                    }
                    qOne.show();
                })

                qOne.on('click', function () { // loop for Q&A for question two
                    qOne.hide();
                    content.empty();
                    content.append(`<h2>${d.quizzes[0].questions[1].question}<h2>`)
                    $.each(d.quizzes[0].questions[1].answers, function (key, value) {
                        content.append(`<button class="answers ${value.value}">${value.content}</button>`);
                    })
                    const answer = $('.answers');
                    answer.one('click', function (e) {
                        answer.attr('disabled', 'disabled');
                        if ($(this)[0].classList[1] === 'true') {
                            $(this).addClass('correct');
                            score.html(function (i, val) { return val * 1 + 1 });
                        } else {
                            $(this).addClass('incorrect');
                        }
                        qOne.hide();
                        qTwo.show();
                    })
                })
                qTwo.on('click', function () { // loop for Q&A for question three
                    qOne.hide();
                    qTwo.hide();
                    content.empty();
                    content.append(`<h2>${d.quizzes[0].questions[2].question}<h2>`)
                    $.each(d.quizzes[0].questions[2].answers, function (key, value) {
                        content.append(`<button class="answers ${value.value}">${value.content}</button>`);
                    })
                    const answer = $('.answers');
                    answer.one('click', function (e) {
                        answer.attr('disabled', 'disabled');
                        if ($(this)[0].classList[1] === 'true') {
                            $(this).addClass('correct');
                            score.html(function (i, val) {
                                return val * 1 + 1
                            });
                        } else {
                            $(this).addClass('incorrect');
                        }
                        qOne.hide();
                        qTwo.hide();
                        Results.show();
                    })
                })
                Results.on('click', function () { // show results
                    content.empty();
                    Results.hide();
                    scoreTitle.hide();
                    reload.show();
                    if (score[0].innerText >= 2) {
                        content.append('<div class="result-meta"><h1>You passed!</h1><h2>Your score is ' + score[0].innerText + ".</h2></div>")
                    } else {
                        content.append('<div class="result-meta"><h1>You failed!</h1><h2>Your score is ' + score[0].innerText + ".</h2></div>")
                    }
                })

            }

            // QUIZ 2
            if (e.target.innerText === 'Dev Quiz') { // check for which quiz, loop for question one
                content.append(`<h2>${d.quizzes[1].questions[0].question}<h2>`)

                $.each(d.quizzes[1].questions[0].answers, function (key, value) { // loop for answers to question one
                    content.append(`<button class="answers ${value.value}">${value.content}</button>`);
                })

                const answer = $('.answers');

                answer.one('click', function (e) { // click to select an answer
                    answer.attr('disabled', 'disabled');
                    if ($(this)[0].classList[1] === 'true') { // check if answer is correct
                        $(this).addClass('correct');
                        score.html(function (i, val) { return val * 1 + 1 }); // add 1 point to score count
                    } else { // check if answer is incorrect
                        $(this).addClass('incorrect');
                    }
                    qOne.show();
                })

                qOne.on('click', function () { // loop for Q&A for question two
                    qOne.hide();
                    content.empty();
                    content.append(`<h2>${d.quizzes[1].questions[1].question}<h2>`)
                    $.each(d.quizzes[1].questions[1].answers, function (key, value) {
                        content.append(`<button class="answers ${value.value}">${value.content}</button>`);
                    })
                    const answer = $('.answers');
                    answer.one('click', function (e) {
                        answer.attr('disabled', 'disabled');
                        if ($(this)[0].classList[1] === 'true') {
                            $(this).addClass('correct');
                            score.html(function (i, val) { return val * 1 + 1 });
                        } else {
                            $(this).addClass('incorrect');
                        }
                        qOne.hide();
                        qTwo.show();
                    })
                })
                qTwo.on('click', function () { // loop for Q&A for question three
                    qOne.hide();
                    qTwo.hide();
                    content.empty();
                    content.append(`<h2>${d.quizzes[1].questions[2].question}<h2>`)
                    $.each(d.quizzes[1].questions[2].answers, function (key, value) {
                        content.append(`<button class="answers ${value.value}">${value.content}</button>`);
                    })
                    const answer = $('.answers');
                    answer.one('click', function (e) {
                        answer.attr('disabled', 'disabled');
                        if ($(this)[0].classList[1] === 'true') {
                            $(this).addClass('correct');
                            score.html(function (i, val) {
                                return val * 1 + 1
                            });
                        } else {
                            $(this).addClass('incorrect');
                        }
                        qOne.hide();
                        qTwo.hide();
                        Results.show();
                    })
                })
                Results.on('click', function () { // show results
                    content.empty();
                    Results.hide();
                    scoreTitle.hide();
                    reload.show();
                    if (score[0].innerText >= 2) {
                        content.append('<div><h1>You passed!</h1><h2>Your score is ' + score[0].innerText + ".</h2></div>")
                    } else {
                        content.append('<div><h1>You failed!</h1><h2>Your score is ' + score[0].innerText + ".</h2></div>")
                    }
                })
            }
        })
        reload.on('click', function () { // refresh page
            location.reload();
        })
    })

})(jQuery);