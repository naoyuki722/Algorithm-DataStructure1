function kadai(input_string) {
        var M = null

        function qsort(a) {
                var n = a.length
                if (n <= 1) return a
                else {
                        var key = a[0]
                        var lt = []
                        var eq = []
                        var gt = []
                        for (var i = 0; i < n; i++) {
                                var x = a[i]
                                if (x < key) lt.push(x)
                                else if (x > key) gt.push(x)
                                else eq.push(x)
                        }
                        return qsort(lt).concat(eq).concat(qsort(gt))
                }
        }

        function qqsort(a) {
                var n = a.length
                if (n <= M) return a
                else {
                        var key = a[0]
                        var lt = []
                        var eq = []
                        var gt = []
                        for (var i = 0; i < n; i++) {
                                var x = a[i]
                                if (x < key) lt.push(x)
                                else if (x > key) gt.push(x)
                                else eq.push(x)
                        }
                        return qqsort(lt).concat(eq).concat(qqsort(gt))
                }
        }

        function comp(a, b) {
                if (a.length != b.length) return -1
                var cnt = 0
                for (var i = 0; i < a.length; i++) {
                        if (a[i] != b[i]) cnt++
                }
                return cnt
        }

        M = int(input_string[0])
        var a_str = input_string[1].split(" ")
        var a = []
        for (var i = 0; i < a_str.length; i++) a[i] = int(a_str[i])
        a1 = qsort(a)
        a2 = qqsort(a)
        puts(comp(a1, a2))
}
var puts = console.log
var int = parseInt
var float = parseFloat
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(inputData) {
        kadai(inputData.toString().split('\n'));
});
