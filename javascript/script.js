const toggle = document.getElementById("toggle");
const point = document.getElementById("point");
const main = document.getElementById("main");
const screenn = document.getElementById("screen");
const keypad = document.getElementById("keypad");
const btn_basic = document.getElementById("btns-basic");
const contCalc = document.getElementById("contcalc");
const toogle_bg = document.getElementById("toggle-bg");
const kyess = document.querySelectorAll(".key");

const dell = document.getElementById("dell");
const reset = document.getElementById("reset");
const equal = document.getElementById("equal");
const numbers = document.querySelectorAll(".button__number");
const sum = document.getElementById("sum");
const sub = document.getElementById("sub");
const multi = document.getElementById("multi");
const div = document.getElementById("div");
const decimal = document.getElementById("decimal");

let c = 1;
let formatnumber = new Intl.NumberFormat("en-US", { maximumFractionDigits: 4 });
let screnshow = "";
let ContNumbers = "";
let ContNumbers2 = "";
let operador = 0;
let change = true;
let point1 = true;
let point2 = true;
let breset = false;

const ffomartdecimal = (number) => {
  let formatstring = String(number);
  let Reg = /\./gi;
  let GexReg = Reg.test(formatstring);
  Gex1 = GexReg;
  return Gex1;
};

const freset = () => {
  screnshow = "";
  screenn.innerHTML = "0";
  ContNumbers = "";
  ContNumbers2 = "";
  operador = 0;
  change = true;
  point1 = true;
  point2 = true;
  breset = false;
};

keypad.addEventListener("click", (e) => {
  if (e.target.classList.contains("button__number")) {
    let number = e.target.value;
    if (change) {
      if (screnshow.length < 11) {
        ContNumbers += number;
        screnshow += number;
        screenn.innerHTML = formatnumber.format(screnshow);
      }
    }

    if (change === false) {
      if (breset === true) {
        freset();
      } else {
        if (screnshow.length < 11) {
          ContNumbers2 += number;
          screnshow += number;
          screenn.innerHTML = formatnumber.format(screnshow);
        }
      }
    }
  }
});

sum.addEventListener("click", () => {
  operador = 1;
  change = false;
  breset = false;
  screnshow = "";
  screenn.innerHTML = screnshow;
});

sub.addEventListener("click", () => {
  operador = 2;
  change = false;
  breset = false;
  screnshow = "";
  screenn.innerHTML = screnshow;
});

multi.addEventListener("click", () => {
  operador = 3;
  change = false;
  breset = false;
  screnshow = "";
  screenn.innerHTML = screnshow;
});

div.addEventListener("click", () => {
  operador = 4;
  change = false;
  breset = false;
  screnshow = "";
  screenn.innerHTML = screnshow;
});

decimal.addEventListener("click", () => {
  if (change) {
    let bcompdeciaml = ffomartdecimal(ContNumbers);
    bcompdeciaml === true ? null : (point1 = true);
    if (point1 === true) {
      ContNumbers += ".";
      screnshow += ".";
      screenn.innerHTML = formatnumber.format(screnshow);
      point1 = false;
    }
  }
  if (change == false) {
    if (breset === true) {
      freset();
    } else {
      let bcompdeciaml2 = ffomartdecimal(ContNumbers2);
      bcompdeciaml2 === true ? null : (point2 = true);
      if (point2 === true) {
        ContNumbers2 += ".";
        screnshow += ".";
        screenn.innerHTML = formatnumber.format(screnshow);
        point2 = false;
      }
    }
  }
});

dell.addEventListener("click", () => {
  if (change) {
    let del = String(ContNumbers);
    let str = del.slice(0, -1);
    screnshow = str;
    ContNumbers = str;
    screenn.innerHTML = screnshow;
  } else {
    let del = String(ContNumbers2);
    let str = del.slice(0, -1);
    screnshow = str;
    ContNumbers2 = str;
    screenn.innerHTML = screnshow;
  }
});

