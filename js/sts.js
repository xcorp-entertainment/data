console.log('hello world!');


const utils = {
  fixNav(){

    let nv = document.getElementById('nav'),
    dd = nv.children[8];
    dd.classList.add('pull-right');

    utils.fixNav(nv)
  },
  addCams(nv){
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

  }
}

utils.fixNav()




