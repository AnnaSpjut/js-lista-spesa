
const listaSpesa = [
  'banane',
  'pomodorini', 
  'caffe',
  'pasta',
  'latte',
  'pollo',
  'patate',
  'prosciutto crudo',
  'pane',
  'dentifricio',
  'basilico',
  'tonno',
  'avocado'
];

const output = document.querySelector('.lista-spesa')

let i = 0;
while(i < listaSpesa.length){
  console.log(listaSpesa[i]);
  
  i++; 
}

output.innerHTML = listaSpesa;
