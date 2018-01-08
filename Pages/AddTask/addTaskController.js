app.controller('addTaskCtrl',function($scope,$state,LoginTokenService,AllappServices){
  var accesstoken=LoginTokenService.GetToken();
  if(accesstoken==null || accesstoken==undefined|| accesstoken=="")
  {
    $state.go('mainpage_login');
  }
  $scope.AddTask=function()
  {
    $scope.loader=true;
    var taskDate=new Date($scope.mytaskdate);
    var data={
      task:$scope.mytask,
      date:taskDate
    }
    var response=AllappServices.TaskSystem('POST','add_task',data,accesstoken);
    response.then(function(success){
      $scope.loader=false;
      if(success.data.error==0)
      {
        $state.go('homepage.ViewAllTasks');
      }
      else {
        $scope.Add_Task_Message=true;
        $scope.AddTaskMessage="error occurred while inserting Task";
      }
    },function(error){
      $scope.loader=false;
      $scope.Add_Task_Message=true;
      $scope.AddTaskMessage="error occurred while inserting Task.....Please Try Again Later";
    });
  }
})
