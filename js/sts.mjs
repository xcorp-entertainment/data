import { x } from './xscript.mjs';

console.log(x);

function docReady(fn) {
  if (document.readyState === "complete" || document.readyState === "interactive") {
      setTimeout(fn, 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}

const utils = {
  fixNav(){

    try {

      let nv = document.getElementById('nav'),
      dd = nv.children[8];
      dd.classList.add('pull-right');

      utils.addCams(nv);

    } catch (err) {
      console.error(err)
    }

  },
  addCams(nv){

    try {

      let ele = document.createElement('li'),
      anc = document.createElement('a');

      ele.classList.add('nav-item');
      ele.setAttribute('itemprop', 'url');
      anc.href = 'https://www.xxxcams.chat/';
      anc.target = '_blank';
      anc.textContent = 'CAMS';
      ele.setAttribute('itemprop', 'name');
      ele.append(anc);
      nv.append(ele);

    } catch (err) {
      console.error(err)
    }


  },
  addMenu(){

    let ele = document.createElement('button'),
    anc = document.createElement('a');



/*
    <button id="cartsm" aria-controls="navbar" aria-expanded="false" data-target=".navbar-collapse" data-toggle="collapse" class="navbar-toggle collapsed header-toggle" type="button" style="
    display: none;
">
<span class="sr-only">Toggle Navigation</span>
<i class="fa fa-bars"></i>
</button>
*/
  }
}


docReady(function() {
  utils.fixNav()
});
