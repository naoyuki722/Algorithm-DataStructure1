function kadai(input_string) {
        var n = int(input_string[0])
        var a = []

        for (var i = 1; i <= n; i++) {
                var a1 = input_string[i].split(" ")
                a.push([int(a1[0]), int(a1[1])])
        }

        var sum = []
        var prod = []

        for (var i = 0; i < a.length; i++) {
                if (i == 0) {
                        sum = a[i]
                        prod = a[i]
                } else {
                        sum = cadd(sum, a[i])
                        prod = cmul(prod, a[i])
                }
        }

        puts(sum[0] + " " + sum[1])
        puts(prod[0] + " " + prod[1])

}

function cadd(a, b) {
        var sum = [(a[0] + b[0]), (a[1] + b[1])]
        return sum
}

function cmul(a, b) {
        var prod = [
		((a[0] * b[0]) - (a[1] * b[1])), ((a[0] * b[1]) + (a[1] * b[0]))
	]
        return prod
}
var puts = console.log
var int = parseInt
var float = parseFloat
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(inputData) {
        kadai(inputData.toString().split('\n'));
});
