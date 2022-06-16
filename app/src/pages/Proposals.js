import { createElement } from '../utils/createElement';
import $ from 'jquery';
import Route from "../Route";

/** @jsx createElement */

let instance = null;

const content = [
    {
        title: 'Squirrel & Deer-Proof Bird Feeder',
        paragraphs: [
            'Many people enjoy having bird feeders set up in their back or front yard. The main purpose of these bird feeders is to attract birds into yards for people to observe and enjoy while also feeding birds as well. However, a constant problem people with bird feeders have is that squirrels and deer are also attracted to the seeds. Prompted by the treats, these deer and squirrels often intrude into people’s backyards, doing whatever they can to get into the feeders, even knocking them over and spilling its contents all over the yard and leaving little to no seeds for the birds to eat.',
            'One example of this problem was observed in my neighbor’s backyard. Near the middle of their backyard, an average bird feeder is hung on a pole with a hook.  Additionally, their backyard is surrounded by a fence. However, their fence is not tall enough to stop deer from jumping over. On multiple occasions, these deer and squirrels have trespassed into their yard to knock over their bird feeder, making a mess and eating all the food. Not only is this a problem because of the mess they make, but it can also become a danger to their children, who constantly like playing in their backyard if they come in contact with the deer.',
            'With this in mind, this problem is ultimately seen in the homes of people who enjoy using bird feeders. It is a problem concerning safety and the desire to keep one’s yard clean. By creating a new and improved bird feeder designed to keep deer and squirrels out, this problem can be solved.'
        ]
    },
    {
        title: 'Fast,‌ ‌Easy,‌ ‌Portable‌ ‌Shelter‌',
        paragraphs: [
            'With the changing climate, natural disasters have been occurring more than ever. Hurricanes, floods, and wildfires are some of the top disasters caused by climate change. They also happen to be disasters that force people out of their homes across the world, often leaving them with no shelter. Natural disasters haven’t been the only cause of homelessness. Conflict in countries prone to frequent hostility has also displaced many innocent lives from their homes, left with nowhere to go.',
            '1,714,000 people were internally displaced in the US alone during the year 2020 due to natural disasters (IDMC). Additionally, across 149 countries in the world, 40.5 million people were reported to have been internally displaced in 2020 due to natural disasters and conflict (IDMC). Many of these internally displaced people (IDPs) are sent to camps run by humanitarian actors. However, while these camps are helpful in the immediate aftermath of displacement, when the displacement of people becomes prolonged it becomes harder to provide for these people.',
            'One of the necessities that become harder to provide is adequate shelter, especially for a large number of IDPs. Shelter that is easier to set up, more durable, and is more cost-effective is something that is needed in these camps. The problem for this proposal is to create an improved portable shelter that meets the needs of these people and these three requirements.'
        ]
    },
    {
        title: 'Kid-Friendly‌ ‌Umbrella‌',
        paragraphs: [
            'Umbrellas have been around for millions of years, starting off as simple parasols used to show off social status, to a common but practical item used in many lives today.  In the US alone, about 33 million umbrellas are sold annually. The main purpose of umbrellas today is to help shield people traveling outside from the rain. They are items used both by adults and children and have proven to become, although sometimes overlooked, essential products to have. However, umbrellas tend to still have problems despite this and can sometimes be a hassle to handle, especially for children.',
            'A common problem that umbrellas have is that they can be difficult to open up. Many umbrellas utilize a runner, or a piece that must be pitched to that slide up and down the shaft of the umbrella, to push up the stretchers attached to the ribs of the canopy, opening up the umbrella. However, pinching and pushing the runner is known to be challenging, even for adult consumers. That is why many consumers opt for umbrellas that automatically open with a push of a button. This, on the other hand, is not very safe for children, who can easily hurt themselves when the umbrella automatically springs open. Additionally, it can be difficult to keep a steady grip on the handle of an umbrella, especially in stronger weather conditions when the wind tries to turn the canopy of the umbrella inside out.',
            'While there are existing umbrellas claiming to be kid-friendly already, most only take the creative and artistic design into consideration, sacrificing the actual functionality or ease of use for the child. For the solution to this problem in this project, the creative design will also be taken into account to become more eye-appealing and also functional for children to use.'
        ]
    },
    {
        title: 'Easier to Store Motorcycle Helmet',
        paragraphs: [
            'Many people who own a vehicle today own a motorcycle as their main mode of transportation. In the US alone in 2018, there have been 8.3 million people recorded to have owned a motorcycle. By law, all motorcycle drivers and riders are required to wear a helmet when riding the motorcycle.',
            'One of the main common problems with motorcycle helmets is that they are inconvenient to carry around everywhere (for example when out shopping or at a restaurant) after a ride. Their large shape makes it difficult to store in bags and backpacks without taking up a lot of space. While some motorcycle users decide to leave their helmets with their bikes when going into stores or other places because of this reason, this isn’t always the safest option concerning the risk of theft, even if one attaches a lock.',
            'Although there are already products on the market for collapsible motorcycle helmets, they are still either too big or don’t protect the entirety of the motorcyclist’s head (including the chin). The main goal for this project would be to solve the problem of storing motorcycle helmets on the go by creating a helmet that can collapse into a smaller shape in order to make it easier to carry and travel with while still being able to protect.'
        ]
    },
    {
        title: 'Dog Food Bowl/Mat',
        paragraphs: [
            'This problem was observed with my own dog and his standard dog bowl. Every time he eats, it is a struggle to get him to eat out of his bowl. He barks and insists on people picking the food out of the bowl and placing it on the floor, defeating the purpose of the bowl to begin with. Additionally, he enjoys the action of kicking his food around the floor, making a mess, before actually eating.',
            'After some more observation and research, this resentment towards the standard bowl could be due to how uncomfortable it is for some dogs to use it. Some dogs despise the noises the food makes when it moves around in their bowls. It makes them anxious and less inclined to want to use the bowl. Additionally, some dogs (especially smaller dogs) find deeper bowls more stressful to use when they need to stick their heads deeper inside just to eat their food. Lastly, the preference for eating and playing with their food on the floor could be due to the need for stimuli.',
            'A solution to this problem would be to create a bowl or a type of mat that makes it easier for dogs (specifically smaller dogs) to eat their food without having to worry about the anxiety of the sounds the food makes moving around, makes it more fun and engaging for them to eat their food inside of it instead of on the floor (perhaps make it so they have to dig for it), while still being able to easily hold food and clean.'
        ]
    }
];

export default class Proposals extends Route {
    constructor(defaultRoute) {
        if(instance != null) return this;

        super('Proposals', defaultRoute);
        instance = this;

        this.html = $(this.init({ onClick: this.onClick.bind(this) }));
    }

    section(props) {
        const {
            title,
            paragraphs
        } = props;
        return (
            <div class="mt-16 pl-4">
                <div class="font-semibold text-6xl mb-8">{title}</div>
                <div class="mt-4 pr-8">{paragraphs[0]}</div>
                <div class="mt-4 pr-8">{paragraphs[1]}</div>
                <div class="mt-4 pr-8 mb-10">{paragraphs[2]}</div>
            </div>
        );
    }

    init({ onClick }) {
        return (
            <div id="proposal" class="flex flex-col">
                <div class="fixed flex justify-between mt-4 left-0 w-full">
                    <div class="text-sm ml-4 font-semibold self-center">Proposals</div>
                    <div onClick={() => { onClick('Home') }} class="text-xs mr-8 font-semibold self-center">Home</div>
                </div>
                {content.map(({ title, paragraphs }) => (
                    <this.section title={title} paragraphs={paragraphs}/>
                ))}
            </div>
        );
    }
}