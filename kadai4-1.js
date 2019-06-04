function kadai(input_string) {
        var array = [];

        function toBinary(n) {
                if (n == 0) return array.unshift("");
                else if (n == 1) return array.unshift("1");
                else {
                        array.unshift(String(n % 2));
                        toBinary(int(n / 2));
                }
        }

        var n = int(input_string[0]);
        toBinary(n)
        puts(array.join(''))
}
var puts = console.log
var int = parseInt
var float = parseFloat
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(inputData) {
        kadai(inputData.toString().split('\n'));
});
