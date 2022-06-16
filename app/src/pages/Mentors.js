import $ from 'jquery';
import { createElement } from '../utils/createElement';
import Route from "../Route";
import { HomeLink } from './HomeLink';

/** @jsx createElement */

let instance = null;

export default class Mentors extends Route {
    constructor(defaultRoute) {
        if(instance != null) return this;

        super('Mentors', defaultRoute);
        instance = this;

        this.html = $(this.init({ onClick: this.onClick.bind(this) }));
    }

    init({ onClick }) {
        return (
            <div class="grid grid-cols-full-bleed">
                <div class="col-start-2 flex flex-col mt-16 lg:mt-28 pl-4">
                    <HomeLink onClick={onClick} currentPage='Mentors' />
                    <div class="font-semibold text-6xl mb-6">Mentors</div>
                    <div class="mt-4 pr-8">Mentor Name: Mark Sproul</div>
                    <div class="mt-4 pr-8">Job Title: Computer Engineering at Picatinny Arsenal as the lead for Software Team for the Small Arms Fire Control branch</div>
                    <div class="mt-4 pr-8">This mentor was located through a list of potential mentors given to our class to request from. I decided to request this mentor for his knowledge and experience in engineering fields such as computer, electrical, and mechanical engineering.</div>
                    <div class="mt-4 pr-8">In order to maintain communication with my mentor, I plan to email and call him with any questions I have.</div>
                </div>
            </div>
        );
    }
}