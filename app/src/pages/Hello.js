import $ from 'jquery';
import { createElement } from '../utils/createElement';
import Route from "../Route";
import { HomeLink } from './HomeLink';

/** @jsx createElement */

let instance = null;

export default class Hello extends Route {
    constructor(defaultRoute) {
        if(instance != null) return this;

        super('Hello', defaultRoute);
        instance = this;

        this.html = $(this.init({ onClick: this.onClick.bind(this) }));
    }

    init({ onClick }) {
        return (
            <div class="grid grid-cols-full-bleed">
                <div class="col-start-2 flex flex-col mt-16 lg:mt-28 pl-4">
                    <HomeLink onClick={onClick} currentPage=':3' />
                    <div class="font-semibold text-6xl mb-6">Engineering Capstone Project</div>
                    <div class="mt-4 pr-8">
                        Hi! My name is Valerie Marmol and I'm currently a high school senior in Union County Magnet High School. Currently, I am working on an Engineering Capstone project in which over the course of a year, I will develop and create a solution to a problem in the real world.
                    </div>
                    <div class="mt-4 pr-8">
                        On this website, you can explore the progress I have made so far, including proposals for possible problems of interest, the chosen proposal for this project, and the planning, creation, documentation, and results of the final solution.
                    </div>
                </div>
            </div>
        );
    }
}