function setSettingAvatar(){
  sessionStorage.setItem("settingImg",document.getElementById("imgFile").value);
}

function retrieveSettingsInfo(){
  var emailString = document.getElementById("emailSetting").value;
  var usernameString = document.getElementById("usernameSetting").value;
  var passwordString = document.getElementById("passwordSetting").value;
  var bioString = document.getElementById("bioSetting").value;

  console.log("Email: "+emailString);
  console.log("Username: "+usernameString);
  console.log("Password: "+passwordString);
  console.log("Bio: "+bioString);

}
