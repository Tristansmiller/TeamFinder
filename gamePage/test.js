function populatePage(k){
  for(var k=0;k<num;k++){
    populatePageGrid(k);
    populateSideBar(k);
  }
}

<<<<<<< HEAD
function populatePageList(array){
  for(var k = 0;k<array.length;k++){
=======
function adjustPage(){
  document.getElementById("pageBody").style.width=""+(screen.width)-205+"px";
}
function populatePageList(num){
  for(var k = 0;k<num;k++){
>>>>>>> refs/remotes/origin/master
    var outerDiv=document.createElement("DIV");
    var att = document.createAttribute("class");
    att.value="listNode";
    outerDiv.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value=("listNode"+k);
    outerDiv.setAttributeNode(att);
    outerDiv.style.top=""+(250*k)+"px";

    var imgNode = document.createElement("DIV");
    att = document.createAttribute("class");
    att.value = "imageNode";
    imgNode.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value=("imageNode"+k);
    imgNode.setAttributeNode(att);
    outerDiv.appendChild(imgNode);

    var imgLink = document.createElement("A");
    att = document.createAttribute("href");
    att.value = "../accountPage/indexP.html";
    imgLink.setAttributeNode(att);
    var img = document.createElement("IMG");
    att = document.createAttribute("class");
    att.value = "listImage";
    img.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = "listImage"+k;
    att = document.createAttribute("src");
    att.value = "assets/test.png";
    img.setAttributeNode(att);
    imgLink.appendChild(img);
    imgNode.appendChild(imgLink);

    var para = document.createElement("P");
    var content = document.createTextNode(array[k].userID);
    para.appendChild(content);
    att = document.createAttribute("class");
    att.value="listUSR";
    para.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value=("listUSR"+k);
    para.setAttributeNode(att);
    imgNode.appendChild(para);

    var info = document.createElement("DIV");
    att = document.createAttribute("class");
    att.value = "listInfo";
    info.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = "listInfo"+k;
    info.setAttributeNode(att);
<<<<<<< HEAD
    var p = document.createElement("P");
    var cont = document.createTextNode(array[k].description);
    p.appendChild(cont);
=======
    var h2 = document.createElement("H2");
    var cont = document.createTextNode("AD TITLE");
    h2.appendChild(cont);
>>>>>>> refs/remotes/origin/master
    att = document.createAttribute("class");
    att.value="listInfoP";
    h2.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value=("listInfoP"+k);
    h2.setAttributeNode(att);


    var but = document.createElement("BUTTON");
    att = document.createAttribute("class");
    att.value = "btn btn-apply btn";
    but.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = "applyButton";
    but.setAttributeNode(att);
    att = document.createAttribute("type");
    att.value = "button";
    but.setAttributeNode(att);
    but.textContent = "Apply";
    but.style.color = "white";

    info.appendChild(h2);
    outerDiv.appendChild(info);
    outerDiv.appendChild(but);

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