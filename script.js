const buttons = document.querySelectorAll('button');const result = document.querySelector('#result');result.textContent = '0';let concatText = '0';  let LastWord = '0';  let LastGroup = '0';
function buttonPressed(event) {  const text = event.target.textContent;switch(text){case "0":if(LastGroup !== "0"){concatText += text;}break;
case '+': if(LastWord === "+"||LastWord === "-"||LastWord === "*"||LastWord === "/"||LastWord === "."){}else{concatText += text;}break;case '-':if(LastWord === "+"||LastWord === "-"||
LastWord === "*"||LastWord === "/"||LastWord === "."){}else{concatText += text;}break;case '*':if(LastWord === "+"||LastWord === "-"||LastWord === "*"||LastWord === "/"||LastWord === "."){
}else{concatText += text;}break; case '/':if(LastWord === "+"||LastWord === "-"||LastWord === "*"||LastWord === "/"||LastWord === "."){}else{concatText += text;}break;
case "AC":concatText = '0';break;case "CE":concatText = concatText.slice(0,-1);if(concatText === ''){concatText = '0';}break;case "=":if(LastWord === "+"||LastWord === "-"||
LastWord === "*"||LastWord === "/"||LastWord === "."||LastWord === "="){}else{concatText = eval(concatText);}break;case ".":if(LastWord === "+"||LastWord === "-"||
LastWord === "*"||LastWord === "/"||LastGroup.includes(".")){}else{concatText += '.';}break;default:if(LastGroup === "0"){concatText = concatText.slice(0,-1);}
concatText += text;break;}concatText = String(concatText);const op = /[+\-*/]/g;CutGroup = concatText.split(op); LastWord = concatText[concatText.length - 1];
LastGroup = CutGroup[CutGroup.length - 1];result.textContent = concatText;  }buttons.forEach(button => button.addEventListener('click',buttonPressed));