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
                var next_pos1 = [int(pos[0] - m), int(pos[1] - n)]
                var next_pos2 = [int(pos[0] - m), int(pos[1] + n)]
                var next_pos3 = [int(pos[0] + n), int(pos[1] - m)]
                var next_pos4 = [int(pos[0] + n), int(pos[1] + m)]
                var next_pos5 = [int(pos[0] + m), int(pos[1] + n)]
                var next_pos6 = [int(pos[0] + m), int(pos[1] - n)]
                var next_pos7 = [int(pos[0] - n), int(pos[1] + m)]
                var next_pos8 = [int(pos[0] - n), int(pos[1] - m)]
                if (pos_check(next_pos1)) {
                        if (!is_used(next_pos1)) {
                                next_pos.push(next_pos1)
                                queue3.push(next_pos1)
                        }
                }
                if (pos_check(next_pos2)) {
                        if (!is_used(next_pos2)) {
                                next_pos.push(next_pos2);
                                queue3.push(next_pos2)
                        }
                }
                if (pos_check(next_pos3)) {
                        if (!is_used(next_pos3)) {
                                next_pos.push(next_pos3);
                                queue3.push(next_pos3)
                        }
                }
                if (pos_check(next_pos4)) {
                        if (!is_used(next_pos4)) {
                                next_pos.push(next_pos4);
                                queue3.push(next_pos4)
                        }
                }
                if (pos_check(next_pos5)) {
                        if (!is_used(next_pos5, queue3)) {
                                next_pos.push(next_pos5);
                                queue3.push(next_pos5)
                        }
                }
                if (pos_check(next_pos6)) {
                        if (!is_used(next_pos6)) {
                                next_pos.push(next_pos6);
                                queue3.push(next_pos6)
                        }
                }
                if (pos_check(next_pos7)) {
                        if (!is_used(next_pos7)) {
                                next_pos.push(next_pos7);
                                queue3.push(next_pos7)
                        }
                }
                if (pos_check(next_pos8)) {
                        if (!is_used(next_pos8)) {
                                next_pos.push(next_pos8);
                                queue3.push(next_pos8)
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
