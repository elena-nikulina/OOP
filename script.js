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
                    div.style.height = DomElement.height;
                    div.style.width = DomElement.width;
                    div.style.background = DomElement.bg;
                    div.style.fontSize = DomElement.fontSize;
                    div.innerHTML = 'Это блок с классом!';
                    div.classList.add = "'" + selector + "'";
                    body.appendChild(div);
                    break;
            case '#': p = document.createElement('p');
                    p.style.cssText = `color: red !important;
                    background-color: yellow;
                    width: 100px; height: 100px; fontSize: 12px;
                    text-align: center;
                    `;
                    p.style.height = DomElement.height;
                    p.style.width = DomElement.width;
                    p.style.background = DomElement.bg;
                    p.style.fontSize = DomElement.fontSize;
                    p.innerHTML = 'Это параграф с id!';
                    p.id = "'" + selector + "'";
                    body.appendChild(p);
                    break;
            
            default: alert('Блок не найден!');
                break;
        }
    }

};

let blockText = new DomElement('#best', 100 + 'px', 100 + 'px', '#ccc', 12 + 'px');
blockText.create();

