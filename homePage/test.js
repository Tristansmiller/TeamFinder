function populatePage(num){
  for(var k=0;k<num;k++){
    populatePageGrid(k);
    populateSideBar(k);
  }
}

function populatePageGrid(num){
    var outerDiv=document.createElement("DIV");
    var att = document.createAttribute("class");
    att.value="gridCell";
    outerDiv.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value=("gridCell"+num);
    outerDiv.setAttributeNode(att);

    var img = document.createElement("IMG");
    att = document.createAttribute("class");
    att.value = "cellImage";
    img.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = ("cellImage"+num);
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
    att.value=("cellDesc"+num);
    para.setAttributeNode(att);

    outerDiv.appendChild(img);
    outerDiv.appendChild(document.createElement("BR"));
    outerDiv.appendChild(para);
    document.getElementById("pageGrid").appendChild(outerDiv);
}
function populateSideBar(num){

    var outerDiv=document.createElement("DIV");
    var att = document.createAttribute("class");
    att.value="feedBox";
    outerDiv.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value=("feedbox"+num);
    outerDiv.setAttributeNode(att);

    var para = document.createElement("P");
    var content = document.createTextNode("TEST");
    para.appendChild(content);
    att = document.createAttribute("class");
    att.value="feedBoxContent";
    para.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = ("feedBoxContent"+num);
    para.setAttributeNode(att);


    outerDiv.appendChild(para);
    document.getElementById("sideFeed").appendChild(outerDiv);
  }
