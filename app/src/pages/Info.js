import $ from 'jquery';
import { createElement } from '../utils/createElement';
import Route from "../Route";

/** @jsx createElement */

let instance = null;

export default class Hello extends Route {
    constructor(defaultRoute) {
        if(instance != null) return this;

        super('Technical Info', defaultRoute);
        instance = this;

        this.html = $(this.init({ onClick: this.onClick.bind(this) }));
    }

    init({ onClick }) {
        return (
            <div class="flex flex-col">

                <div class="mt-16 pl-4">
                    <div class="font-semibold text-6xl mb-4">Overall System & Manufacturing Categories</div>
                    <div class="text-sm pr-8 text-gray-400">
                        This is an overall list of the system and manufacturing categories that may relate to each of my proposals:
                    </div>

                    <div class="mt-8">
                        <div class="text-2xl font-semibold">System Engineering</div>

                        <div class="mt-4">
                            <div class="underline font-medium">BIOLOGICAL:</div>
                            <div>Squirrel and Deer-Proof Bird Feeder</div>
                        </div>

                        <div class="mt-4">
                            <div class="underline font-medium">MECHANICAL:</div>
                            <div>Squirrel and Deer-Proof Bird Feeder</div>
                            <div>Kid-Friendly Umbrella</div>
                            <div>Easier to Store Motorcycle Helmet</div>
                        </div>
                        
                        <div class="mt-4">
                            <div class="underline font-medium">ARCHITECTURAL:</div>
                            <div>Fast, Easy, Portable Shelter</div>
                        </div>

                        <div class="mt-4">
                            <div class="underline font-medium">CONSTRUCTION:</div>
                            <div>Fast, Easy, Portable Shelter</div>
                        </div>

                        <div class="mt-4">
                            <div class="underline font-medium">MATERIALS</div>
                            <div>Kid-Friendly Umbrella</div>
                            <div>Easier to Store Motorcycle Helmet</div>
                            <div>Dog Food Bowl/Mats</div>
                        </div>
                    </div>

                    <div>
                        <div>Manufacturing categories</div>

                        <div>
                            <div>CONSTRUCTION:</div>
                            <div>Squirrel and Deer-Proof Bird Feeder</div>
                            <div>Fast, Easy, Portable Shelter</div>
                            <div>Kid-Friendly Umbrella</div>
                            <div>Easier to Store Motorcycle Helmet</div>
                            <div>Dog Food Bowl/Mat</div>
                        </div>

                        <div>
                            <div>ELECTRICAL:</div>
                            <div>Squirrel and Deer-Proof Bird Feeder</div>

                        </div>
                    </div>

                </div>

                <div class="mt-16 pl-4">
                    <div>Overall Science Concepts and Technology</div>
                    <div>This is an overall list of the science concepts and technology that I can apply to each of my proposals:</div>

                    <div>
                        <div>Science Concepts</div>
                        <div>CONCEPTS AND PRINCIPLES INVOLVING SIMPLE MACHINES (CREDITED TO SCIENTISTS SUCH AS ISAAC NEWTON AND GASPARD-GUSTAVE CORIOLIS)</div>
                    </div>

                    <div>
                        <div>
                            SIMPLE MACHINES:
                            <div>Levers, pulleys, wheel, and axles</div>
                        </div>
                        <div>SOFTWARE TO DETECT WHEN DEER AND/OR BIRDS ARE TRYING TO GET INTO THE FEEDER</div>
                        <div>HARDWARE SUCH AS SENSORS OR CAMERAS.</div>
                        <div>BUTTONS OR CRANKS</div>
                    </div>
                </div>

                <div class="mt-16 pl-4">
                    <div>Possible Materials Needed</div>
                    <div>
                        <div>3-D Printer</div>
                        <div>3-D Printing Filament</div>
                        <div>Glue</div>
                        <div>Wiring/small motor</div>
                        <div>Sensor</div>
                        <div>Flexible metal/plastic poles</div>
                        <div>Planks or other material made out of bamboo (Bamboo is very cost-effective and eco-friendly to use in construction and is very sturdy while also very flexible)</div>
                        <div>Washers and bolts</div>
                        <div>PVA Plastics</div>
                        <div>Polycarbonate plastic</div>
                        <div>Fiberglass</div>
                        <div>Expanded Polystyrene (EPS) foam</div>
                    </div>
                </div>

                <div class="mt-16 pl-4">
                    <div>Prior Experiences & Further Investigation Needed</div>
                    <div>
                        Some experience I have prior to this project that may help me in the design and construction of one of these proposals are courses I took in Robotics, Programming, and Technology Design.
                    </div>
                    <div>
                        Areas I would need to further investigate would be the costs, effectiveness, and accessibility of the materials I could use to create these products and more concepts in programming electrical design.
                    </div>
                </div>
            </div>
        );
    }
}