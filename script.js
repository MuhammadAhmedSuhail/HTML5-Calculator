var answer = "";

function appendAnswer(input) {
    answer += input;
    $("input").val(answer)
}

function clearAnswer() {
    answer = "";
    $("#result").val(answer);
}

function calAnswer() {
    try {
        answer = eval(answer);
        if ( answer === undefined )
        {
            alert("Invalid Input!");
            $("#result").val("0");
        }
        else
        {
            $("#result").val(answer);
        }
    } catch (error) {
        alert("Invalid Input!");
        clearAnswer();
    }
}