import Router from './Router'
import Hello from './pages/Hello';
import Menu from './pages/Menu';
import Proposals from './pages/Proposals';
import Info from './pages/Info';
import Chosen from './pages/Chosen';
import Mentors from './pages/Mentors';
import Work from './pages/Work';
import '../style.css';

const routes = [
    new Hello(),
    new Menu(true),
    new Proposals(),
    new Info(),
    new Chosen(),
    new Mentors(),
    new Work()
]

const router = new Router(routes);