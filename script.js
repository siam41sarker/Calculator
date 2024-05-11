function Calculator(v)
    {
        document.getElementById("display").value = document.getElementById("display").value+v;
    }
function ThisRemove()
    {
        document.getElementById("display").value = "";
    }
function ThisRemoveOne()
    {
        document.getElementById("display").value = document.getElementById("display").value.substr(0,document.getElementById("display").value.length-1);
    }
function Cal()
    {
        let expression = document.getElementById("display").value;
        let result = evaluate(expression);
        document.getElementById("display").value = result;
    }
function evaluate(expr)
    {
        let tokens = expr.match(/\d+(\.\d+)?|[-+*\/()]/g);
        let numbers = [];
        let operators = [];
        let obj = {
            '-':1,
            '+':2,
            '*':3,
            '/':4
        }
        let i;
        for(i=0;i<tokens.length;i++)
            {
                let token = tokens[i];
                if(!isNaN(token))
                    {
                        numbers.push(token);
                    }
                else if(token==='(')
                    {
                        operators.push(token);
                    }
                else if(token===')')
                    {
                        while(operators.length && operators[operators.length-1]!=='(')
                            {
                                operation(numbers,operators);
                            }
                            operators.pop();
                    }
                else
                    {
                        while(operators.length && obj[operators[operators.length-1]]>=obj[token])
                            {
                                operation(numbers,operators);
                            }
                            operators.push(token);
                    }
            }
        while(operators.length)
            {
                operation(numbers,operators);
            }
        return numbers[0];
    }
function operation(num,oper)
    {
        let right_number = parseFloat(num[num.length-1]);
        num.pop();
        let left_number = parseFloat(num[num.length-1]);
        num.pop();
        let operator = oper[oper.length-1];
        oper.pop();
        switch(operator)
            {
                case '+':
                    num.push(left_number+right_number);
                    break;
                case '-':
                    num.push(left_number-right_number);
                    break;
                case '*':
                    num.push(left_number*right_number);
                    break;
                case '/':
                    if(right_number!==0)
                        {
                            num.push(left_number/right_number);
                        }
                    else
                        {
                            num.push("Can't be divided by 0!");
                        }
                    break;
                default:
                    num.push("Syntax error!")
            }
    }





























