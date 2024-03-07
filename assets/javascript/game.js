var randomNumberarray = ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"];
var crystalNumberarray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
var randomNumber = randomNumberarray[Math.floor(Math.random() * randomNumberarray.length)];
var crystalNumber = crystalNumberarray[Math.floor(Math.random() * crystalNumberarray.length)];
var totalNumber = 0
var Wins = 0
var Losses = 0

var randomNumberElement = $("#randomnumber")
var totalNumberElement = $("#totalscore")
var winsElement = $("#wins")
var lossesElement = $("#losses")

var crystalNumberElement1 = $("#crystal1")
var crystalNumberElement2 = $("#crystal2")
var crystalNumberElement3 = $("#crystal3")
var crystalNumberElement4 = $("#crystal4")

crystalNumberElement1.attr("points", crystalNumberarray[Math.floor(Math.random() * crystalNumberarray.length)]);
crystalNumberElement2.attr("points", crystalNumberarray[Math.floor(Math.random() * crystalNumberarray.length)]);
crystalNumberElement3.attr("points", crystalNumberarray[Math.floor(Math.random() * crystalNumberarray.length)]);
crystalNumberElement4.attr("points", crystalNumberarray[Math.floor(Math.random() * crystalNumberarray.length)]);

randomNumberElement.text(randomNumber);

$(".crystal").on("click", function () {
    var points = $(this).attr("points")
    totalNumber = parseInt(totalNumber) + parseInt(points)
    if (totalNumber === parseInt(randomNumber)) {
        Wins++;
        totalNumber = 0;
        randomNumber = randomNumberarray[Math.floor(Math.random() * randomNumberarray.length)];
        winsElement.text("Wins: " + Wins);
        crystalNumberElement1.attr("points", crystalNumberarray[Math.floor(Math.random() * crystalNumberarray.length)]);
        crystalNumberElement2.attr("points", crystalNumberarray[Math.floor(Math.random() * crystalNumberarray.length)]);
        crystalNumberElement3.attr("points", crystalNumberarray[Math.floor(Math.random() * crystalNumberarray.length)]);
        crystalNumberElement4.attr("points", crystalNumberarray[Math.floor(Math.random() * crystalNumberarray.length)]);
    }
    if (totalNumber > parseInt(randomNumber)) {
        Losses++;
        totalNumber = 0;
        randomNumber = randomNumberarray[Math.floor(Math.random() * randomNumberarray.length)];
        lossesElement.text("Losses: " + Losses);
        crystalNumberElement1.attr("points", crystalNumberarray[Math.floor(Math.random() * crystalNumberarray.length)]);
        crystalNumberElement2.attr("points", crystalNumberarray[Math.floor(Math.random() * crystalNumberarray.length)]);
        crystalNumberElement3.attr("points", crystalNumberarray[Math.floor(Math.random() * crystalNumberarray.length)]);
        crystalNumberElement4.attr("points", crystalNumberarray[Math.floor(Math.random() * crystalNumberarray.length)]);
    }
    totalNumberElement.text(totalNumber);
    randomNumberElement.text(randomNumber);
});
