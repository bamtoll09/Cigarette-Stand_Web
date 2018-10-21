var input = document.getElementsByClassName("ciga");
var focusIndex = 0;

var onFocus = function(index) {
    focusIndex = index;
}

window.onload = function() {
    $('.ciga').keydown(function (e) {
        console.log(e.which + '');
        if (e.which === 13) {
            if (focusIndex == 174) return true;
            var index = ++focusIndex;
            input[focusIndex].focus();
            return false;
        }
    });
}