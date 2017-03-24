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

function populatePageGrid(array){
  for(var k = 0;k<array.length;k++){
    var outerDiv = createDiv("gridCell",k);

    var imgLink = createLink("cellImageLink","../gamePage/index.html",k);
    var img = createImage("cellImage",array[k].picture,k);
    imgLink.appendChild(img);
    outerDiv.appendChild(imgLink);

    outerDiv.appendChild(document.createElement("BR"))//creates a line break to align elements properly

    var para = createParagraph("cellDesc",array[k].name,k);
    outerDiv.appendChild(para);

    document.getElementById("pageGrid").appendChild(outerDiv);
  }
}

function createDiv(name,num){
  var div=document.createElement("DIV");

  var att = document.createAttribute("class");
  att.value=name;
  div.setAttributeNode(att);

  att = document.createAttribute("id");
  att.value=(name+""+num);
  div.setAttributeNode(att);

  if(name=="listNode")
    div.style.top=""+(250*num)+"px";
  return div;
}

function createLink(name,path,num){
  var link = document.createElement("A");

  var att = document.createAttribute("class");
  att.value=name;
  link.setAttributeNode(att);

  att = document.createAttribute("id");
  att.value=name+""+num;
  link.setAttributeNode(att);

  att = document.createAttribute("href");
  att.value = path;
  link.setAttributeNode(att);

  return link;
}

function createImage(name,path,num){
  var img = document.createElement("IMG");

  var att = document.createAttribute("class");
  att.value = name;
  img.setAttributeNode(att);

  att = document.createAttribute("id");
  att.value = name+""+num;
  img.setAttributeNode(att);

  att = document.createAttribute("src");
  att.value = path;
  img.setAttributeNode(att);

  return img;
}
function createParagraph(name,content,num){
  var para = document.createElement("P");

  var innerText = document.createTextNode(content);
  para.appendChild(innerText);

  att = document.createAttribute("class");
  att.value=name;
  para.setAttributeNode(att);

  att = document.createAttribute("id");
  att.value=(name+""+num);
  para.setAttributeNode(att);

  return para;

}

function createHeader(name,content,hNum,num){
  var header = document.createElement("H"+hNum);

  var innerText = document.createTextNode(content);
  header.appendChild(innerText);

  var att = document.createAttribute("class");
  att.value=name;
  header.setAttributeNode(att);

  att = document.createAttribute("id");
  att.value=(name+""+num);
  header.setAttributeNode(att);

  return header;
}

function createButton(name,content,num){
  var but = document.createElement("BUTTON");

  att = document.createAttribute("class");
  att.value = "btn btn-apply btn-primary "+name;
  but.setAttributeNode(att);

  att = document.createAttribute("id");
  att.value = name+""+num;
  but.setAttributeNode(att);

  att = document.createAttribute("type");
  att.value = "button";
  but.setAttributeNode(att);

  but.textContent = content;

  return but;
}
function populateSideBar(num){
  for(var k=0;k<num;k++){
    var outerDiv= createDiv("feedBox",k);

    var para = createParagraph("feedBoxContent","TEST",k);
    outerDiv.appendChild(para);

    document.getElementById("sideFeed").appendChild(outerDiv);
  }
}
