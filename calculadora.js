
// *** CONTRUCCION CALCULADORA ***
// CLASES

class Calculadora{

    sum(num1, num2){
        return num1 + num2;
    }

    res(num1, num2){
        return num1-num2;
    }

    div(num1, num2){
        return num1 / num2;
    }

    mul(num1, num2){
        return num1 * num2;
    }
}

class Display{

    constructor(dispValAnt,dispValAct){ 
        this.dispValAct = dispValAct;
        this.dispValAnt = dispValAnt;
        this.tipoOper = undefined;
        this.calcu = new Calculadora();
        this.valAct = '';
        this.valAnt = '';
        this.signo = { sum:'+',res:'-',div:'/',mul:'x'}
        this.dark = false;
    }

    agregaNum(numero){
        if (numero === '.' && this.valAct.includes('.')||
            numero === '0' && this.valAct.length ===0) return;
        else if (numero === '.' && this.valAct.length===0) this.valAct = '0';
        this.valAct = this.valAct.toString() + numero.toString();
        this.imprimeValores();
    }

    signoX(){
        
        if(isNaN(parseFloat(this.valAct))) return;
        this.valAct = (parseFloat(this.valAct)) * (-1);
        this.valAct = this.valAct.toString();
        this.imprimeValores();       
    }

    borrar(){
        
        if((Math.abs(parseFloat(this.valAct)<10&&this.valAct.length===2))){
            this.valAct='';
        }
        this.valAct = this.valAct.slice(0,-1);
        this.imprimeValores();       
    }

    borrarTodo(){
        this.valAct = '';
        this.valAnt = '';
        this.tipoOper = undefined;
        this.imprimeValores();
    }

    calcular(){
        const ValorAnterior = parseFloat(this.valAnt);
        const ValorActual = parseFloat(this.valAct);
       
        if(isNaN(ValorActual)||isNaN(ValorAnterior)) return;
      
        this.valAct = this.calcu[this.tipoOper](ValorAnterior,ValorActual);
    }

    operar(operacion){
        this.tipoOper !== 'igual' && this.calcular();
        this.tipoOper = operacion;
       
        const numero = isNaN(parseFloat(this.valAct));       
        this.valAnt = numero ? this.valAnt : (parseFloat(this.valAct)).toString();
        this.valAct = '';
        this.imprimeValores();
    }

    imprimeValores(){
        this.dispValAct.textContent = this.valAct;
        this.dispValAnt.textContent = `${this.valAnt} ${this.signo[this.tipoOper] ||''}`;
    }

    enableDarkMode() {
        
        display.classList.toggle('dark-mode');  
        if (this.dark) {
            botonDM.textContent = "DARK" ;
            this.dark = !this.dark;
        }
        else {
            botonDM.textContent = "LIGHT" ;
            this.dark = !this.dark;
        }
    }
}

// CREACION DE NODOS

const app = document.getElementById('app');

const contenedor = document.createElement('div');
    contenedor.classList.add('contenedor');
    contenedor.classList.add('grid-block');

const calculadora = document.createElement('div');
    calculadora.classList.add('calculadora');
const display = document.createElement('div');
    display.classList.add('display');
const valAnt = document.createElement('div');
    valAnt.id = 'valAnt';
const valAct = document.createElement('div');
    valAct.id = 'valAct';

app.appendChild(contenedor);
    contenedor.appendChild(calculadora); 
        calculadora.appendChild(display);
            display.appendChild(valAnt);
            display.appendChild(valAct);
          
            const botonDM = document.createElement('button');
            botonDM.classList.add('dm');
            botonDM.classList.add('dark');
            botonDM.textContent = 'DARK';
            botonDM.addEventListener('click',()=>disp.enableDarkMode());
            calculadora.appendChild(botonDM);

            const botonC = document.createElement('button');
            botonC.textContent = 'C';
            botonC.addEventListener('click',()=>disp.borrarTodo());  
            calculadora.appendChild(botonC);

            const botonB = document.createElement('button');
            botonB.textContent = '\u2190';
            botonB.addEventListener('click',() =>disp.borrar());
            calculadora.appendChild(botonB);

            const botonP = document.createElement('button');
            botonP.classList.add('oper');
            botonP.textContent = '/';
            botonP.value =  'div';
            calculadora.appendChild(botonP);

            const boton7 = document.createElement('button');
            boton7.classList.add('num');
            boton7.textContent = '7';
            calculadora.appendChild(boton7);

            const boton8 = document.createElement('button');
            boton8.classList.add('num');
            boton8.textContent = '8';
            calculadora.appendChild(boton8);

            const boton9 = document.createElement('button');
            boton9.classList.add('num');
            boton9.textContent = '9';
            calculadora.appendChild(boton9);

            const botonM = document.createElement('button');
            botonM.classList.add('oper');
            botonM.textContent = 'x';
            botonM.value = 'mul';
            calculadora.appendChild(botonM);

            const boton4 = document.createElement('button')
            boton4.classList.add('num');
            boton4.textContent = '4';
            calculadora.appendChild(boton4);

            const boton5 = document.createElement('button');
            boton5.classList.add('num');
            boton5.textContent = '5';
            calculadora.appendChild(boton5);

            const boton6 = document.createElement('button');
            boton6.classList.add('num');
            boton6.textContent = '6';
            calculadora.appendChild(boton6);

            const botonR = document.createElement('button');
            botonR.classList.add('oper');
            botonR.textContent = '-';
            botonR.value = 'res';
            calculadora.appendChild(botonR);

            const boton1 = document.createElement('button');
            boton1.classList.add('num');
            boton1.textContent = '1';
            calculadora.appendChild(boton1);

            const boton2 = document.createElement('button');
            boton2.classList.add('num');
            boton2.textContent = '2';
            calculadora.appendChild(boton2);

            const boton3 = document.createElement('button');
            boton3.classList.add('num');
            boton3.textContent = '3';
            calculadora.appendChild(boton3);

            const botonS = document.createElement('button');
            botonS.classList.add('oper');
            botonS.textContent = '+';
            botonS.value = 'sum';
            calculadora.appendChild(botonS);

            const botonSG = document.createElement('button');
            botonSG.textContent = '\u00b1';
            botonSG.addEventListener('click',() => disp.signoX());
            calculadora.appendChild(botonSG);

            const boton0 = document.createElement('button');
            boton0.classList.add('num');
            boton0.textContent = '0';
            calculadora.appendChild(boton0);

	    const botonp = document.createElement('button');
            botonp.classList.add('num');
            botonp.textContent = '.';
            calculadora.appendChild(botonp);

            const botonr = document.createElement('button');
            botonr.classList.add('oper');
            botonr.textContent = '=';
            botonr.value = 'igual';
            calculadora.appendChild(botonr);

// ASIGNACION DE EVENTOS AL TECLADO

const btnNum = document.querySelectorAll('.num');
const btnOper = document.querySelectorAll('.oper');

btnNum.forEach(boton =>{
    boton.addEventListener('click',() => disp.agregaNum(boton.innerHTML));
   
});

btnOper.forEach(boton =>{
    boton.addEventListener('click',() => disp.operar(boton.value));
});

// INSTANCIACION DE CALCULADORA 

const dispValAnt = document.getElementById('valAnt');
const dispValAct = document.getElementById('valAct');

const disp = new Display(dispValAnt,dispValAct);





