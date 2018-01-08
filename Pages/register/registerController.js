app.controller('registerCtrl',function($scope,$state,AllappServices){
  $scope.signup=function()
    {
      $scope.loader=true;
      var data={
        email:$scope.user_email,
        password:$scope.user_password,
        con_password:$scope.user_confirm_password
      }
      var response=AllappServices.TaskSystem('POST','register',data);
      response.then(function(success){
        $scope.loader=false;
        $state.go('mainpage_login');
      },function(err){
        $scope.loader=false;
        $scope.Register_Messages=true;
        $scope.RegisterMessages=err.data.message;
      });
    }
})
