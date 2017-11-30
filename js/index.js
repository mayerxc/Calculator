var char;
var str;
var whitespace;

function number(no) {
    $(".top-result").append(no);
    whitespace = $(".top-result").text();
    whitespace = whitespace.replace(/\s/g, "");
    $(".top-result").text(whitespace);
}

function num(no) {
    $(".top-result").append(no);
}

function clear() {
    $("top-result").html("")
}


function operator(op) {
    str = $(".top-result").text();
    //can't put two operators in a row
    if (str.slice(-1) === "+" || str.slice(-1) === "-" || str.slice(-1) === "*" || str.slice(-1) === "/") {
        str = str.substring(0, str.length - 1);
        str = str.concat(op);
        $(".top-result").text(str);
    } else {
        $(".top-result").append(op);
    }
    str = "";
    //remove spaces
    whitespace = $(".top-result").text();
    whitespace = whitespace.replace(/\s/g, "");
    $(".top-result").text(whitespace);

}


function equal() {
    try {
        //evaluate the string
        var answer = eval($(".top-result").text());
        $(".bottom-result").text(answer);
        $(".top-result").text("");
        //$(".top-result").text( $(".top-result").text() + " = " + answer );
    } catch (err) {
        //if error, display error
        $(".bottom-result").text("Error");
    }

}


$(document).ready(function () {

    $(".number").click(function () {
        number( $(this).text() );
    });

    $(".clear").click(function () {
        $(".top-result").text("");
        $(".bottom-result").text("0");
    });

    $(".operator").click(function () {
        operator($(this).html());
    });

    $(".equals").click(function () {
        equal();
    });

    //add in functionality to type numbers and operators from keyboard
    $("body").keypress(function (e) {
        e.preventDefault();
        char = String.fromCharCode(e.which);
        switch (char) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
            case '.':
                number(char);
                break;
            case '+':
            case '-':
            case '/':
            case '*':
                operator(char);
                break;
            case '\r':
                equal();
        }
        char = "";
    });
});
