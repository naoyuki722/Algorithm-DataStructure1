function kadai(input_string) {
        var n = input_string[0]
        var a = []
        for (var i = 1; i <= n; i++) {
                var a1 = input_string[i].split(" ")
                var a2 = []
                for (var j = 0; j < a1.length; j++) {
                        a2.push(a1[j])
                }
                a.push(a2)
        }

        var t = []
        for (var i = 0; i < a.length; i++) {
                var t1 = []
                for (var j = 0; j < a.length; j++) {
                        t1.push(a[j][i])
                }
                t.push(t1)
        }

        for (var i = 0; i < n; i++) {
                var str = ""
                for (var j = 0; j < n; j++) {
                        if (j != n - 1) str += String(t[i][j]) + " "
                        else str += String(t[i][j])
                }
                puts(str)
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
