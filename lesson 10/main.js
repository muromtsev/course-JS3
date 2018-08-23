class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height     = height;
        this.width      = width;
        this.bg         = bg;
        this.fontSize   = fontSize;
        this.textAlign  = textAlign;
    }

    createDiv() {
        let div     = document.createElement('div'),
            body    = document.body;            
        div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
        div.textContent = 'This new div'
        body.insertBefore(div, body.childNodes[1]);
    }
}

const obj = new Options(100, 500, 'khaki', 28, 'center');
obj.createDiv();