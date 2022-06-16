import $ from 'jquery';
import { createElement } from '../utils/createElement';
import Route from "../Route";

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
            <div>
                <div>Mentors</div>
                <div>
                    <div>Mentor Name: Mark Sproul</div>
                    <div>Job Title: Computer Engineering at Picatinny Arsenal as the lead for Software Team for the Small Arms Fire Control branch</div>
                    <div>This mentor was located through a list of potential mentors given to our class to request from. I decided to request this mentor for his knowledge and experience in engineering fields such as computer, electrical, and mechanical engineering.</div>
                    <div>In order to maintain communication with my mentor, I plan to email and call him with any questions I have.</div>
                </div>
            </div>
        );
    }
}