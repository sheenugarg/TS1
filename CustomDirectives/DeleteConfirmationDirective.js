app.directive("w3TestDirective", function() {
    return {
        template : "Do You Want To Delete?<br><button type='button' ng-click='ConfirmDeletion()'>YES</button>&nbsp;<button type='button' ng-click='CancelDeletion()'>NO</button>"
    };
});
