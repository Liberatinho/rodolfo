const Calculator = () => {
  const somar = () => {
    const x = parseFloat(prompt("Digite o primeiro valor: "));
    const y = parseFloat(prompt("Digite o segundo valor: "));
    alert(x + y);
  };
 
  const subtrair = () => {
    const x = parseFloat(prompt("Digite o primeiro valor: "));
    const y = parseFloat(prompt("Digite o segundo valor: "));
    alert(x - y);
  };
 
  const multiplicar = () => {
    const x = parseFloat(prompt("Digite o primeiro valor: "));
    const y = parseFloat(prompt("Digite o segundo valor: "));
    alert(x * y);
  };
 
  const dividir = () => {
    const x = parseFloat(prompt("Digite o primeiro valor: "));
    const y = parseFloat(prompt("Digite o segundo valor: "));
    alert(x / y);
  };
 
  return (
<div>
<button onClick={somar}>Somar</button>
<button onClick={subtrair}>Subtrair</button>
<button onClick={multiplicar}>Multiplicar</button>
<button onClick={dividir}>Dividir</button>
</div>
  );
};
 
export default Calculator;