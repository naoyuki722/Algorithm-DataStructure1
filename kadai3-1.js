function kadai(input_string) {

        var n = int(input_string[0])
        var a = []
        for (var i = 1; i <= n; i++) {
                a.push(int(input_string[i]))
        }

        var count = 0
        for (var i = 0; i < a.length; i++) {
                for (var j = i + 1; j < a.length; j++) {
                        if (a[i] < a[j]) count++
                }
        }

        puts(count)
}
var puts = console.log
var int = parseInt
var float = parseFloat
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(inputData) {
        kadai(inputData.toString().split('\n'));
});
