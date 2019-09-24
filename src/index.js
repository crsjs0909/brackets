module.exports = function check(str, bracketsConfig) {
    let pairArray = []; //pairs to replace
    for (let i = 0; i < bracketsConfig.length; i++)
        pairArray.push(bracketsConfig[i][0] + bracketsConfig[i][1])
    while (str.length>0){
        let lenBefore=str.length;
        for (let i = 0; i < pairArray.length; i++)
            str=str.replace(new RegExp(pairArray[i].replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),"g"), "");
        if (lenBefore===str.length)
            break;
    }
    return str.length===0;
}
