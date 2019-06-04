function kadai(input_string) {

        function binary(b, n, left, right) {
                if (n == 0) {
                        puts(left.toFixed(8) + " " + right.toFixed(8));
                } else {
                        var m = (left + right) / 2;
                        n -= 1;
                        if (Math.pow(m, 4) + Math.pow(m, 2) + m - b < 0)	binary(b, n, m, right);
                        else binary(b, n, left, m);
                }
        }

        var b = float(input_string[0]);
        var n = int(input_string[1]);
        var left = float(input_string[2].split(" ")[0]);
        var right = float(input_string[2].split(" ")[1]);

        binary(b, n, left, right);
}
var puts = console.log
var int = parseInt
var float = parseFloat
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(inputData) {
        kadai(inputData.toString().split('\n'));
});
