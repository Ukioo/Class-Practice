

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
alert(re.test(str))



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
    var re = /操你妈|日你妈的|尼玛/g;
    Stext.innerHTML=str.replace(re,function(str){
        var res = '';
        for(var i=0;i<str.length;i++){
            res+='*';
        }
        return res;
    });
}


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
alert(re.test(str2))
//true--
var str3 = 'abcd';
var re =/a[^bcd]c/;  //[a-z0-9] 代表a-z 0-9的所有
alert(re.test(str3))
//false--


// ^:正则的最开始位置 代表起始的意思
// $:正则的最后位置 代表结束的意思
// |:或
