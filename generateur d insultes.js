var list1 = ["vielle", "moche", "mini"];
var list2 = [ "chausette", "cruche", "serpillière"];
var list3 = ["moisi", "puante", "débile"];

for (i = 1; i <= 3; i++){
    var motlist1 = list1[Math.floor(Math.random() * list1.length)];
    var motlist2 = list2[Math.floor(Math.random() * list2.length)];    
    var motlist3 = list3[Math.floor(Math.random() * list3.length)];
    console.log(i);
    alert(motlist1 + " " + motlist2 + " " + motlist3);
}