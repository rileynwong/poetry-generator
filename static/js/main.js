function scrollBottom(){
    window.scrollTo(0,document.body.scrollHeight);
}

function appendLine(text) {
    $("#poetry").append(text + "<br>");
}

function generateLine(text) {
    scrollBottom();
    appendLine(text);
}

(function poll() {
    setTimeout(function() {
        $.ajax({
            url: "/line",
            type: "GET",
            success: function(text) {
                generateLine(text);
            },
            dataType: "text",
            complete: poll,
            timeout: 2000
        })
    }, 500);
})();

var init_text="that nothing is\n solemn a cow\n is accepted when"

// appendLine(init_text);
