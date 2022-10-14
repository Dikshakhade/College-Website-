const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');
const item5 = document.getElementById('item5');
const item6 = document.getElementById('item6');
const item7 = document.getElementById('item7');
const item8 = document.getElementById('item8');
const item9 = document.getElementById('item9');
const item10 = document.getElementById('item10');
const item11 = document.getElementById('item11');
const item12 = document.getElementById('item12');
const item13 = document.getElementById('item13');

const division1 = document.getElementById('division1');
const division2 = document.getElementById('division2');
const division3 = document.getElementById('division3');
const division4 = document.getElementById('division4');
const division5 = document.getElementById('division5');
const division6 = document.getElementById('division6');
const division7 = document.getElementById('division7');
const division8 = document.getElementById('division8');
const division9 = document.getElementById('division9');
const division10 = document.getElementById('division10');
const division11 = document.getElementById('division11');
const division12 = document.getElementById('division12');
const division13 = document.getElementById('division13');


var Flag1 = false;
var Flag2 = false;
var Flag3  = false;
var Flag4  = false;
var Flag5  = false;
var Flag6  = false;
var Flag7  = false;
var Flag8  = false;
var Flag9  = false;
var Flag10 = false;
var Flag11 = false;
var Flag12 = false;
var Flag13 = false;

const item_list = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13];

const division_list = [division1 ,division2 ,division3 ,division4 ,division5 ,division6 ,division7 ,division8 ,division9 ,division10,division11,division12,division13];

const flag_list = [Flag1 ,Flag2 , Flag3 ,Flag4 ,Flag5 ,Flag6 ,Flag7 ,Flag8 ,Flag9 ,Flag10,Flag11,Flag12,Flag13];

const sub_menu = document.getElementsByClassName('sub-menu-1'); 
item_list.forEach(ev => 
{
 ev.addEventListener('click', BoxCreate);   
});

function BoxCreate(ev){
    var num = ev.target.dataset.id ;
    flag_list[num]=!flag_list[num];
    division_list[num] = document.getElementById(`division${num}`).classList;
    item_list[num]= document.getElementById(`item${num}`).classList;
  if(flag_list[num] == true){
    division_list[num].add('add');
    item_list[num].add('item_add');
    setTimeout(()=>{
      for(let i=0; i<sub_menu.length; i++){
      sub_menu[i].classList.add('sub-menu-timer');
      }
    },1500)
  }
  else{
    for(let i=0;i<sub_menu.length;i++){
    sub_menu[i].classList.remove('sub-menu-timer');
    }
    setTimeout(()=>{
      division_list[num].add('add_out');
    },500)
    setTimeout(()=>{
        division_list[num].remove('add','add_out')
        item_list[num].remove('item_add') 
    },1500);
   }
}
