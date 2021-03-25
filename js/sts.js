console.log('hello world!');


const utils = {
  fixNav(){
    let nv = document.getElementById('nav'),
    dd = nv.children[8];
    dd.classList.add('pull-right');
  }
}

utils.fixNav()



