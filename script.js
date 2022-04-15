'use strict';

let body = document.querySelector('body');
let div = document.querySelector('div');
let p = document.querySelector('p');


function DomElement(selector, height, width, bg, fontSize) {

    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.create = function() {
        let str = this.selector[0];
        switch(str) {
            case '.': div = document.createElement('div');
                    div.style.cssText = `color: red !important;
                    background-color: yellow;
                    width: 100px; height: 100px; fontSize: 12px;
                    text-align: center;
                    `;
                    div.style.height = this.height;
                    div.style.width = this.width;
                    div.style.background = this.bg;
                    div.style.fontSize = this.fontSize;
                    div.innerHTML = 'Это блок с классом!';
                    let str_class = selector.substr(1);
                    div.classList.add = "'" + str_class + "'";
                    body.appendChild(div);
                    break;
            case '#': p = document.createElement('p');
                    p.style.cssText = `color: red !important;
                    background-color: yellow;
                    width: 100px; height: 100px; fontSize: 12px;
                    text-align: center;
                    `;
                    p.style.height = this.height;
                    p.style.width = this.width;
                    p.style.background = this.bg;
                    p.style.fontSize = this.fontSize;
                    p.innerHTML = 'Это параграф с id!';
                    let str_id = selector.substr(1);
                    p.id = "'" + str_id + "'";
                    body.appendChild(p);
                    break;
            
            default: alert('Блок не найден!');
                break;
        }
    }

};

let blockText = new DomElement('#best', 100 + 'px', 100 + 'px', '#ccc', 18 + 'px');
blockText.create();

