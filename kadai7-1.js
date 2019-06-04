function kadai(input_string) {
        var b = []
        var N = int(input_string[0])
        var n = int(input_string[1])
        var m = int(input_string[2])

        function print_bin() {
                if (check_bin() != true) return
                var s = ""
                for (var i = 0; i < N; i++) {
                        s += b[i]
                }
                puts(s)
        }

        function cnt_1(a) {
                var x = 0
                for (var i = 0; i < a.length; i++) {
                        if (a[i] == 1) x++
                }
                return x
        }

        function check_bin() {
                for (var i = 0; i <= b.length - n; i++) {
                        var tmp = []
                        for (var j = 0; j < n; j++) {
                                tmp.push(b[i + j])
                        }
                        if (cnt_1(tmp) < m) return false
                }
                return true
        }

        function binary(k) {
                if (k >= N) {
                        print_bin();
                } else {
                        b[k] = 0
                        binary(k + 1)
                        b[k] = 1
                        binary(k + 1)
                }
        }

        binary(0)
}
var puts = console.log
var int = parseInt
var float = parseFloat
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(inputData) {
        kadai(inputData.toString().split('\n'));
});
