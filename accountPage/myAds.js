function populateMyAds(num){
  for(var k=1;k<=num;k++){
    var adBlock=document.createElement("DIV");
    var att = document.createAttribute("class");
    att.value="ad-block";
    adBlock.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value=("ad-block"+k);
    adBlock.setAttributeNode(att);
    adBlock.style.top=(""+(27.5*(k-1)+5)+"%")

    var leftQuarterDiv = document.createElement("DIV");
    att = document.createAttribute("class");
    att.value = "left-quarter-block";
    leftQuarterDiv.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = ("left-quarter-block"+k);
    leftQuarterDiv.setAttributeNode(att);

    var adGameImage = document.createElement("IMG");
    att = document.createAttribute("class");
    att.value = "ad-game-image";
    adGameImage.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = ("ad-game-image"+k);
    adGameImage.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = ("assets/testAvatar.png");
    adGameImage.setAttributeNode(att);

    var adGameName = document.createElement("P");
    att = document.createAttribute("class");
    att.value = "ad-game-name";
    adGameName.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = ("ad-game-name"+k);
    adGameName.appendChild(document.createTextNode("Test Name"));

    var adDescription = document.createElement("P");
    att = document.createAttribute("class");
    att.value = "ad-description";
    adDescription.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = ("ad-description"+k);
    adDescription.setAttributeNode(att);
    adDescription.appendChild(document.createTextNode("Test Description"));

    leftQuarterDiv.appendChild(adGameImage);
    leftQuarterDiv.appendChild(adGameName);
    adBlock.appendChild(leftQuarterDiv);
    adBlock.appendChild(adDescription);

    document.getElementById("my-ads-list").appendChild(adBlock);
  }
}
