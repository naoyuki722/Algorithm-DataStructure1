function kadai(input_string) {

        var n = int(input_string[0]);
        var d = 1 / Math.pow(n, 2);
        var m = 0.0;
        for (var i = 1; i <= n; i++) {
                for (var j = 1.0; j <= n; j++) {
                        if (Math.pow(i / n, 2) + Math.pow(j / n, 2) < 1) {
                                m += d;
                        } else if (
                                Math.pow(i / n, 2) + Math.pow(j / n, 2) == 1
                        ) {
                                m += d / 2;
                        } else {
                                if (
                                        Math.pow(
                                                (i - 1) / n, 2) + Math.pow(
                                                (j - 1) / n, 2
                                        ) < 1) {
                                        m += d / 2;
                                }
                        }
                }
        }
        puts(m * 4);
}
var puts = console.log
var int = parseInt
var float = parseFloat
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(inputData) {
        kadai(inputData.toString().split('\n'));
});
