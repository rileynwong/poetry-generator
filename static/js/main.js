function scrollBottom(){
    // $("html, body").animate({ scrollTop: $(document).height() }, "fast");
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

var init_text="that nothing is solemn a cow is accepted"

appendLine(init_text);
