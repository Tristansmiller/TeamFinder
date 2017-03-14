function populatePage(k){
  for(var k=0;k<num;k++){
    populatePageGrid(k);
    populateSideBar(k);
  }
}

function populatePageList(num){
  for(var k = 0;k<num;k++){
    var outerDiv=document.createElement("DIV");
    var att = document.createAttribute("class");
    att.value="listNode";
    outerDiv.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value=("listNode"+k);
    outerDiv.setAttributeNode(att);

    var imgNode = document.createElement("DIV");
    att = document.createAttribute("class");
    att.value = "imageNode";
    imgNode.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value=("imageNode");
    imgNode.setAttributeNode(att);
    outerDiv.appendChild(imgNode);

    var img = document.createElement("IMG");
    att = document.createAttribute("id");
    att.value = ("listImage");
    img.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = "assets/test.png";
    img.setAttributeNode(att);
    imgNode.appendChild(img);

    var para = document.createElement("P");
    var content = document.createTextNode("USERNAME");
    para.appendChild(content);
    att = document.createAttribute("class");
    att.value="listUSR";
    para.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value=("listUSR");
    para.setAttributeNode(att);
    imgNode.appendChild(para);

    var info = document.createElement("DIV");
    att = document.createAttribute("class");
    att.value = "listInfo";
    info.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = "listInfo";
    info.setAttributeNode(att);
    var p = document.createElement("P");
    var cont = document.createTextNode("AD INFO");
    p.appendChild(cont);
    att = document.createAttribute("class");
    att.value="listInfoP";
    para.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value=("listInfoP"+k);
    p.setAttributeNode(att);
    info.appendChild(p);
    outerDiv.appendChild(info);

    /*outerDiv.appendChild(img);
    outerDiv.appendChild(document.createElement("BR"));
    outerDiv.appendChild(para);*/
    document.getElementById("pageList").appendChild(outerDiv);
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
