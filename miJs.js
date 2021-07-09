
$( function() {
    $( "#calculadora" ).draggable();

    let tecla="";
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");
    let btn5 = document.getElementById("btn5");
    let btn6 = document.getElementById("btn6");
    let btn7 = document.getElementById("btn7");
    let btn8 = document.getElementById("btn8");
    let btn9 = document.getElementById("btn9");
    let btn0 = document.getElementById("btn0");
    let resultado =document.getElementById("resultado");
    
    //funciones 
    const fn1 = ()=>{
        tecla ="1";
        resultado.value +=tecla;
    }
    const fn2 = ()=>{
        tecla ="2";
        resultado.value +=tecla;
    }
    const fn3 = ()=>{
        tecla ="3";
        resultado.value +=tecla;
    }
    const fn4 = ()=>{
        tecla ="4";
        resultado.value +=tecla;
    }
    const fn5 = ()=>{
        tecla ="5";
        resultado.value +=tecla;
    }
    const fn6 = ()=>{
        tecla ="6";
        resultado.value +=tecla;
    }
    const fn7 = ()=>{
        tecla ="7";
        resultado.value +=tecla;
    }
    const fn8 = ()=>{
        tecla ="8";
        resultado.value +=tecla;
    }
    const fn9 = ()=>{
        tecla ="9";
        resultado.value +=tecla;
    }
    const fn0 = ()=>{
        tecla ="0";
        resultado.value +=tecla;
    }

    //eventos
    btn1.onclick=function(){
        fn1();
    };
    btn2.onclick=function(){
        fn2();
    };
    btn3.onclick=function(){
        fn3();
    };
    btn4.onclick=function(){
        fn4();
    };
    btn5.onclick=function(){
        fn5();
    };
    btn6.onclick=function(){
        fn6();
    };
    btn7.onclick=function(){
        fn7();
    };
    btn8.onclick=function(){
        fn8();
    };
    btn9.onclick=function(){
        fn9();
    };
    btn0.onclick=function(){
        fn0();
    };

  } );
