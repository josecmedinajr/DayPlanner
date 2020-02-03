/* doesn't work
var NowMoment = moment().format();
var eDisplayMoment = document.getElementById("displayMoment");
eDisplayMoment.innerHTML = NowMoment;
*/

var dt = new Date();
document.getElementById("datetime").innerHTML = moment().format();
