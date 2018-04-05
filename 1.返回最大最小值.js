本文参考：

http://blog.csdn.net/tyrionj/article/details/78653426

http://www.runoob.com/jsref/jsref-obj-string.html

 

Description: 
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number. 
Example 
highAndLow(“1 2 3 4 5”); // return “5 1” 
highAndLow(“1 2 -3 4 5”); // return “5 -3” 
highAndLow(“1 9 3 4 -5”); // return “9 -5” 
Notes

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and 
highest number is first.              
  题目：

function highAndLow(numbers){

}
 

一般答案：（将字符串分割成数组，数组从小到大排列，输出数组的最后一个和第一个）

1 funtion highAndLow(numbers){
2     var b=numbers.split(" ");
3     b.sort(funtion(a,b){
4         return a-b;
5     });
6     return b[b.length-1]+" "+b[0];
7 }
优秀答案：（字符串分割成数组，数组map方法，apply方法，Number中的Math.min 和Math.max方法）

function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}
 

     这里面涉及到的知识点：

（1）string

属性

string.length

方法

字符串操作方法

string.charAt()   string.charCodeAt()

 //charAt();返回指定位置的字符。//charCodeAt(); 返回在指定位置的字符串的unicode编码

         

concat（）| slice（）| substring() | substr() 

concat()；//将一个或是多个字符串拼接起来，返回新的字符串。功能类似“+”

          

 

 slice()  |   substring()   |  substr()

相同点：接受一个或两个参数，第一个参数指定字符串的开始位置，第二个参数表示字符串到哪里结束。如果没有给定第二个参数，则将字符串长度作为结束位置。 
不同点：slice(from, to)和substring(from,to)的第二个参数指定的是字符串最后一个字符后面的位置，而substr(from,length)第二个参数指定的是返回的字符的个数。

             

在传入负值的情况下：

slice()会将传入的负值和字符串的长度相加

substr()将负的第一个参数加上字符串的长度，负的第二个参数转换为0

substring()会将所有的负数都转化为0

var a="hello world";
var len=a.length;   //11

//slice   将传入的负值和字符串的长度相加
a.slice(-3);        //"rld"
a.slice(-3,-1);     //"rl"
a.slice(-3,-4);     //""

//substring  将所有的负数化为0
a.substring(-3);    //"hello world"
a.substring(-3,-1); //""
a.sunstring(-3,-4); //""

//substr 将第一个负数与字符串长度相加，第二个参数转换设为0
a.sunstr(-3);       //"rld"
a.substr(-3,-1);    //""
a.substr(-3,-4);    //""
 

字符串位置方法

indexOf()   |   lastIndexOf()   区分大小写

//从字符串中查找子字符串首次/最后一次出现的位置，如果没有找到该子字符串，则返回-1.

//indexOf("待找的字符串"，从头的第x个位置开始）

//lastIndexOf（“待找的字符串”，从尾的第x个位置开始查找）

var a="hello world";
a.indexOf("o")；       //4
a.indexOf("o",6);      //7
a.lastIndexOf("o");    //7
a.lastIndexOf("o",6);  //4
 

trim()  //不改变原字符串

//删除字符串前置及后置空格

      

 

toUppeCase() | toLocaleUpperCase() | toLowerCase() | toLocaleLowerCase() 
转换大小写

 

字符串的模式匹配方法

match()  |  search()   |  replace()

match(regexp)  //match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配

 match() 方法将检索字符串 String Object，以找到一个或多个与 regexp 匹配的文本。这个方法的行为在很大程度上有赖于 regexp 是否具有标志 g。如果 regexp 没有标志 g，那么 match() 方法就只能在 stringObject 中执行一次匹配。如果没有找到任何匹配的文本， match() 将返回 null。否则，它将返回一个数组，其中存放了与它找到的匹配文本有关的信息。

         

search(searchvalue) //返回待查字符串的起始位置

search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。

如果没有找到任何匹配的子串，则返回 -1。

           

replace（searchvalue，newvalue）//不改变原字符串

//replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

//指定全局替换标志（g）

           

 

split(separator可选,limit可选)  //不改变原字符串

//把一个字符串分割成字符串数组。

             

 

（2）数组

属性

length  //设置或返回数组元素的个数

方法

