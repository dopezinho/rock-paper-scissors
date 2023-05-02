/* Revisão Funções */

/*
function greeting() {
  console.log("aloo");
}

greeting();

const num = 2;
const function1 = function greeting() {
  console.log("salveeee");
};

console.log(function1);
console.log(typeof function1);
function1();

const object1 = {
  num: 2,
  fun: function greeting() {
    console.log("salveeeee memememe");
  },
};
object1.fun();

function display(param) {
  console.log(param);
}
display(2);

function run(param) {
  param();
}

run(function () {
  console.log("aiaiai que mina pelvelsa");
});
*/

/*
setTimeout(function () {
  console.log("tempim");
  console.log("tempinhoo");
}, 3000);

console.log("proxima linha");

setInterval(function () {
  console.log("intervalinho");
}, 3000);

console.log("intervalo2");
*/

/*
["faze comida", "lava a louça", "assisti ytzin"].forEach(function (
  value,
  index
) {
  console.log(index);
  console.log(value);
});
*/
/*
["faze comida", "lava a louça", "assisti ytzin"].forEach((value, index) => {
  if (value === "lava a louça") {
    return;
  }
  console.log(index);
  console.log(value);
});
*/
/*
const regularFunction = function (param, param2) {
  console.log("oiem");
  return 5;
};
regularFunction();

const arrowFunction = (param, param2) => {
  console.log("oiem");
  return 5;
};
arrowFunction();

const oneParam = (param) => {
  console.log(param + 1);
};
oneParam(2);

const oneLine = () => 2 + 3;
console.log(oneLine());
*/
/*
const object2 = {
  method: () => {

  },
  method() {} // easier to read
}
*/

/*
// .filter() and .map()

// hard
console.log(
  [1, -3, 5].filter((value, index) => {
    if (value >= 0) {
      return true;
    } else {
      return false;
    }
  })
);
// clean
console.log(
  [1, -3, 5].filter((value, index) => {
    return value >= 0;
  })
);

// hard
console.log(
  [1, 1, 3].map((value, index) => {
    return value * 2;
  })
);
// clean
console.log([1, 1, 3].map((value) => value * 2));
*/
