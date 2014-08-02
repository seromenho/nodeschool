var args = process.argv;
var result = 0;
for (var i = args.length - 1; i >= 2; i--) {
	result += Number(args[i]);
}
console.log(result);