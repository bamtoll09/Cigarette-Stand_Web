var input = document.getElementsByClassName("ciga");
var focusIndex = 0;

var onFocus = function(index) {
    focusIndex = index;
}

window.onload = function() {
    $('.ciga').keydown(function (e) {
        console.log(e.which + '');
        if (e.which === 13) {
            if (focusIndex == 171) return true;
            var index = $('.ciga').index(this) + 1;
            $('.ciga').eq(index).focus();
            return false;
        }
    });
}