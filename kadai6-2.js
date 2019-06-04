function kadai(input_string) {
        function sample(x) {
                function max(x, y) {
                        return (x > y) ? x : y
                }

                function samp1(x) {
                        if (x < 0.3) return 2 * x
                        else if (x < 0.8) return (x - 0.3) * 3 / 5 + 0.6
                        else return (x - 0.8) / 2 + 0.9
                }

                function samp2(x) {
                        if (x < 0.5) return x * x * 2
                        else return 1 - (x - 1) * (x - 1)
                }

                function samp3(x) {
                        return max(x * x, (x - 1. / 3) * 1.5)
                }
                return (samp1(x) * samp2(x) + samp3(x)) / 2
        }

        function binary(y, left, right) {
                var eps = 1.0e-12
                var c = (left + right) / 2
                if (Math.abs(y - sample(c)) <= eps) return c
                else {
                        if (y > sample(c)) c = binary(y, c, right)
                        else c = binary(y, left, c)
                }
                return c
        }

        var x = float(input_string[0])
        puts(binary(x, 0, 1).toFixed(7))
}
var puts = console.log
var int = parseInt
var float = parseFloat
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(inputData) {
        kadai(inputData.toString().split('\n'));
});
