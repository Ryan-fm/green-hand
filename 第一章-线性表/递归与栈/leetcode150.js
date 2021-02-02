/**
 * @param {string[]} tokens
 * @return {number}
 * 根据 逆波兰表示法，求表达式的值。
 * 有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
 * 思路：遇到数字 进行入栈操作，遇到操作符，取出栈中两个数组 出栈进行运算 
 */
var evalRPN = function(tokens) {
  let stack = []
  let arrsign = ["-","+","*","/"];
  for (let i = 0; i < tokens.length; i++) {
    // 遇到数字 进入栈
    if(arrsign.indexOf(tokens[i]) == -1){
      stack.push(tokens[i])
    }else{
      let numa = Number(stack.pop());//第一个数字
      let numb = Number(stack.pop());//第二个数字
      switch (tokens[i]){
        case "+" :{
          stack.push(numa + numb);
          break;
        }
        case "-" :{
          stack.push(numb -numa);
          break;
        }
        case "/" :{
          console.log(numa);
          stack.push(parseInt(numb/numa));
          console.log(stack);
            // console.log(parseInt(numa/numb),numa,numb);
            break;
        }
        case "*" :{
          stack.push(numa*numb);
          break;
        } 
      }
    }
  }
  return stack.pop()
};
let result = evalRPN(["4", "13", "5", "/", "+"])
console.log(result);


// 递归解决
var evalRPN2 = function(tokens) {
  let fn = ()=>{
    let char = tokens.pop()
    let num;
    switch (char) {
      case "+":
        return fn() + fn();
      case "-":
        num = fn()
        return fn() - num;
      case "*":
        return fn() * fn();
      case "/":
        num = fn()
        return parseInt (fn() / num);
      default:
        return parseInt(char, 10);
        break;
    }
  }
  return fn()
};