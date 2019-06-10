function kadai(input_string) {
        var rbase = null

        function init(n) {
                rbase = n
        }

        function rand() {
                rbase = (rbase * 48271) % 2147483647
                return rbase >> 20
        }

        function h(p) {
                var x1 = p[0]
                var x2 = p[1]
                var v1 = (x1 >> 2) * (x2 >> 3) % 23
                var v2 = ((x1 % 71) + (x2 % 31) * 23) % 71
                var v = (v1 * 55 + 33 + v2) % 103
                return v
        }

        function make_table(N) {
                var a = []
                for (var i = 0; i < N; i++) {
                        var val = rand()
                        var v = h([val, 0])
                        if (a[v] === undefined) a[v] = [val]
                        else {
                                var match = false
                                for (var j = 0; j < a[v].length; j++) {
                                        if (a[v][j] == val) match = true
                                }
                                if (match == false) a[v].push(val)
                        }
                }
                return a
        }

        function search(a) {
                var count = 0
                for (var i = 0; i < a.length; i++) {
                        if (a[i] != null) {
                                for (var j = 0; j < a[i].length; j++) {
                                        if (a[i][j] != null) count++
                                }
                        }
                }
                return count
        }

        var rinit = int(input_string[0])
        var N = int(input_string[1])
        init(rinit)
        a = make_table(N)
        puts(search(a))

}
var puts = console.log
var int = parseInt
var float = parseFloat
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(inputData) {
        kadai(inputData.toString().split('\n'));
});