equal.addEventListener("click", () => {
  switch (operador) {
    case 1: {
      let res = Number(ContNumbers) + Number(ContNumbers2);
      ContNumbers = res;
      ContNumbers2 = "";
      screenn.innerHTML = formatnumber.format(res);
      operador = 0;
      breset = true;

      break;
    }
    case 2: {
      let res = Number(ContNumbers) - Number(ContNumbers2);
      ContNumbers = res;
      ContNumbers2 = "";
      screenn.innerHTML = formatnumber.format(res);
      operador = 0;
      breset = true;
      break;
    }
    case 3: {
      let res = Number(ContNumbers) * Number(ContNumbers2);
      ContNumbers = res;
      ContNumbers2 = "";
      screenn.innerHTML = formatnumber.format(res);
      operador = 0;
      breset = true;
      break;
    }
    case 4: {
      let res = Number(ContNumbers) / Number(ContNumbers2);
      ContNumbers = res;
      ContNumbers2 = "";
      screenn.innerHTML = formatnumber.format(res);
      operador = 0;
      breset = true;
      break;
    }
  }
});

reset.addEventListener("click", () => {
  freset();
});

toggle.addEventListener("click", () => {
  switch (c) {
    case 1: {
      point.classList.remove("animation2");
      point.classList.remove("animation3");
      point.classList.add("animation");
      c = 2;
      main.classList.toggle("main__bg--teme2");
      main.classList.toggle("text__color--teme2");
      toogle_bg.classList.toggle("keypad__bg--teme2");
      keypad.classList.toggle("keypad__bg--teme2");
      screenn.classList.toggle("screen__bg--teme2");
      dell.classList.toggle("key__cyan--teme2");
      reset.classList.toggle("key__cyan--teme2");
      btn_basic.classList.toggle("keypad__bg--teme2");
      equal.classList.toggle("key__orange--teme2");
      point.classList.toggle("toggle__bg--teme2");
      kyess.forEach((Element) => Element.classList.toggle("key__bg--teme2"));

      break;
    }
    case 2: {
      point.classList.remove("animation");
      point.classList.remove("animation3");
      point.classList.add("animation2");
      c = 3;
      kyess.forEach((Element) => Element.classList.toggle("key__bg--teme2"));
      main.classList.toggle("main__bg--teme2");
      main.classList.toggle("text__color--teme2");
      toogle_bg.classList.toggle("keypad__bg--teme2");
      keypad.classList.toggle("keypad__bg--teme2");
      screenn.classList.toggle("screen__bg--teme2");
      dell.classList.toggle("key__cyan--teme2");
      reset.classList.toggle("key__cyan--teme2");
      btn_basic.classList.toggle("keypad__bg--teme2");
      equal.classList.toggle("key__orange--teme2");
      point.classList.toggle("toggle__bg--teme2");

      main.classList.toggle("main__bg--teme3");
      toogle_bg.classList.toggle("toggle__bg--teme3");
      point.classList.toggle("point__color--teme3");
      kyess.forEach((Element) => Element.classList.toggle("key__bgsw--teme3"));
      screenn.classList.toggle("screen__bg--teme3");
      keypad.classList.toggle("keypad__bg--teme3");
      btn_basic.classList.toggle("keypad__bg--teme3");
      equal.classList.toggle("key__purecian--teme3");
      dell.classList.toggle("key__darkviolet--teme3");
      reset.classList.toggle("key__darkviolet--teme3");

      break;
    }
    case 3: {
      point.classList.remove("animation");
      point.classList.remove("animation2");
      point.classList.add("animation3");
      point.classList.toggle("toggle-color-teme3");
      c = 1;
      main.classList.toggle("main__bg--teme3");
      toogle_bg.classList.toggle("toggle__bg--teme3");
      point.classList.toggle("point__color--teme3");
      kyess.forEach((Element) => Element.classList.toggle("key__bgsw--teme3"));
      screenn.classList.toggle("screen__bg--teme3");
      keypad.classList.toggle("keypad__bg--teme3");
      btn_basic.classList.toggle("keypad__bg--teme3");
      equal.classList.toggle("key__purecian--teme3");
      dell.classList.toggle("key__darkviolet--teme3");
      reset.classList.toggle("key__darkviolet--teme3");

      break;
    }
    default: {
    }
  }
});
