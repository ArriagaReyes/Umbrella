import $ from 'jquery';

export default class Cursor {
    constructor() {
        this.vector = { x: 0, y: 0 }
        this.cursor = $('#cursor');

        window.addEventListener('mousemove', e => {
            this.vector.x = e.clientX - (this.cursor.innerWidth() / 2);
            this.vector.y = e.clientY - (this.cursor.innerHeight() / 2);

            this.update();
        });
    }

    update() {
        this.cursor.css('top', `${this.vector.y}px`);
        this.cursor.css('left', `${this.vector.x}px`);
    }
}