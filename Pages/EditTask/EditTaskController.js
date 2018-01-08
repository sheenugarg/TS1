app.controller('EditTaskCtrl',function($scope,$state,EditDetailsService,LoginTokenService,$timeout,AllappServices){
var obj=EditDetailsService.GetDetails();
var mytoken=LoginTokenService.GetToken();
if(mytoken==null || mytoken==undefined|| mytoken=="")
{
  $state.go('mainpage_login');
}
$scope.EditTaskId=obj.id;
$scope.EditTaskName=obj.name;
$scope.UpdateTask=function()
  {
    $scope.loader=true;
    var data={
      task:$scope.EditTaskNewName
    }
    var response=AllappServices.TaskSystem('POST','edit_task',data,mytoken,$scope.EditTaskId);
    response.then(function(success){
      $scope.loader=false;
      if(success.data.error==0)
      {
        $state.go('homepage.ViewAllTasks');
      }
      else {
        $scope.Edit_Messages=true;
        $scope.EditMessages="Error Occurred While Updating Task";
      }
    },function(error){
      $scope.loader=false;
      $scope.Edit_Messages=true;
      $scope.EditMessages="Error Occurred While Updating Task....Try Again Later!!!";
    });
  }
})
