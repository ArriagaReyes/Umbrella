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
            <div onClick={() => { props.onClick(props.name) }} class="text-6xl hover:underline font-semibold mt-6 pl-4">
                {props.name}
            </div>
        );
    }

    topLink(props) {
        return (
            <div onClick={() => { props.onClick(props.name) }} class="text-6xl hover:underline font-semibold mt-8 pl-4">
                {props.name}
            </div>
        );
    }

    init({ onClick }) {
        return (
            <div class="fixed grid grid-cols-full-bleed top-0 left-0 right-0 bottom-0">
                <div class="flex col-start-2 flex-col h-full">
                    <this.topLink onClick={onClick} name='Hello'/>
                    <this.link onClick={onClick} name='Proposals'/>
                    <this.link onClick={onClick} name='Chosen Proposal'/>
                    <this.link onClick={onClick} name='Technical Info'/>
                    <this.link onClick={onClick} name='Mentors'/>
                    <this.link onClick={onClick} name='Works Cited'/>
                    <div class="mt-auto mb-12 pl-6">vmarmol@ucvts.org</div>
                </div>
            </div>
        );
    }
}