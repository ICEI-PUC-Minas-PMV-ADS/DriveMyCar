
var data1 = "input(#date1)";
var data2 = "imput(#date2)";

var diff = moment(data2, "DD/MM/AAAA").diff(moment(data1, "DD/MM/AAAA"));

var dias = moment.duration(diff).asDays();
console.log(dias); //105
