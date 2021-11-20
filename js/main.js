//salaries sum function :)

function sumSalaries(obj) {
  var resultSum = 0;
  for (const key in obj) {
    resultSum+=obj[key]
  };
  return resultSum;
};

var salaries = {
	"Akmal": 1200,
	"Salim": 5200,
	"Karima": 1800,
  "Asror": 800
}

console.log(sumSalaries(salaries));