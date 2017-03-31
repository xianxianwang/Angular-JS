var app=angular.module("myApp",[]);
//provider
app.config(function($provide){
	$provide.provider("deProvider",function(){
		this.$get = function(){
			var factory = {};
			factory.multiply = function(a,b){
				return a * b;
			}
			return factory;
		};
	});
});
//value
app.value("defaultInput",5);
//factory
app.factory("deProvider",function(){
	var factroy = {};
	factory.multiply = function(a,b){
		return a * b;
	}
	return factory;
});
//service
app.service("deService",function(deProvider){
	this.square = function(a){
		return deProvider.multiply(a,a);
	}
});
//controller
app.controller('myCtrl',function(
$scope,deService,defaultInput

){
	$scope.number = defaultInput;
	$scope.result = deService.square($scope.number);
	
	$scope.square = function(){
		$scope.result = deService.square($scope.number);
	}
 
	//实例
	$scope.name="John";
	$scope.firstname="Jack";
	$scope.lastname="Doe";
	$scope.num=2;
	$scope.price=21;
	$scope.flower={"Class":"lily","color":"white"};
	$scope.nums=[123,257,235,25];
	$scope.names=["Jani","Hege","Kai"];
	$scope.person=[
	{"firstname":"Jani","lastname":"Norway"},
	{"firstname":"Hege","lastname":"Sweden"},
	{"firstname":"Kai","lastname":"Denmark"}];
	$scope.bossom=function(){
		var x=$scope.flower;
		return x.Class+' '+x.color;
	}
	$scope.myVar=false;
	$scope.toggle=function(){
		$scope.myVar=!$scope.myVar;
	}
	$scope.copy=function(){
		$scope.user=angular.copy($scope.flower);
	}
	$scope.userName="John Dor";
	$scope.userEmail="John@163.com";
	$scope.x2=angular.lowercase($scope.name);
	$scope.x3=angular.uppercase($scope.name);
	$scope.x4=angular.isString($scope.name);
	$scope.x5=angular.isNumber($scope.name);
	//笔记应用
	$scope.message="";
	$scope.context="";
	$scope.clear=function(){
		$scope.message="";
	}
	$scope.save=function(){
		if($scope.message.length==0){
			$scope.context=$scope.message;
		}
		else{
			$scope.context+=$scope.message;
		}
	}
	$scope.left=function(){
		return 100-$scope.message.length;
	}
	//备忘录
	$scope.myText=true;
	$scope.todoList=[{"text":" Clean House",done:false}];
	$scope.add=function(){
		$scope.todoList.push({"text":$scope.todoText,done:false});
		$scope.todoText="";
	}
	$scope.delete=function(){
		var oldList=$scope.todoList;
		$scope.todoList=[];
		angular.forEach(oldList,function(x){
			if(!x.done){
				$scope.todoList.push(x);
			}
		});
	}
	//界面较好的备忘录
	$scope.todolist=[{"text":"Fight",done:false},
	{"text":"Sleep",done:false}];
	$scope.addList=function(){
		$scope.todolist.push({"text":$scope.todotext,done:false});
		$scope.todotext="";
	}
	$scope.removeList=function(){
		var oldlist=$scope.todolist;
		$scope.todolist=[];
		angular.forEach(oldlist,function(x){
			if(!x.done){
				$scope.todolist.push(x);
			}
		});
	}
	
	
	
	
	//END
});

















