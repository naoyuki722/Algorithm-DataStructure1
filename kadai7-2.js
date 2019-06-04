function kadai(input_string) {
        function work(n, N) {
                var a = []
                var ans = ""
                var used_engy = 0
                var min_used_engy = 1.0e+10

                function engy(i) {
                        return Math.max(i, n - i)
                }

                function get_str(a) {
                        var s = ""
                        for (var i = 0; i < N; i++) s += a[i]
                        return s
                }

                function bridge_crossing(i, j) {
                        if (j > N || i < 0) return
                        else if (i == n) {
                                if (j == N) {
                                        if (min_used_engy >= used_engy) {
                                                min_used_engy = used_engy
                                                ans = get_str(a)
                                        }
                                }
                        } else {
                                var used_engy_tmp = used_engy
                                a[j] = 'R'
                                used_engy += engy(i)
                                bridge_crossing(i + 1, j + 1)
                                used_engy = used_engy_tmp
                                a[j] = 'L'
                                used_engy += engy(i)
                                bridge_crossing(i - 1, j + 1)
                        }
                }

                bridge_crossing(0, 0)
                puts(ans)
        }

        var n = int(input_string[0])
        var N = int(input_string[1])
        work(n, N)
}
var puts = console.log
var int = parseInt
var float = parseFloat
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(inputData) {
        kadai(inputData.toString().split('\n'));
});
