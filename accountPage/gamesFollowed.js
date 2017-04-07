function populatePageGrid(gamesFollowed){
  for(var k = 0;k<gamesFollowed.length;k++){
    var outerDiv=document.createElement("DIV");
    var att = document.createAttribute("class");
    att.value="gridCell";
    outerDiv.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value=("gridCell"+k);
    outerDiv.setAttributeNode(att);

    var img = document.createElement("IMG");
    att = document.createAttribute("class");
    att.value = "cellImage";
    img.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = ("cellImage"+k);
    img.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = "..\\"+gamesFollowed[k].picture;
    img.setAttributeNode(att);

    var para = document.createElement("P");
    var content = document.createTextNode(gamesFollowed[k].gameName);
    para.appendChild(content);
    att = document.createAttribute("class");
    att.value="cellDesc";
    para.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value=("cellDesc"+k);
    para.setAttributeNode(att);

    outerDiv.appendChild(img);
    outerDiv.appendChild(document.createElement("BR"));
    outerDiv.appendChild(para);
    document.getElementById("favorite-games-list").appendChild(outerDiv);
  }
}
