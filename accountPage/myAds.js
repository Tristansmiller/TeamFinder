function populateMyAds(userAds){
  for(var k=0;k<userAds.length;k++){
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
	att.value = ("../"+userAds[k].picture);
    adGameImage.setAttributeNode(att);

    var adGameName = document.createElement("P");
    att = document.createAttribute("class");
    att.value = "ad-game-name";
    adGameName.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = ("ad-game-name"+k);
    adGameName.appendChild(document.createTextNode(userAds[k].gameName));

    var adDescription = document.createElement("P");
    att = document.createAttribute("class");
    att.value = "ad-description";
    adDescription.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = ("ad-description"+k);
    adDescription.setAttributeNode(att);
    adDescription.appendChild(document.createTextNode(userAds[k].description));

    leftQuarterDiv.appendChild(adGameImage);
    leftQuarterDiv.appendChild(adGameName);
    adBlock.appendChild(leftQuarterDiv);
    adBlock.appendChild(adDescription);

    document.getElementById("my-ads-list").appendChild(adBlock);
  }
}
