import EventEmitter from './EventEmitter';

export default class Route extends EventEmitter {
    constructor(name, defaultRoute = false) {
        super();
        this.name = name;
        this.default = defaultRoute;
        this.html = null;
    }

    onClick(name) {
        this.trigger('click', [name]);
    }
}