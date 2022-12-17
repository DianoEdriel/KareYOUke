var songlist=[{Name: "Edriel", Age:22},{Name: "Edriel2", Age:22}];
  console.log(songlist)
  var name = window.prompt("Name:");
  var age= 21;
  songlist.shift();
  var new_items= {"Name":name ,"Age":age };
  songlist.push(new_items);
  
  console.log(songlist[0].Name)