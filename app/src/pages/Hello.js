import $ from 'jquery';
import { createElement } from '../utils/createElement';
import Route from "../Route";

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
            <div>
                <div class="fixed flex justify-between mt-4 left-0 top-0 w-full">
                    <div class="text-sm ml-4 font-semibold self-center">:3</div>
                    <div onClick={() => { onClick('Home') }} class="text-xs mr-8 font-semibold self-center">Home</div>
                </div>
                <div class="flex flex-col mt-16 pl-4">
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