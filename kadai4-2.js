function kadai(input_string) {
        var p1d = input_string[0];
        var p1x = float(p1d.split(" ")[0]);
        var p1y = float(p1d.split(" ")[1]);
        var p2d = input_string[1];
        var p2x = float(p2d.split(" ")[0]);
        var p2y = float(p2d.split(" ")[1]);
        var p1 = [p1x, p1y];
        var p2 = [p2x, p2y];
        var depth = int(input_string[2]);

        var o = [0.0, 0.0];

        function distance(a, b) {
                return Math.sqrt(
			Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2)
		);
        }

        function menseki(p1, p2, depth) {
                if (depth == 0) return 0;
                else {
                        if (distance(o, p1) >= 1.0) return 0;
                        else if (distance(o, p2) <= 1.0) {
				return (p2[0] - p1[0]) * (p2[1] - p1[1]);
			}

                        else {
                                depth--;
                                return menseki(p1, [(p2[0] + p1[0]) / 2, (p2[1] + p1[1]) / 2], depth) +
                                        menseki([p1[0], (p2[1] + p1[1]) / 2], [(p2[0] + p1[0]) / 2, p2[1]], depth) +
                                        menseki([(p2[0] + p1[0]) / 2, p1[1]], [p2[0], (p2[1] + p1[1]) / 2], depth) +
                                        menseki([(p2[0] + p1[0]) / 2, (p2[1] + p1[1]) / 2], p2, depth);
                        }
                }
        }

        var ans = String(menseki(p1, p2, depth).toFixed(7))

        puts(ans);
}
var puts = console.log
var int = parseInt
var float = parseFloat
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(inputData) {
        kadai(inputData.toString().split('\n'));
});
