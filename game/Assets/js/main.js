//////////time clock/////////

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var session = "AM";

    if (h > 12) {
        session = "PM"
    }

    m = checkTime(m);
    document.getElementById('time').innerHTML =
    h + ":" + m + " " + session;
    setTimeout(startTime, 1000);
}

//add 0 if < than 10

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

//starts clock

startTime();

////////////////////////////



//////////Display diffrent divs/////////
$(document).ready(function () {
    $('#page-left').on('click', 'a', function () {
        $('.current').not($(this).closest('li').addClass('current')).removeClass('current');
        // fade out all open subcontents
        $('.pbox:visible').hide(0);
        // fade in new selected subcontent
        $('.pbox[id=' + $(this).attr('data-id') + ']').show(0);
    }).find('a:first').click();
});
////////////////////////////



//////////ID/USER/LEVEL/MONEY/////////

//Money
function moneyCount(){
    var coins = 100000;

    document.getElementById('money').innerHTML = 
    coins ;
}

moneyCount()


//Level
function lvlCount(){
    var lvl = 100;
    var txt = "Lvl : ";

    document.getElementById('lvl').innerHTML = 
    txt + lvl ;
}

lvlCount()


//ID

function nameDisplay(){
    var name = "Laurens Tobias";

    document.getElementById('user').innerHTML = 
    name;
}

nameDisplay()


/*var username=$('input').val();
$.ajax({
url:'../php/users.php',
method:'get',
data:{name:username},
success:function(data)
{
alert("Sucess");
},
error:function(data)
{
alert("error");
}
});*/

////////////////////////////

//////////Experiance/////////
function lvlUp(){
    var xp = 10
    var lvl1 = 100
    var lvl2 = 1000
    var lvl3 = 10000

    if (xp ) {}
}