
function new_advice() {
    $.getJSON( "https://api.adviceslip.com/advice", function(json_obj) {
        var advice_o = json_obj["slip"]
        var advice_id = advice_o['id']
        var advice = advice_o['advice']
        $("#advice_id").text(advice_id);
        $("#advice_text").text(advice);
    });
}

new_advice();