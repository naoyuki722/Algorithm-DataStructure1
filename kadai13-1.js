function kadai(input_string){
    var sgn = -1
    function comp(a, b) {
        if(Math.abs(a-b) >= 2) {
            if(a > b) return 1
            else if(a < b) return -1
            else return 0
        } else {
            sgn = -sgn
            return sgn
        }
    }

    var cnt = 0
    function merge(lst1, lst2) {
        var lst = []
        while(true) {
            if(lst1.length === 0) return lst.concat(lst2)
            else if(lst2.length === 0) return lst.concat(lst1)
            if(comp(lst1[0], lst2[0]) == -1) lst.push(lst1.shift())
            else lst.push(lst2.shift())
            cnt++
        }
    }

    function msort(lst) {
        var n = lst.length
        if(n < 2) return lst
        else {
            var n2 = Math.floor(n / 2)
            return merge(msort(lst.slice(0, n2)), msort(lst.slice(n2, n)))
        }
    }

    var n = int(input_string[0])
    var a_str = input_string[1].split(" ")
    var a = []
    for(var i = 0; i < a_str.length; i++) {
        a[i] = int(a_str[i])
    }
    ans = msort(a)
    ans_t = ""
    for(var i = 0; i < ans.length; i++) {
        ans_t += ans[i] + " "
    }
    puts(ans_t)
    puts(cnt)
}
var puts = console.log
var int = parseInt
var float = parseFloat
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(inputData) {
    kadai(inputData.toString().split('\n'));
});
