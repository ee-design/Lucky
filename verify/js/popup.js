
// Popup close
function popClose(e) {
    if (e.classList.contains('pop'))
        window.onclick  = function(event) {
            if (event.target == e) {
                e.children[0].style.animationName = "popdown";
                setTimeout(function(){
                    e.style.display = "none";
                    e.children[0].style.animationName = "popup";
                }, 500); }}
    else if (!(e.classList.contains('pop__body'))) {
        e.closest('.pop').children[0].style.animationName = "popdown";
        setTimeout(function(){
            e.closest('.pop').style.display = "none";
            e.closest('.pop').children[0].style.animationName = "popup";
        }, 500); }
    document.body.style.overflow = "scroll"; }

// popup done
function popDone() {
    document.getElementById("pop__done").style.display = "block";
    document.body.style.overflow = "hidden"; }
    
// popup Error
function popError() {
    document.getElementById("pop__Error").style.display = "block";
    document.body.style.overflow = "hidden"; }
    
// popup Error wifi
function popErrorWifi() {
    document.getElementById("pop__ErrorWifi").style.display = "block";
    document.body.style.overflow = "hidden"; }

// popup Check 
function popCheck() {
    document.getElementById("pop__Check").style.display = "block";
    document.body.style.overflow = "hidden"; }