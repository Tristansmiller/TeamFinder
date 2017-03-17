function populateFriends(num){
  for(var k=1;k<=num;k++){
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
    att.value = ("assets/testAvatar.png");
    avatarImg.setAttributeNode(att);

    var friendName = document.createElement("P");
    att = document.createAttribute("class");
    att.value = "friend-name";
    friendName.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = ("friend-name"+k);
    friendName.appendChild(document.createTextNode("Test Name"));

    var friendBio = document.createElement("P");
    att = document.createAttribute("class");
    att.value = "friend-bio";
    friendBio.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = ("friend-bio"+k);
    friendBio.setAttributeNode(att);
    friendBio.appendChild(document.createTextNode("Test Bio"));

    leftQuarterDiv.appendChild(avatarImg);
    leftQuarterDiv.appendChild(friendName);
    friendBlock.appendChild(leftQuarterDiv);
    friendBlock.appendChild(friendBio);

    document.getElementById("friends-list").appendChild(friendBlock);
  }
}
