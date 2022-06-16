import $ from 'jquery';
import { createElement } from '../utils/createElement';
import Route from "../Route";

/** @jsx createElement */

let instance = null;

export default class Menu extends Route {
    constructor(defaultRoute) {
        if(instance != null) return this;

        super('Home', defaultRoute);
        instance = this;

        this.html = $(this.init({ onClick: this.onClick.bind(this) }));
    }

    link(props) {
        return (
            <div onClick={() => { props.onClick(props.name) }} class="cursor-pointer text-6xl font-semibold mt-6 pl-4">
                {props.name}
            </div>
        );
    }

    topLink(props) {
        return (
            <div onClick={() => { props.onClick(props.name) }} class="cursor-pointer text-6xl font-semibold mt-8 pl-4">
                {props.name}
            </div>
        );
    }

    init({ onClick }) {
        return (
            <div class="flex flex-col fixed top-0 left-0 right-0 bottom-0">
                <this.topLink onClick={onClick} name='Hello'/>
                <this.link onClick={onClick} name='Proposals'/>
                <this.link onClick={onClick} name='Chosen'/>
                <this.link onClick={onClick} name='Technical Info'/>
                <this.link onClick={onClick} name='Mentors'/>
                <this.link onClick={onClick} name='Work'/>
                <div class="mt-auto mb-20 pl-6">vmarmol@ucvts.org</div>
            </div>
        );
    }
}