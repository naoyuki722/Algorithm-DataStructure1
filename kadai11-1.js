function kadai(input_string) {
        function h(pat) {
                var n = 0
                for (var i = 0; i < pat.length; i++) {
                        n = (n * 234 + pat[i]) % 31
                }
                return n
        }

        function equal(a, b) {
                for (var i = 0; i < a.length; i++) {
                        if (a[i] != b[i]) return false
                }
                return true
        }

        function search_table(t, pat) {
                var v = h(pat)
                if (t[v] === undefined) return false
                else {
                        for (var i = 0; i < t[v].length; i++) {
                                if (equal(t[v][i][0], pat)) return t[v][i][1]
                        }
                        return false
                }
        }

        function make_table(start, n) {
                var max = 10000
                var t = []

                function swap(p, i) {
                        var px = p.slice(0)
                        var i2 = (i + 1) % n
                        px[i] = p[i2]
                        px[i2] = p[i]
                        return px
                }

                function swapped_pat(pat_o, cnt) {
                        var pats = []
                        for (var i = 0; i < pat_o.length; i++) {
                                pats.push([swap(pat_o, i), cnt])
                        }
                        return pats
                }

                function bfs(start, max) {
                        var used_pat = []

                        function is_used(pat) {
                                for (var i = 0; i < used_pat.length; i++) {
                                        if (equal(used_pat[i], pat)) return true
                                }
                                return false
                        }

                        var queue = [
                                [start, 0]
                        ]
                        var n_queue = []
                        var seq = null
                        var cnt = 0
                        while (cnt < max) {
                                while (true) {
                                        seq = queue.shift()
                                        if (seq === undefined) break
                                        if (!is_used(seq[0])) {
                                                used_pat.push(seq[0])
                                                var v = h(seq[0])
                                                if (t[v] === undefined) t[v] = [seq]
                                                else t[v].push(seq)
                                                var pats = swapped_pat(seq[0], cnt + 1)
                                                for (var j = 0; j < pats.length; j++) {
                                                        n_queue.push(pats[j])
                                                }
                                        }
                                }
                                queue.length = 0
                                queue = n_queue.slice(0)
                                if (queue.length == 0) break
                                n_queue.length = 0
                                cnt += 1
                        }
                }
                bfs(start, max)
                return t
        }

        function get_seq(input) {
                var seq_str = input.split(" ")
                var seq = []
                for (var i = 0; i < seq_str.length; i++) seq.push(int(seq_str[i]))
                return seq
        }

        var n = int(input_string[0])
        var k = int(input_string[1])
        var start = get_seq(input_string[2])
        t = make_table(start, n)
        for (var i = 0; i < k; i++) {
                puts(search_table(t, get_seq(input_string[i + 3])))
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
