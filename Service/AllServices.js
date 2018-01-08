app.service('AllappServices',function(config,$http) {
  var ipAddress=config.ipAddress;
  this.TaskSystem=function(method,address,taskdata,token,taskid)
  {
    var requestData={};
    var headerData={
      'Content-Type': "application/json"
    };
    requestData.method=method;
    requestData.url=ipAddress+'/'+address;
    if(address=='login')
    {
        requestData.data=taskdata;
    }
    if(address='add_task')
    {
      headerData.access_token=token;
      requestData.data=taskdata;
    }
    if(address=='edit_task')
    {
      headerData.access_token=token;
      requestData.data=taskdata;
    }
    if(address=='register')
    {
      requestData.data=taskdata;
    }
    if(address='view_all_task')
    {
      headerData.access_token=token;
    }
    if(address=='task_status')
    {
      headerData.access_token=token;
    }
    if(address=='delete')
    {
      headerData.access_token=token;
    }
    if(taskid!=null && taskid!=undefined && taskid!="")
    {
      headerData.task_id=taskid;
    }
    requestData.headers=headerData;
    return $http(requestData);
  }
});
