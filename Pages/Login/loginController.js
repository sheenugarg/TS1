app.controller('loginctrl',function($scope,$state,LoginTokenService,AllappServices){
$scope.login=function()
 {
   $scope.loader=true;
   var data={
     email: $scope.login_email,password:$scope.login_password
   }
   var response=AllappServices.TaskSystem('POST','login',data);
   response.then(function(success){
     $scope.loader=false;
     if(success.data.error==0)
     {
       LoginTokenService.AddToken(success.data.token);
       $state.go('homepage.AddTask');
     }
     if(success.data.error==1)
     {
       $scope.Login_Messages=true;
       $scope.LoginMessages=success.data.message;
     }
   },function(err){
     $scope.loader=false;
     $scope.Login_Messages=true;
     $scope.LoginMessages="Error Occurred In Communicating To Server";
   });
 }
})
