function kadai(input_string) {
        var rbase = null

        function init(n) {
                rbase = n
        }

        function rand() {
                rbase = (rbase * 48271) % 2147483647
                return rbase >> 20
        }

        function randx() {
                var x1 = rand()
                var x2 = rand()
                return [x1, x2]
        }

        function h(p) {
                var x1 = p[0]
                var x2 = p[1]
                var v1 = (x1 >> 2) * (x2 >> 3) % 23
                var v2 = ((x1 % 71) + (x2 % 31) * 23) % 71
                var v = (v1 * 55 + 33 + v2) % 103
                return v
        }

        function is_equal(p, q) {
                if ((p[0] == q[0]) && (p[1] == q[1])) return true
                else return false
        }

        function make_table(N) {
                var a = []
                for (var i = 0; i < N; i++) {
                        var rx = randx()
                        var v = h(rx)
                        if (a[v] === undefined) a[v] = [
                                [rx, 1]
                        ]
                        else {
                                var match = false
                                for (var j = 0; j < a[v].length; j++) {
                                        if ((a[v][j][0] != undefined) && is_equal(a[v][j][0], rx)) {
                                                a[v][j][1] += 1
                                                match = true
                                        }
                                }
                                if (match == false) a[v].push([rx, 1])
                        }
                }
                return a
        }

        function search(a) {
                var FREQ = 0
                var max_pair = null
                for (var i = 0; i < a.length; i++) {
                        if (a[i] != null) {
                                for (var j = 0; j < a[i].length; j++) {
                                        if (a[i][j] != null && a[i][j][1] >= FREQ) {
                                                max_pair = a[i][j][0]
                                                FREQ = a[i][j][1]
                                        }
                                }
                        }
                }
                puts(FREQ + " " + max_pair[0] + " " + max_pair[1])
        }

        var rinit = int(input_string[0])
        var N = int(input_string[1])
        init(rinit)
        search(make_table(N))
}
var puts = console.log
var int = parseInt
var float = parseFloat
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(inputData) {
        kadai(inputData.toString().split('\n'));
});
