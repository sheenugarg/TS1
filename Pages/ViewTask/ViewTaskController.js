app.controller("ViewTaskCtrl", function($scope,LoginTokenService,$state,EditDetailsService,$timeout,AllappServices) {
  $scope.alltasks=[];
  $scope.taskDeleted="";
  var mytoken=LoginTokenService.GetToken();
  if(mytoken==null || mytoken==undefined|| mytoken=="")
  {
    $state.go('mainpage_login');
  }
  $scope.ViewAllTasks=function()
  {
    $scope.loader=true;
    var response=AllappServices.TaskSystem('GET','view_all_task',{},mytoken);
    response.then(function(success){
      $scope.loader=false;
      if(success.data.error==0)
      {
        $scope.alltasks=success.data.data;
      }
      else {
        $scope.View_Task_Messages=true;
        $scope.ViewTaskMessages="Error Occurred";
      }
    },function(error){
      $scope.loader=false;
      $scope.View_Task_Messages=true;
      $scope.ViewTaskMessages="Error Occurred While Communicating To Server!!!";
    });
  }
  $scope.ViewAllTasks();
  $scope.GetClassOnTaskStatus=function(taskDate,taskStatus)
  {
    var today=new Date();
    taskDate=new Date(taskDate);
    if(taskStatus==true)
    {
      return "complete";
    }
    else if(today>taskDate)
    {
      return "overdue";
    }
    else {
      return "normal";
    }
  }
  $scope.ChangeTaskStatus=function(taskid)
  {
    $scope.loader=true;
    var response=AllappServices.TaskSystem('GET','task_status',{},mytoken,taskid);
    response.then(function(success){
      $scope.loader=false;
      if(success.data.error==0)
      {
        $scope.ViewAllTasks();
      }
      else {
        $scope.View_Task_Messages=true;
        $scope.ViewTaskMessages="Error occurred while updating task status";
        ClearViewTaskMessages();
      }
    },function(error){
      $scope.loader=false;
      $scope.View_Task_Messages=true;
      $scope.ViewTaskMessages="Error occurred while updating task status..........Please Try again later";
      ClearViewTaskMessages();
    });
  }
  function ClearViewTaskMessages()
  {
    $timeout(function(){
      $scope.ViewTaskMessages="";
      $scope.View_Task_Messages=false;
    },1000);
  }
  $scope.EditTask=function(id,task)
  {
    EditDetailsService.AddDetails(id,task);
    $state.go('homepage.editTask');
  }
  $scope.DeleteTask=function(taskid)
  {
      $scope.taskDeleted=taskid;
  }
  $scope.ConfirmDeletion=function()
  {
    $scope.loader=true;
    var response=AllappServices.TaskSystem('DELETE','delete',{},mytoken,$scope.taskDeleted);
    response.then(function(success){
      $scope.loader=false;
      if(success.data.error==0)
      {
        $scope.ViewAllTasks();
      }
      else {
        $scope.View_Task_Messages=true;
        $scope.ViewTaskMessages="Error occurred while deleting task";
        ClearViewTaskMessages();
      }
    },function(error){
      $scope.loader=false;
      $scope.View_Task_Messages=true;
      $scope.ViewTaskMessages="Error occurred while communicating to server";
      ClearViewTaskMessages();
    });
  }
  $scope.CancelDeletion=function()
  {
    $scope.taskDeleted="";
    $scope.ViewAllTasks();
  }
});
