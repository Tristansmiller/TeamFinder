function populateFriends(friendsList){
  for(var k=0;k<=friendsList.length;k++){
    var friendBlock=document.createElement("DIV");
    var att = document.createAttribute("class");
    att.value="friend-block";
    friendBlock.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value=("friend-block"+k);
    friendBlock.setAttributeNode(att);
    friendBlock.style.top=(""+(27.5*(k-1)+5)+"%")

    var leftQuarterDiv = document.createElement("DIV");
    att = document.createAttribute("class");
    att.value = "left-quarter-block";
    leftQuarterDiv.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = ("left-quarter-block"+k);
    leftQuarterDiv.setAttributeNode(att);

    var avatarImg = document.createElement("IMG");
    att = document.createAttribute("class");
    att.value = "friend-avatar";
    avatarImg.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = ("friend-avatar"+k);
    avatarImg.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = (friendsList[k].picture);
    avatarImg.setAttributeNode(att);

    var friendName = document.createElement("P");
    att = document.createAttribute("class");
    att.value = "friend-name";
    friendName.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = ("friend-name"+k);
    friendName.appendChild(document.createTextNode(friendsList[k].username));

    var friendBio = document.createElement("P");
    att = document.createAttribute("class");
    att.value = "friend-bio";
    friendBio.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = ("friend-bio"+k);
    friendBio.setAttributeNode(att);
    friendBio.appendChild(document.createTextNode(friendsList[k].description));

    leftQuarterDiv.appendChild(avatarImg);
    leftQuarterDiv.appendChild(friendName);
    friendBlock.appendChild(leftQuarterDiv);
    friendBlock.appendChild(friendBio);

    document.getElementById("friends-list").appendChild(friendBlock);
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

  if(name=="friend-block")
    div.style.top=(""+(27.5*(k-1)+5)+"%");
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