join(separator);  //不改变原数组

//separator可选，如果省略该参数，则使用逗号作为分隔符

// 返回一个字符串，通过separator连接

        

 

reverse()   //改变原数组

//用于颠倒数组中元素的顺序

         

 

sort(sortfunction)  //改变原数组

//对数组的元素进行排序（默认是按字母升序），返回排序后的数组。

//sortfunction可选，规定排序顺序，必须是函数

//使用数字排序，你必须通过一个函数作为参数来调用。函数指定数字是按照升序(a-b)还是降序排列(b-a)  ?????

var points=[30,40,7,23,56];
points.sort(function(a,b){return a-b;});   //升序，[7, 23, 30, 40, 56]
points.sort(function(a,b){return b-a;});   //降序，[56, 40, 30, 23, 7]

var a=["apple","mango","banana"];
a.sort();                                  //["apple", "banana", "mango"]
 

concat(Array1，array2，…，Arrayx)   //不改变原数组，返回数组的一个副本

//连接两个或多个数组

       

slice(start,end)  //不改变原有数组

//start 可选。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。

//end 可选。规定到何处结束（不包括end处）。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素，但不包含end。

//如果 end 被省略，则slice 会一直提取到原数组末尾。如果 end 大于数组长度，slice 也会一直提取到原数组末尾。

//（-3，-1）从尾部第三个到尾部第一个（但不包含尾部第一个）

          

          

 

 splice(index,howmany,item1,...,itemX)  //改变原数组

//用于插入。删除。替换数组的元素，返回含被删除元素的数组

//index,规定从何处添加/删除元素，必须是数字

//howmany,规定删除多少元素。必须是数字，可以是“0”

//item1，...，itemX,可选，要添加到数组中的新元素

var a = [1,2,3,4,5,6,7,8];
a.splice(4);    //返回[5,6,7,8],a是[1,2,3,4]
a.splice(1,2); //返回[2,3],a是[1,4];

var a = [1,2,3,4,5];
a.splice(2,0,'a','b')  //[1,2,'a','b',3,4,5]
 

push()   |  pop()       //改变原数组

//push和pop将数组当做栈来用。

//push（）在数组末尾添加一个或多个元素，并返回数组新长度

//pop（）删除数组的最后一个元素，并返回删除的值

var arr = []; 
arr.push(1,2);  //返回2      arr[1,2]
arr.pop();      //返回2      arr[1]
arr.push(3);    //返回2      arr[1,3]
arr.pop();      //返回3      arr[1]
arr.push([4,5]); //返回2     arr[1,[4,5]]
arr.pop();       //返回[4,5] arr[1]
arr.pop();       //返回1     arr[]
 

unshift(item1，item2，……，itemX)   |  shift()   //改变数组的长度

//shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。pop（）方法删除最后一个元素

//unshift（）可向数组的开头添加一个或更多元素，并返回新的长度。push()方法在尾部添加元素

var a = [];
a.unshift(1);    //a:[1] 返回1
a.unshift(22);   //a:[22,1] 返回2
a.shift();       //a:[1]   返回22

var a = [1,3];
a.unshift(3,[4,5]); //a:[3,[4,5],1,3]
 

toString()  | toLocalString()

//toString() 方法可把数组转换为字符串，并返回结果。数组中的元素之间用逗号隔开

[1,2,3].toString();           //生成'1,2,3'
["a","b","c"].toString();     //'a,b,c'=>没有""
[1,[2,'c']].toString();        //生成'1,2,c'=>没有[]
 

ES6新方法来遍历forEach（），映射map() ， 过滤filter（），检测every（），简化reduce（），搜索数组indexOf（）          

这些方法是不会改变原始数组，但是方法中的函数是可以修改的。                                                                                          

call() 和apply() 

参考 https://www.zhihu.com/question/20289071
改变函数内this指向

比较易于理解的解答：

函数调用方式                                       by krazy
obj.myFunc();
myFunc.call(obj,arg);
myFunc.apply(obj,[arg1,arg2,...,argX]);
猫吃鱼，狗吃肉，奥特曼要打小怪兽     by 寇云
有天狗想吃鱼  猫.吃鱼.call(狗,鱼);
有天猫想打怪兽  奥特曼.打怪兽.call(猫,怪兽);
 
