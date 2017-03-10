function populatePage(k){
  for(var k=0;k<num;k++){
    populatePageGrid(k);
    populateSideBar(k);
  }
}
//Test comment addition
function populatePageGrid(num){
  for(var k = 0;k<num;k++){
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
    att.value = "assets/test.png";
    img.setAttributeNode(att);

    var para = document.createElement("P");
    var content = document.createTextNode("TEST DESC");
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
