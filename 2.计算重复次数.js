题目描述：

Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (bandB)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

 

我的解答：

function duplicateCount(text){
  //...
  var flag=0;
  var a=text.toLowerCase();
  while(a.length>0){
    var reg=a.substring(0,1);
    
    a=a.substring(1);
    if(a.indexOf(reg)!=-1){
      a=a.replace(new RegExp(reg,'g'),"");
      flag+=1;
    
    }
  }
  return flag; 
}
优秀回答:

1 function duplicateCount(text){
2   return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
3 }
//若text=“Abccdeda”

//.toLowerCase() 将text全变成小写  “abccdeda”

//.split('')  以‘’规则分割                     [‘a’, 'b','c','c','d','e','d','a']

//.sort() 排序                                    ['a','a','b','c','c','d','d','e']

//.join() 将数组中所有元素放在一起 ['aabccdde']

//.match(/([^])\1+/g) 将符合正则的放在新数组中 ['a','c','d']   

/([^])\1+/g  g表示全局，/... /表示正则内容，[^]排除，\1+至少出现一次，，，返回全局中重复出现的

//.length 求数组的长度

 

（2）
function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}
 //  例子“abccdeda”

//filter(function(currentValue,index,arr){return xxx;})  返回符合条件的数组

//currentValue,必选，当前元素的值；index，可选，当前元素的索引在；arr,可选，当前数组对象

//  返回数组为['c','d',‘a’]

 

本题遇到的问题：

1，string的方法和Array的方法搞混了。

 	String	Array
输出第一个/最后一个元素	
substring(0,1);

substr(-1); slice(-1);

shift(); slice(0,1);

pop();

替换	replace(searchvalue,newvalue);	splice(index,howmany,item1,...,itemX);
其他重要方法	
concat();

match();

search();

split();

concat();

join();

reverse();

sort();

2, replace();

用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串.

var str="Mr Blue has a blue house and a blue car";
var n=str.replace(/blue/gi, "red");
正则表达式RegExp   重要以后补充学习内容

var patt=new RegExp(pattern,modifiers);

或更简单的方法

var patt=/pattern/modifiers;
例如：

a=a.replace(new RegExp(reg,'g'),"");
 

3，indexOf();

判断字符串中是否含有子字符串。等同于contains

if(str.indexOf("substr")!=-1)
 