define(['jquery','underscore','backbone','/js/default/'+app.action+'.js'],function($,_,Backbone,module){
    return {
        init: function(){
            module.run();
        }
    }
});
