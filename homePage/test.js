function populatePage(k){
  for(var k=0;k<num;k++){
    populatePageGrid(k);
    populateSideBar(k);
  }
}
<<<<<<< HEAD
function loggedAs(name) {
    var user = name;
    var p = document.createElement("P");
    var content = document.createTextNode("Logged in as "+name);
    p.appendChild(content);
    var att = document.createAttribute("id");
    att.value = "currentUser";
    p.setAttributeNode(att);
    document.getElementById("currentUserBox").appendChild(p);
}
function searchPage(num, filter) {
  for(var k = 0; k < num; k++) {
    var ele = document.getElementById("gridCell"+k);
    var desc = document.getElementById("cellDesc"+k).innerHTML;
    if (filter=="") {ele.style.display = "flex"}
    else if(!desc.toLowerCase().includes(filter.toLowerCase())) {ele.style.display = "none";} 
    else ele.style.display = "flex";
  }
}
function populatePageGrid(num){
  for(var k = 0;k<num;k++){
      var outerDiv=document.createElement("DIV");
      var att = document.createAttribute("class");
      att.value="gridCell";
      outerDiv.setAttributeNode(att);
      att = document.createAttribute("id");
      att.value=("gridCell"+k);
      outerDiv.setAttributeNode(att);

      var imgLink = document.createElement("A");
      att = document.createAttribute("href");
      att.value = "../gamePage/index.html";
      imgLink.setAttributeNode(att);
      var img = document.createElement("IMG");
      att = document.createAttribute("class");
      att.value = "cellImage";
      img.setAttributeNode(att);
      att = document.createAttribute("id");
      att.value = ("cellImage"+k);
      img.setAttributeNode(att);
      att = document.createAttribute("src");
      if(k%2==0) att.value = "assets/WoW.png";
      else att.value = "assets/CSGO.png";
      img.setAttributeNode(att);
      imgLink.appendChild(img);

      var para = document.createElement("P");
      var content;
      if(k%2==0) content = document.createTextNode("TEST DESC");
      else content = document.createTextNode("NAME");
      para.appendChild(content);
      att = document.createAttribute("class");
      att.value="cellDesc";
      para.setAttributeNode(att);
      att = document.createAttribute("id");
      att.value=("cellDesc"+k);
      para.setAttributeNode(att);
=======
function populatePageGrid(array){
  for(var k = 0;k<array.length;k++){
    var outerDiv=document.createElement("DIV");
    var att = document.createAttribute("class");
    att.value="gridCell";
    outerDiv.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value=("gridCell"+k);
    outerDiv.setAttributeNode(att);

    var imgLink = document.createElement("A");
    att = document.createAttribute("href");
    att.value = "../gamePage/index.php?id="+array[k].gameID;
    imgLink.setAttributeNode(att);
    var img = document.createElement("IMG");
    att = document.createAttribute("class");
    att.value = "cellImage";
    img.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = ("cellImage"+k);
    img.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = array[k].picture;
    img.setAttributeNode(att);
    imgLink.appendChild(img);

    var para = document.createElement("P");
    var content = document.createTextNode(array[k].name);
    para.appendChild(content);
    att = document.createAttribute("class");
    att.value="cellDesc";
    para.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value=("cellDesc"+k);
    para.setAttributeNode(att);
>>>>>>> refs/remotes/origin/Jacob

      outerDiv.appendChild(imgLink);
      outerDiv.appendChild(document.createElement("BR"));
      outerDiv.appendChild(para);
      document.getElementById("pageGrid").appendChild(outerDiv);
  }
}

function populateSideBar(num){
  for(var k=0;k<num;k++){
    var outerDiv=document.createElement("DIV");
    var att = document.createAttribute("class");
    att.value="feedBox";
    outerDiv.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value=("feedbox"+k);
    outerDiv.setAttributeNode(att);

    var para = document.createElement("P");
    var content = document.createTextNode("TEST");
    para.appendChild(content);
    att = document.createAttribute("class");
    att.value="feedBoxContent";
    para.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = ("feedBoxContent"+k);
    para.setAttributeNode(att);


    outerDiv.appendChild(para);
    document.getElementById("sideFeed").appendChild(outerDiv);
  }
}
