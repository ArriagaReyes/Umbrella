import $ from 'jquery';
import { createElement } from '../utils/createElement';
import Route from "../Route";
import { HomeLink } from './HomeLink';

/** @jsx createElement */

const expectations = [
    {
        title: 'Criteria:',
        points: [
            'Must shield and keep the user under the canopy dry from the rain',
            'Must have a graspable handle with easy grip',
            'Must be made from materials that are not easily damaged by water (susceptible to mold)',
            'Must be durable enough to withstand toddler use and child play (twirling/slight swinging and possible banging of umbrella)',
            'Must be easy to open/close effortlessly',
            'Must resist canopy flipping upwards due to strong winds/force'
        ]
    },
    {
        title: 'Constraints:',
        points: [
            'Is limited to a canopy width no more than 2-½’ (open)',
            'Is limited to a weight of fewer than 10 ounces',
            'Is limited to a length no more than 2’',
            'Does not use a button to quickly open/close the canopy'
        ]
    }
]

let instance = null;

export default class Chosen extends Route {
    constructor(defaultRoute) {
        if(instance != null) return this;

        super('Chosen Proposal', defaultRoute);
        instance = this;

        this.html = $(this.init({ onClick: this.onClick.bind(this) }));
    }

    expectations(props) {
        return (
            <div class="mb-8 mt-4 pr-8">
                <div class="text-2xl font-medium">{props.title}</div>
                <div>
                    {props.points.map(point => (
                        <div class="mb-1">- {point}</div>
                    ))}
                </div>
            </div>
        );
    }

    init({ onClick }) {
        return (
            <div class="flex flex-col">
                <HomeLink onClick={onClick} currentPage='Chosen Proposal' />

                <div class="mt-16 pl-4">
                    <div class="font-semibold text-6xl mb-8">Why The Kid-Friendly Umbrella?</div>
                    <div class="pr-8">
                        The proposal chosen for this project was my third proposal idea. This proposal was chosen because it met my requirements the most well out of all the others. By using a point system of a scale of 1-5, I rated each idea based on how easy it would be to build and test, how much materials would be needed, and how practical the product would be in helping more people. Out of all the ideas, the proposal for a Kid-Friendly Umbrella earned the highest number of points based on these attributes with a score of 17.
                    </div>
                </div>

                <div class="mt-16 pl-4">
                    <div class="font-semibold text-6xl mb-8">Problem Statement</div>
                    <div class="mt-4 pr-8">
                        The main focus of this problem is on children around 5 years old, especially children who may have difficulty in coordination development. Developmental Coordination Disorder (DCD) affects 5-6% of school-aged children (CanChild). This can affect their abilities to do certain tasks such as tie their shoelaces, correctly use utensils to eat, grasp objects, and other basic activities.
                    </div>
                    <div class="mt-4 pr-8">
                        The common problem that umbrellas have is that they can be difficult to open up. Many umbrellas utilize a runner, or a piece that must be pitched to that slide up and down the shaft of the umbrella, to push up the stretchers attached to the ribs of the canopy, opening up the umbrella. However, pinching and pushing the runner is known to be challenging, even for adult consumers. That is why many consumers opt for umbrellas that automatically open with a push of a button. This, on the other hand, is not very safe for children, who can easily hurt themselves when the umbrella automatically springs open. Additionally, it can be difficult to keep a steady grip on the handle of an umbrella, especially in stronger weather conditions when the wind tries to turn the canopy of the umbrella inside out.
                    </div>
                    <div class="mt-4 pr-8">
                        This problem occurs mostly in the spring and early summer when the months are rainiest, especially in June. In 2020, the state of New Jersey recorded an average precipitation of 3.10” during the month of June. These warmer months experience the most amount of thunderstorms and showers, which make them the months in which the use of umbrellas is most prevalent. The increased use of umbrellas in these months makes them the time that children may struggle with the use of an umbrella the most.
                    </div>
                    <div class="mt-4 pr-8">
                        <div>
                            This problem can occur in places that usually receive rain. Children can experience this problem the most on their way to or from school. Here is an anecdote from a mother on a forum page discussing the use of umbrellas by children for the walk to school:
                        </div>
                        <div class="italic">
                            “I don't allow umbrellas on the school run either. Safety is a higher priority than keeping dry. The little ones need two hands to hold their umbrella straightish, and even then they can't see where they are going and constantly poke others accidentally. And if they have two hands on their umbrella they can't hold hands with me or hold the buggy, which is essential on our route to school.”
                        </div>
                    </div>
                    <div class="mt-4 pr-8">
                        While the rain itself does not cause sickness, it can weaken the body and make it more prone to becoming sick. The rain causes the body to become colder, which is perfect for bacteria and viruses to take advantage of. Additionally, if it is particularly windy, the temperature will decrease further. The use of an umbrella is important to keep children safe and less susceptible to becoming sick. To add on, a more convenient and simple to use umbrella would give children the opportunity to be a little more independent.
                    </div>
                </div>

                <div class="mt-16 pl-4">
                    <div class="font-semibold text-6xl mb-8">Design Brief</div>
                    <div class="mt-4 pr-8">
                    The objective of this project is to design, develop, and prototype an umbrella that is more user-friendly and geared towards children. This product shall protect the user from the rain while also being lightweight and comfortable to hold/handle. The product will be used when traveling outdoors to locations such as schools when there is rain and/or strong winds.
                    </div>
                </div>

                <div class="mt-16 pl-4">
                    <div class="font-semibold text-6xl mb-8">Expectations</div>
                    {expectations.map(({ title, points }) => (
                        <this.expectations title={title} points={points}/>
                    ))}
                </div>
            </div>
        );
    }
}