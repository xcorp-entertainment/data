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

      let ele = x('li', {
          class: 'nav-item',
          itemprop: 'url'
        },
        x('a', {
          href: 'https://www.xxxcams.chat/',
          target: '_blank',
          itemprop: 'name'
        }, 'CAMS')
      )

      nv.append(ele);

    } catch (err) {
      console.error(err)
    }


  },
  addMenuToggle(){

    let ele = x('button', {
        class: 'collapsed float-toggle',
        type: 'button',
        'aria-controls': 'navbar',
        'aria-expanded': 'false',
        'data-target': '.navbar-collapse',
        'data-toggle': 'collapse'
      },
      x('i', {class: 'fa fa-bars'})
    ),
    toTop = x('button', {
        class: 'to-top',
        type: 'button',
        onclick(){
          utils.totop(0);
        }
      },
      x('i', {class: 'fa fa-chevron-up'})
    )

    /*
    window.addEventListener('scroll', utils.debounce(function(evt){
      let top = window.pageYOffset || document.scrollTop;

      if(top === NaN || !top){
        toTop.classList.add('hidden')
      } else if(toTop.classList.contains('hidden')){
        toTop.classList.remove('hidden');
      }
      top = null;
      return;
    }, 250))
    */

    document.body.append(ele,toTop);
    document.getElementById('cartsm').remove()
    return;

  },
  debounce(func, wait, immediate) {
  	var timeout;
  	return function() {
  		var context = this, args = arguments;
  		var later = function() {
  			timeout = null;
  			if (!immediate) func.apply(context, args);
  		};
  		var callNow = immediate && !timeout;
  		clearTimeout(timeout);
  		timeout = setTimeout(later, wait);
  		if (callNow) func.apply(context, args);
  	};
  },
  totop(i){
    window.scroll({
      top: i,
      left: 0,
      behavior: 'smooth'
    });
  }
}


docReady(function() {
  utils.fixNav();
  utils.addMenuToggle();
});
