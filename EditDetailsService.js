app.service('EditDetailsService',function(){
  var taskId="";
  var taskName="";
  this.AddDetails=function(id,name)
  {
    taskId=id;
    taskName=name;
  }
  this.GetDetails=function()
  {
    var obj={
      id:taskId,
      name:taskName
    }
    return obj;
  }
});
