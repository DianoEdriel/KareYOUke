
var songlist=[{Name: "Edriel", Age:22},{Name: "Edriel2", Age:22}];

function addsong(){
    var name = window.prompt("Name:");
    var age= 21;
    var new_items= {"Name":name ,"Age":age };
    songlist.push(new_items);
    console.log(songlist)
}

function nextsong(){
    songlist.shift();
    console.log(songlist[0].Name)

}
  //console.log(songlist)
  //songlist.shift();
  //console.log(songlist[0].Name)