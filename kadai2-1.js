function kadai(input_string) {
        var n1 = int(input_string[0])
        var n2 = int(input_string[1])
        puts(n1 + n2);
        puts(n1 - n2);
        puts(n1 * n2);
        puts(n1 / n2);
}
var puts = console.log
var int = parseInt
var float = parseFloat
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(inputData) {
        kadai(inputData.toString().split('\n'));
});
