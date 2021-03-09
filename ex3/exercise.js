var pro1 = Promise.resolve(3);
var pro2 = 42;
var pro3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, 'tri');
});

Promise.all([pro1, pro2, pro3]).then((result) => {
  console.log(result);
});