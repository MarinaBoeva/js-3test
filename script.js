var parentElem = document.body;
var h1 = document.createElement('h1');
var form = document.createElement('form');
var div = document.createElement('div');
var div1,div2;
var h4 = document.createElement('h4');
var p = document.createElement('p');
var label = document.createElement('label');
var label1,label2;
var radio = document.createElement('input');
var button = document.createElement('button');
var domGenerator = {
  generateTitle: function() {
    h1.innerHTML = "Тест по программированию";
    h1.className = "title";
    parentElem.appendChild(h1);
  },
  generateForm: function() {
    form.className = "form";
    form.setAttribute('action','#');
    parentElem.appendChild(form);
  },
  generateQuestionBox: function () {
    div.className = "questionBox";
    div1=div.cloneNode(true);
    div2=div.cloneNode(true);
    form.appendChild(div);
    form.appendChild(div1);
    form.appendChild(div2);
  },
  generateQuestion: function() {
    h4.innerHTML = "Вопрос №<span>1</span>";
    h4.className = "question";
    div.appendChild(h4);
  },
  generateAnswers: function () {
  radio.setAttribute('type','radio');
  label.setAttribute('for','answer1');
  label.appendChild(radio);
  label.className = "label radio";
  label.querySelector('input').name = "answers1";
  label.querySelector('input').id = "answer1";
  p.innerHTML = "Вариант ответа №<span>1</span>";
  p.className = "answer";
  label.appendChild(p);
  div.appendChild(label);

  label1 = label.cloneNode(true);
  label1.setAttribute('for','answer2');
  label1.querySelector('input').id = "answer2";
  label1.querySelector('span').innerHTML = "2";
  div.appendChild(label1);

  label2 = label.cloneNode(true);
  label2.setAttribute('for','answer3');
  label2.querySelector('input').id = "answer3";
  label2.querySelector('span').innerHTML = "3";
  div.appendChild(label2);
 },
 changeNumberAndId : function () {
   div1.querySelector('h4').innerHTML = "Вопрос №<span>2</span>";
   div2.querySelector('h4').innerHTML = "Вопрос №<span>3</span>";
   div1.querySelectorAll('label')[0].setAttribute('for','answer4');
   div1.querySelectorAll('input')[0].name = "answers2";
   div1.querySelectorAll('input')[0].id = "answer4";
   div1.querySelectorAll('label')[1].setAttribute('for','answer5');
   div1.querySelectorAll('input')[1].name = "answers2";
   div1.querySelectorAll('input')[1].id = "answer5";
   div1.querySelectorAll('label')[2].setAttribute('for','answer6');
   div1.querySelectorAll('input')[2].name = "answers2";
   div1.querySelectorAll('input')[2].id = "answer6";

   div2.querySelectorAll('label')[0].setAttribute('for','answer7');
   div2.querySelectorAll('input')[0].name = "answers3";
   div2.querySelectorAll('input')[0].id = "answer7";
   div2.querySelectorAll('label')[1].setAttribute('for','answer8');
   div2.querySelectorAll('input')[1].name = "answers3";
   div2.querySelectorAll('input')[1].id = "answer8";
   div2.querySelectorAll('label')[2].setAttribute('for','answer9');
   div2.querySelectorAll('input')[2].name = "answers3";
   div2.querySelectorAll('input')[2].id = "answer9";
   //Можно ли сократить?
 },
 generateButton: function(){
   button.setAttribute('type','submit');
   button.innerHTML = "Проверить мои результаты";
   button.className = "button";
   form.appendChild(button);
 }
};
domGenerator.generateTitle();
domGenerator.generateForm();
domGenerator.generateQuestion();
domGenerator.generateAnswers();
domGenerator.generateQuestionBox();
domGenerator.changeNumberAndId();
domGenerator.generateButton();
