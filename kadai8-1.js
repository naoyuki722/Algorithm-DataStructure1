function kadai(input_string) {
        function saw(n) {
                var check = []
                var n1 = n + 1
                var count = 0
                for (var i = 0; i < n1; i++) {
                        check[i] = []
                        for (var j = 0; j < n1; j++) {
                                if (i >= 2 && i < n1 - 2) {
                                        if (j >= 2 && j < n1 - 2) check[i][j] = true
                                        else check[i][j] = false
                                } else check[i][j] = false
                        }
                }

                function det(pos) {
                        if (!check[pos[0]][pos[1]]) {
                                var next0 = pos[0] + 1
                                var next1 = pos[0] - 1
                                var next2 = pos[1] + 1
                                var next3 = pos[1] - 1
                                check[pos[0]][pos[1]] = true
                                if (pos[0] == n1 - 1 && pos[1] == n1 - 1) count += 1
                                else {
                                        if (next0 <= n1 - 1) det([next0, pos[1]]);
                                        if (next1 >= 0) det([next1, pos[1]]);
                                        if (next2 <= n1 - 1) det([pos[0], next2]);
                                        if (next3 >= 0) det([pos[0], next3])
                                }
                                check[pos[0]][pos[1]] = false
                        }
                }
                det([0, 0])
                return count
        }

        var n = int(input_string[0])
        puts(saw(n))
}
var puts = console.log
var int = parseInt
var float = parseFloat
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(inputData) {
        kadai(inputData.toString().split('\n'));
});
