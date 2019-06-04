function kadai(input_string) {
        var A = []
        for (var i = 0; i < 4; i++) {
                var tmpA = input_string[i].split(" ")
                A.push([float(tmpA[0]), float(tmpA[1]), float(tmpA[2]), float(tmpA[3])])
        }

        var tmpb = input_string[4].split(" ")
        var b = [float(tmpb[0]), float(tmpb[1]), float(tmpb[2]), float(tmpb[3])]

        var tmpx0 = input_string[5].split(" ")
        var x0 = [float(tmpx0[0]), float(tmpx0[1]), float(tmpx0[2]), float(tmpx0[3])]

        function jacobi(n, A, b, p) {
                var eps = 1.0e-12

                function res() {
                        var ss = 0.0
                        for (var i = 0; i < 4; i++) {
                                var s = b[i]
                                for (var j = 0; j < 4; j++) {
                                        s -= A[i][j] * p[j]
                                }
                                ss += s * s
                        }
                        return ss
                }
                for (var k = 0; k < n; k++) {
                        if (res() < eps) {
                                return p
                        }
                        var q = []
                        for (var i = 0; i < 4; i++) {
                                var s = b[i]
                                for (var j = 0; j < 4; j++) {
                                        if (i != j) s -= A[i][j] * p[j]
                                }
                                q[i] = s / A[i][i]
                        }
                        p = q
                }
                return null
        }

        for (var z = 0; z < 100; z++) {
                var ans = jacobi(z * 5, A, b, x0)
                if (ans != null) {
                        puts(ans[0].toFixed(6) + " " + ans[1].toFixed(6) + " " + ans[2].toFixed(6) + " " + ans[3].toFixed(6))
                        break
                }
        }
}
var puts = console.log
var int = parseInt
var float = parseFloat
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(inputData) {
        kadai(inputData.toString().split('\n'));
});
