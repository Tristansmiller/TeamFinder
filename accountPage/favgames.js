function populatePageGrid(num){
  for(var k = 0;k<num;k++){
    var outerDiv = createDiv("gridCell",k);

    var img = createImage("cellImage","assets/test.png",k);
    outerDiv.appendChild(img);

    outerDiv.appendChild(document.createElement("BR"))//creates a line break to align elements properly

    var para = createParagraph("cellDesc","TEST DESC",k);
    outerDiv.appendChild(para);

    document.getElementById("favorite-games-list").appendChild(outerDiv);
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
