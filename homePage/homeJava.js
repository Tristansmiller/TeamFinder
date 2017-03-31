function populatePage(k){
  for(var k=0;k<num;k++){
    populatePageGrid(k);
    populateSideBar(k);
  }
}
function populatePageGrid(listOfGames){
  for(var k = 0;k<listOfGames.length;k++){
    var outerDiv=document.createElement("DIV");
    var att = document.createAttribute("class");
    att.value="gridCell";
    outerDiv.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value=("gridCell"+k);
    outerDiv.setAttributeNode(att);

    var imgLink = document.createElement("A");
    att = document.createAttribute("href");
    att.value = "../gamePage/index.php?id="+listOfGames[k].gameID;
    imgLink.setAttributeNode(att);
    var img = document.createElement("IMG");
    att = document.createAttribute("class");
    att.value = "cellImage";
    img.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = ("cellImage"+k);
    img.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = "..\\"+listOfGames[k].picture;
    img.setAttributeNode(att);
    imgLink.appendChild(img);

    var para = document.createElement("P");
    var content = document.createTextNode(listOfGames[k].gameName);
    para.appendChild(content);
    att = document.createAttribute("class");
    att.value="cellDesc";
    para.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value=("cellDesc"+k);
    para.setAttributeNode(att);

    outerDiv.appendChild(imgLink);
    outerDiv.appendChild(document.createElement("BR"));
    outerDiv.appendChild(para);
    document.getElementById("pageGrid").appendChild(outerDiv);
  }
}

function populateSideBar(userAds){
  for(var k=0;k<userAds.length;k++){
    var outerDiv=document.createElement("DIV");
    var att = document.createAttribute("class");
    att.value="feedBox";
    outerDiv.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value=("feedbox"+k);
    outerDiv.setAttributeNode(att);

    var para = document.createElement("P");
    var content = document.createTextNode(userAds[k].description);
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
