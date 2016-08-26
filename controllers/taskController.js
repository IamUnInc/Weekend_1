myApp.controller("empController", ["$scope", function($scope) {
  console.log("emp controller working!");

  $scope.empFirstName = "";
  $scope.empLastName = "";
  $scope.empIdNumber = "";
  $scope.empJobTitle = "";
  $scope.empSalary = "";
  $scope.emps = [];
  $scope.totalSal = "";
  totalSalary = 0;
  second = 0;

  $scope.saveEmp = function() {
    person = {
      firstName:$scope.empFirstName,
      lastName:$scope.empLastName,
      idNumber:$scope.empIdNumber,
      jobTitle:$scope.empJobTitle,
      salary:$scope.empSalary
    }
  $scope.emps.push(person);
  console.log($scope.emps);
  int = parseInt($scope.empSalary)
    second = parseInt(int)
 console.log(second);
  totalSalary += second;

  $scope.totalSal = totalSalary;


  }

}]);






// var array = [];
//     var monthSal = 0;
//     var salTol = 0;
//     var intSal = 0;
//
//     $('#salaryinfo').on('submit', function(event) {
//       event.preventDefault();
//
//       // initialize a new variable as an empty object
//       var values = {};
//
//       // convert the form inputs into an array
//       var fields = $('#salaryinfo').serializeArray();
//
//       // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
//       fields.forEach(function(element, index, array) {
//         // review index notation vs. dot notation on objects
//         // here, dot notation wouldn't work
//         values[element.name] = element.value;
//       });
//
//       console.log(values);
//
//       // clear out inputs
//       $('#salaryinfo').find('input[type=text]').val('');
//
//       // append to DOM
//       appendDom(values);
//     });
//
//     function appendDom(empInfo) {
//
//       //var intSal = parseInt(empInfo.employeesalary);
//       var intSal = empInfo.employeesalary;
//       console.log(intSal);
//       var monthSal = intSal / 12;
//       console.log(salTol);
//
//       salTol = salTol + monthSal;
//
//       console.log(salTol);
//
//       $('#container').append('<div class="person"></div>');
//       var $el = $('#container').children().last();
//
//       $el.append('<p>' + empInfo.employeefirstname + ' ' +
//       empInfo.employeelastname + ' ' + empInfo.employeeidnumber + ' ' +
//       empInfo.employeejobtitle + ' ' + empInfo.employeesalary +
//       " Salary Total Per Month: $" + salTol + '</p>');
//     };
