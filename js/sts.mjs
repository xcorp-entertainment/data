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
        class: 'navbar-toggle collapsed float-toggle',
        type: 'button',
        'aria-controls': 'navbar',
        'aria-expanded': 'false',
        'data-target': '.navbar-collapse',
        'data-toggle': 'collapse'
      },
      x('i', {class: 'fa fa-bars'})
    )

    document.body.append(ele);
    return;

  }
}


docReady(function() {
  utils.fixNav();
  utils.addMenuToggle();
});
