function populatePageList(num){
  for(var k = 0;k<num;k++){
    var outerDiv = createDiv("listNode",k);
    var imgNode = createDiv("imageNode",k);
    outerDiv.appendChild(imgNode);

    var imgLink = createLink("imgLink","../gamePage/index.html",k);
    var img = createImage("listImage","assets/test.png",k);
    imgLink.appendChild(img);
    imgNode.appendChild(imgLink);

    var para = createParagraph("listUSR","USERNAME",k);
    imgNode.appendChild(para);

    var info = createDiv("listInfo",k);
    outerDiv.appendChild(info);

    var h2 = createHeader("listInfoP","AD TITLE",2,k);
    info.appendChild(h2);

    var but = createButton("applicantsButton","Applicants",k);
    specifyButtonAction(but,"showApplicant("+k+");");
    outerDiv.appendChild(but);

    var applicants = createDiv("applicants-box",k);
    outerDiv.appendChild(applicants);

    document.getElementById("my-ads-list").appendChild(outerDiv);

    populateApplicants(10,k);
  }
}
function showApplicant(num){
  var applicantBox = document.getElementById("applicants-box"+num);
  if(applicantBox.style.display=="none"){
    applicantBox.style.display = "block";
  }
  else {
    applicantBox.style.display = "none";
  }
}

function specifyButtonAction(button,action){
  var actionAtt = document.createAttribute("onClick");
  actionAtt.value=action;
  button.setAttributeNode(actionAtt);
}

function populateApplicants(num,num2){
  for(var k=0;k<num;k++){
    var applicantDiv = createDiv("applicant-entry",k);
    var applicantName = createParagraph("applicant-name","Applicant "+k,k);
    var applicantRating = createImage("applicant-rating","assets/testRatings.png",k);
    var applicantApprove = createButton("applicant-approve","Approve",k);
    applicantDiv.appendChild(applicantName);
    applicantDiv.appendChild(applicantRating);
    applicantDiv.appendChild(applicantApprove);
    document.getElementById("applicants-box"+num2).appendChild(applicantDiv);
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

  if(name=="listNode"){
    div.style.top=""+((250*num)+(window.innerHeight*.10))+"px";
    div.style.zIndex=999-num;
  }
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
