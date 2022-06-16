import $ from 'jquery';
import { createElement } from '../utils/createElement';
import Route from "../Route";
import { HomeLink } from './HomeLink';

/** @jsx createElement */

const catagories = [
    {
        title: 'System Engineering:',
        points: [
            {
                title: 'Biological',
                points: [
                    'Squirrel and Deer-Proof Bird Feeder'
                ]
            },
            {
                title: 'Mechanical',
                points: [
                    'Squirrel and Deer-Proof Bird Feeder',
                    'Kid-Friendly Umbrella',
                    'Easier to Store Motorcycle Helmet'
                ]
            },
            {
                title: 'Architectural',
                points: [
                    'Fast, Easy, Portable Shelter'
                ]
            },
            {
                title: 'Construction',
                points: [
                    'Fast, Easy, Portable Shelter'
                ]
            },
            {
                title: 'Materials',
                points: [
                    'Kid-Friendly Umbrella',
                    'Easier to Store Motorcycle Helmet',
                    'Dog Food Bowl/Mat'
                ]
            },

        ]
    },
    {
        title: 'Manufacturing Categories:',
        points: [
            {
                title: 'Construction',
                points: [
                    'Squirrel and Deer-Proof Bird Feeder',
                    'Fast, Easy, Portable Shelter',
                    'Kid-Friendly Umbrella',
                    'Easier to Store Motorcycle Helmet',
                    'Dog Food Bowl/Mat'
                ]
            },
            {
                title: 'Electrical',
                points: [
                    'Squirrel and Deer-Proof Bird Feeder'
                ]
            },
        ]
    }
];

const materials = [
    '3-D Printer',
    '3-D Printing Filament',
    'Glue',
    'Wiring/small motor',
    'Sensor',
    'Flexible metal/plastic poles',
    'Planks or other material made out of bamboo (Bamboo is very cost-effective and eco-friendly to use in construction and is very sturdy while also very flexible)',
    'Washers and bolts',
    'PVA Plastics',
    'Polycarbonate plastic',
    'Fiberglass',
    'Expanded Polystyrene (EPS) foam'
];

let instance = null;

export default class Hello extends Route {
    constructor(defaultRoute) {
        if(instance != null) return this;

        super('Technical Info', defaultRoute);
        instance = this;

        this.html = $(this.init({ onClick: this.onClick.bind(this) }));
    }

    catagories(props) {
        console.log(props.points);

        return (
            <ul class="mb-8 mt-4 pr-8">
                <li class="text-2xl font-medium">{props.title}</li>
                {props.points.map(({ title, points }) => {
                    return (
                        <li class="mb-1">
                            <div>- {title}</div>
                            <ul class="ml-6">{
                                points.map(point => (
                                    <li>{point}</li>
                                ))
                            }</ul>
                        </li>
                    );
                })}
            </ul>
        );
    }

    init({ onClick }) {
        return (
            <div class="grid grid-cols-full-bleed">
                <div class="col-start-2 flex flex-col">
                    <HomeLink onClick={onClick} currentPage='Technical Info' />
                    <div class="mt-16 lg:mt-28 pl-4">
                        <div class="font-semibold text-6xl mb-4">Overall System & Manufacturing Categories</div>
                        <div class="text-sm pr-8 text-gray-400">
                            This is an overall list of the system and manufacturing categories that may relate to each of my proposals:
                        </div>

                        {catagories.map(({ title, points }) =>
                            <this.catagories title={title} points={points} />
                        )}

                    </div>

                    <div class="mt-16 pl-4">
                        <div class="font-semibold text-6xl mb-4">Overall Science Concepts and Technology</div>
                        <div class="text-sm pr-8 text-gray-400">This is an overall list of the science concepts and technology that I can apply to each of my proposals:</div>

                        <div class="mb-8 mt-4 pr-8">
                            <div class="text-2xl font-medium">Science Concepts:</div>
                            <ul>
                                <li>- Concepts and principles involving simple machines (credited to scientists such as Isaac Newton and Gaspard-Gustave Coriolis</li>
                            </ul>
                        </div>

                        <div  class="mb-8 mt-4 pr-8">
                            <div class="text-2xl font-medium">Technology That Could Be Applied:</div>
                            <ul>
                                <li>
                                    <ul>
                                        <li>- Simple Machines</li>
                                        <li class="ml-6">Levers, pulleys, wheel, and axles</li>
                                    </ul>
                                </li>
                                <li>- Software to detect when deer and/or birds are trying to get into the feeder</li>
                                <li>- Hardware such as sensors or cameras</li>
                                <li>- Buttons or cranks</li>
                            </ul>
                        </div>
                    </div>

                    <div class="mt-16 pl-4">
                        <div class="font-semibold text-6xl mb-4">Possible Materials Needed</div>
                        <ul>
                            {materials.map(text => (
                                <li class="mb-1">- {text}</li>
                            ))}
                        </ul>
                    </div>

                    <div class="mt-16 pl-4">
                        <div class="font-semibold text-6xl mb-4">Prior Experiences & Further Investigation Needed</div>
                        <div class="mt-4 pr-8">
                            Some experience I have prior to this project that may help me in the design and construction of one of these proposals are courses I took in Robotics, Programming, and Technology Design.
                        </div>
                        <div class="mb-8 mt-4 pr-8">
                            Areas I would need to further investigate would be the costs, effectiveness, and accessibility of the materials I could use to create these products and more concepts in programming electrical design.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}