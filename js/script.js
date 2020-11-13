$(document).ready(function() {

    var magic8ball = {};


    magic8ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook, good", "Yes"];
    $("#answer").hide();
    magic8ball.askQuestion = function(question) {

        var randomNumber = Math.random();
        var randomNumberArray = randomNumber * magic8ball.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberArray);
        var randomAnswer = this.listOfAnswers[randomIndex];

        $("#answer").text(randomAnswer);

        console.log(question);
        console.log(randomAnswer);

    };

    $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

    var onClick = function() {
        var question = prompt("ASK A YES/NO QUESTION!");
        $("#8ball").effect("shake");
        setTimeout(
            function() {
                $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
            }, 500);


        $("#answer").fadeIn(4000);
        magic8ball.askQuestion(question);

    };

    $("#questionButton").click(onClick);

});