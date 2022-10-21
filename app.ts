function min(...args: number[]): number {
    let m = Number.MAX_SAFE_INTEGER;
    args.forEach((val) => {
        if (val < m) {
            m = val;
        }
    });
    return m;
}


function minStrDist(str1: string, str2: string, i: number, j: number, tabel: number[][]): number {
    if (tabel[i][j] != -1) return tabel[i][j];
    let result: number;
    // base
    if (i == 0) {
        result = j;
    } else if (j == 0) {
        result = i;
    } else {
        let temp1;
        if (str1[i - 1] == str2[j - 1]) {
            temp1 = minStrDist(str1, str2, i - 1, j - 1, tabel);
        } else {
            temp1 = minStrDist(str1, str2, i - 1, j - 1, tabel) + 1;
        }

        result = min(temp1,
            minStrDist(str1, str2, i - 1, j, tabel) + 1,// delete
            minStrDist(str1, str2, i, j - 1, tabel) + 1 // insert
        );
    }
    t[i][j] = result;
    return result;
}


let str1 = "ali";
let str2 = "ali2";
let i = str1.length;
let j = str2.length;


let t: number[][] = [];

for (let k = 0; k < i + 1; k++) {
    let result = [];
    for (let l = 0; l < j + 1; l++) {
        result.push(-1);
    }
    t.push(result);
}


console.log(minStrDist(
    str1,
    str2,
    i,
    j,
    t
))
t.forEach((insideArray) => {
    let res = insideArray.join("\t");
    console.log(res);
});

