app.service('LoginTokenService',function(){
  var token="";
  this.AddToken=function(tokenvalue)
  {
    token=tokenvalue;
  }
  this.GetToken=function()
  {
    return token;
  }
});
