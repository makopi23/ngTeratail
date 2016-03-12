angular.module("myApp", [])
	/*
	.controller('appCtrl',
		[ '$scope', '$http', function($scope, $http) {
			// this.clickButton = function(){
			// console.log("click!!!");
			// alert('click!');
			// };

			this.list = [];
			this.clickButton = function() {
				this.todo.date = Date.now();
				this.list.push(this.todo)
				this.todo = {
					name1 : this.todo.name1
				};
			}

			this.clickList = function(item) {
				item.done = !item.done;
			}
		} ]);
	*/
.component('todo', {
	controllerAs : 'app',
	controller : function() {
		this.list = [];
		this.clickButton = function() {
			this.todo.date = Date.now();
			this.list.push(this.todo)
			this.todo = {};
		}
		this.clickList = function(item) {
			item.done = !item.done;
		}
		this.clickDeleteButton = function(item) {
			var idx = this.list.indexOf(item);
			if (idx >= 0) {
				this.list.splice(idx, 1);
			}
		}
	},
	templateUrl : 'todo.html'
    	/*
		 * template: `<form name="todoForm"> <div>1 + 1 = {{ 1 + 1 }}</div>
		 * <br /> <!-- ng-ifで一時的に非表示に。消すのもったいないので --> <input type="text"
		 * name="todoName" ng-model="app.todo.name1" ng-init="todo = 100"
		 * required /> <p ng-if="false">{{todo * 1.08 | currency : '￥' : 0}}</p>
		 * <p ng-show="todoForm.todoName.$invalid">必須です！</p> <!-- 小数点0桁を指定 -->
		 *
		 * <button ng-click="app.clickButton()"
		 * ng-disabled="todoForm.$invalid">click</button> <br /> 検索：<input
		 * type="text" ng-model="app.search" /> </form>
		 *
		 * <!-- <ul> --> <!-- <li ng-repeat="item in app.list">{{item.name1}}</li>
		 * --> <!-- </ul> -->
		 *
		 * <ul> <span> <li ng-click="app.clickList(item)" ng-class="{done:
		 * item.done}" ng-repeat="item in app.list | filter : app.search |
		 * orderBy : '-date'">{{item.name1}} - {{item.date | date: 'yyyy/MM/dd
		 * HH:mm:ss'}}</li> </span> </ul>`
		 */
  });
