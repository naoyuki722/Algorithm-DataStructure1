function kadai(input_string) {

        var s1 = input_string[0]
        var s2 = input_string[1]
        for (var i = 0; i < 6; i++) {
                var str = "";
                for (var j = 0; j < 3; j++) {
                        if ((i + 1) % 2 != 0) {
                                str += (String(s1) + String(s2))
                        } else {
                                str += (String(s2) + String(s1))
                        }
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
