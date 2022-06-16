import $ from 'jquery';

export default class Router {
    constructor(routes = []) {
        this.routes = routes;
        this.root = $('#root');
        this.active;

        this.initRoutes();

        window.addEventListener('load', () => {
            const params = new URLSearchParams(window.location.search);

            if(params.has('page')) {
                const page = params.get('page');

                this.changeRoute(page);
            }
        });

        window.addEventListener('popstate', this.changeRoute.bind(this));
    }

    initRoutes() {
        this.routes.forEach((route, i) => {
            route.on('click', this.changeRoute.bind(this));
            if(route.default) {
                this.root.append(route.html);
                this.active = route.name;
                history.pushState(this.active, null, `?page=${this.active}`);
            }
        });
    }

    changeRoute(e) {
        let name;
        if(e.state) {
            name = e.state
        } else {
            name = e;
        }

        const current = this.resolveRoute(this.active);
        const next = this.resolveRoute(name);

        current.html.detach();
        this.root.append(next.html);
        this.active = next.name;

        history.pushState(this.active, null, `?page=${this.active}`);
    }

    resolveRoute(name) {
        let route;

        for(let i = 0; i < this.routes.length; i++) {
            if(this.routes[i].name === name) {
                route = this.routes[i];
            }
        }

        return route;
    }
}