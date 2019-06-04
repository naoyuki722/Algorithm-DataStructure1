function kadai(input_string) {
        function work(M, N, m, n, start, goal) {
                var queue1 = [
                        [start]
                ]
                var queue3 = [start]
                var n_steps = 0

                function pos_check(pos) {
                        if (pos[0] >= M || pos[0] < 0) return false;
                        if (pos[1] >= N || pos[1] < 0) return false;
                        return true
                }

                function is_goal(pos) {
                        if (pos[0] == goal[0] && pos[1] == goal[1]) return true
                        else return false
                }

                function is_equal(pos1, pos2) {
                        if (pos1[0] == pos2[0] && pos1[1] == pos2[1]) return true
                        else return false
                }

                function is_used(pos) {
                        for (var i = 0; i < queue3.length; i++) {
                                if (is_equal(pos, queue3[i])) return true
                        }
                        return false
                }

		function get_next_pos(pos) {
			var next_pos = []
			var tmp = []
			tmp[0] = [int(pos[0] - m), int(pos[1] - n)]
                        tmp[1] = [int(pos[0] - m), int(pos[1] + n)]
                        tmp[2] = [int(pos[0] + n), int(pos[1] - m)]
                        tmp[3] = [int(pos[0] + n), int(pos[1] + m)]
                        tmp[4] = [int(pos[0] + m), int(pos[1] + n)]
                        tmp[5] = [int(pos[0] + m), int(pos[1] - n)]
                        tmp[6] = [int(pos[0] - n), int(pos[1] + m)]
                        tmp[7] = [int(pos[0] - n), int(pos[1] - m)]
			for(var i = 0; i < 8; i++) {
				if(pos_check(tmp[i])) {
					if(!is_used(tmp[i])) {
						next_pos.push(tmp[i])
						queue3.push(tmp[i])
					}
				}
			}
			return next_pos
		}


                if (is_goal(start)) return 0
                while (true) {
                        var queue2 = []
                        for (var i = 0; i < queue1.length; i++) {
                                for (var j = 0; j < queue1[i].length; j++) {
                                        if (is_goal(queue1[i][j])) return n_steps;
                                        else queue2.push(get_next_pos(queue1[i][j]));
                                }
                        }
                        queue1 = queue2.slice(0)
                        n_steps += 1
                }
                return null
        }

        var str = input_string[0].split(" ")
        var M = int(str[0])
        var N = int(str[1])
        str = input_string[1].split(" ")
        var m = int(str[0])
        var n = int(str[1])
        str = input_string[2].split(" ")
        var start = [int(str[0]), int(str[1])]
        str = input_string[3].split(" ")
        var goal = [int(str[0]), int(str[1])]
        puts(work(M, N, m, n, start, goal))
}
var puts = console.log
var int = parseInt
var float = parseFloat
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(inputData) {
        kadai(inputData.toString().split('\n'));
});
