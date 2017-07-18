

// test方法  返回布尔值 false true
// var str ='tywue4294ba21';
// var re = /a/;
// if(re.test(str)){
//     alert('包含这个字符')
// }else{
//     alert('不包含这个字符')
// }
//转义字符
//  \s :空格
//  \S :非空格
//  \d :数字
//  \D :非数字
//  \w :字符 (字母 数字 下划线)
//  \W :非字符
//  \b :独立的部分（起始 结束 空格）
//  \B :非独立的部分
//   . :任意字符
//  \. :真正的.
//  \1 :重复的第一个 子项
// var str ='873947h5620';
// var re =/\D/;
// if(re.test(str)){
//     alert('不全是数字')
// }else{
//     alert('全是数字')
// }

var str = 'onetwo';
var re = /one\b/;
//console.log(re.test(str)) fasle



//search方法 返回字符串位置 indexof 没有返回-1 默认区分大小写
//不区分大小写 在正则后加标识 i;
// var str = 'abdfcyou';
// var re = /C/i;
// alert(str.search(re))


//match方法 匹配成功返回数组 不成功返回null
//匹配成功就结束 全部查找加标识 g
// 量词   + 至少出现一次
// var str = 'haj643konx732fr4nbs897';
// var re =/\d+/g;
// alert(str.match(re))


//replace方法 匹配成功替换
// var str = 'aaa';
// var re =/a/g;
// alert(str.replace(re,'b'))
var btn = document.getElementById('btn');
var Ftext = document.getElementsByTagName('textarea')[0];
var Stext = document.getElementsByTagName('textarea')[1];
btn.onclick=function(){
    console.log(Ftext.value)
    var str = Ftext.value;
    var arr =['操你妈','日你妈的','尼玛','艹','操']
    var re = new RegExp(arr.join('|'),'g');
    console.log(re)
    Stext.innerHTML=str.replace(re,function(str){
        var res = '';
        for(var i=0;i<str.length;i++){
            res+='*';
        }
        return res;
    });
}
// trim方法 去除空格
    //ie9以上才支持

//匹配子项： 小括号（） 或者是 分组操作
// 正则的整体为（母亲）
// 小括号里的正则为（孩子）子项

// {} 量词
// {4,7}  :最少出现4次 最多出现7次
// {4}    ：正好出现4次
//  + =={1,} 至少出现1次
//  ? =={0,1} 出现0次或1次
//  * =={0,} 至少出现0次
//字符类： 一组相似的元素 []中是或的关系
  //排除：^ 写在[]里 代表排除
var str2 = 'abcd';
var re =/a[bcd]c/;
//alert(re.test(str2))
//true--
var str3 = 'abcd';
var re =/a[^bcd]c/;  //[a-z0-9] 代表a-z 0-9的所有
//alert(re.test(str3))
//false--


// ^:正则的最开始位置 代表起始的意思
// $:正则的最后位置 代表结束的意思
// |:或
var text =document.getElementById('text');
var btn2 =document.getElementById('btn2');
btn2.onclick=function(){
    var val = text.value;
    var re =/^[2-9][0-9]$|^1[6-9]$|^10[0-1]$/g;
    // var re =/[2-9][0-9]\b|1[6-9]\b|10[0-1]\b/g;
    if(val.match(re)==null){
        alert('年龄不符合要求')
    }else{
        alert('年龄满足')
    }
}
//通过正则获取className的元素
function getByclass(sClass){
    var arr=[];
    var aEle = document.getElementsByTagName('*');
    var re = RegExp('\\b'+sClass+'\\b');
    for(var i =0;i<aEle.length;i++){
        if(re.test(aEle[i].className)){
            arr.push(aEle[i])
        }
    }
    return arr;
}
var box=getByclass('box');
for(var i=0;i<box.length;i++){
    box[i].style.background='#965311'
}
// 字符串中出现最多 多少次
var strr='ab753jghdgfbvggggythgjijgggfjued95dppppppppp';
var Min =-Infinity;
var s='';
var strr=strr.split('').sort().join('');
var re=/(\w)\1+/g;
strr.replace(re,function($0,$1){
    if($0.length>Min){
        Min=$0.length;
        s=$1;
    }
})
console.log('最多出现的字符是'+s+'  共出现了'+Min+'次')