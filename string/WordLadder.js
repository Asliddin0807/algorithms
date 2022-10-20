function shortestChainLen(start,target,D)
{
if(start == target)
  return 0;
if (!D.has(target))
    return 0;
let level = 0, wordlength = start.length;
let Q = [];
Q.push(start);
while (Q.length != 0)
{
    ++level;
    let sizeofQ = Q.length;
    for (let i = 0; i < sizeofQ; ++i)
    {
        let word = Q[0].split("");
        Q.shift();
        for (let pos = 0; pos < wordlength; ++pos)
        {
            let orig_char = word[pos];
            for (let c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); ++c)
            {
                word[pos] = String.fromCharCode(c);
                if (word.join("") == target)
                    return level + 1;
                if (!D.has(word.join("")))
                    continue;
                D.delete(word.join(""));
                Q.push(word.join(""));
            }
            word[pos] = orig_char;
        }
    }
}
    return 0;
}
let D = new Set();
D.add("poon");
D.add("plee");
D.add("same");
D.add("poie");
D.add("plie");
D.add("poin");
D.add("plea");
let start = "toon";
let target = "plea";
console.log("Длина самой короткой цепи: " + shortestChainLen(start, target, D));