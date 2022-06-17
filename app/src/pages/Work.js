import $ from 'jquery';
import { createElement } from '../utils/createElement';
import Route from "../Route";
import { HomeLink } from './HomeLink';

/** @jsx createElement */
const citations = [
    `@bomberdan11. “I Saw This Dad Holding up His Son's Umbrella on My Walk Home from Work Today. This Is What It Is to Be a Parent. Sacrificing for Your Children. Kudos to This Guy for Being a Great Dad.” Reddit, 2018, https://www.reddit.com/r/daddit/comments/9iw3lp/i_saw_this_dad_holding_up_his_sons_umbrella_on_my/.`,
    `AsapSCIENCE, AsapSCIENCE. “Does Being Cold Make You Sick?” YouTube, YouTube, 2 Jan. 2014, https://www.youtube.com/watch?v=RWiOhlqEDz4.`,
    `“Climate for Atlantic City Airport, New Jersey.” Climate in Atlantic City Airport, New Jersey, http://www.rssweather.com/climate/New%20Jersey/Atlantic%20City%20Airport/ .`,
    `“Climate for Miami, Florida.” Climate in Miami, Florida, http://www.rssweather.com/climate/Florida/Miami/.`,
    `Courtney. “Back to School with Rain Starts Play.” Babyccino, Babyccino, 13 Sept. 2013, https://babyccinokids.com/blog/2013/09/17/back-to-school-with-rain-starts-play/.`,
    `“Developmental Coordination Disorder.” CanChild, https://www.canchild.ca/en/diagnoses/developmental-coordination-disorder.`,
    `“An Introduction to DCD – Symptoms, Diagnosis & Treatment for Children.” The Child Development Centre, 25 Jan. 2019, https://www.thechildcentre.com/dcd-symptoms-diagnosis-treatment-children/.`,
    `The Moscow Times. “A Storm Sweeps through Moscow, in Photos.” The Moscow Times, The Moscow Times, 14 Nov. 2021, https://www.themoscowtimes.com/2018/04/23/moscow-weekend-storm-a61241.`,
    `Office of the New Jersey State Climatologist, https://climate.rutgers.edu/stateclim/?section=menu&+target=june20.`,
    `Shlabotnik, Joe. “Walking to School in the Rain.” Flickr, Yahoo!, 28 Sept. 2014, https://www.flickr.com/photos/joeshlabotnik/15361259036/in/photostream/.`,
    `“Sick Rainy Images.” Shutterstock, Shutterstock, https://www.shutterstock.com/search/sick+rainy.`,
    `Understood. “What Is Developmental Coordination Disorder (DCD)?” YouTube, YouTube, 31 Oct. 2018, https://www.youtube.com/watch?v=nzOZnS4xdqo.`,
    `WEWSTV, News 5 Cleveland. “Windy Weather and Umbrellas in Cleveland.” YouTube, YouTube, 29 Apr. 2014, https://www.youtube.com/watch?v=ULu4rH84NIs.`,
    `“Woremor 5G EMF Protection Umbrella.” EMR Shielding Solutions, https://www.emrss.com/products/woremor-emf-protection-umbrella.`
]


let instance = null;

export default class Work extends Route {
    constructor(defaultRoute) {
        if(instance != null) return this;

        super('Works Cited', defaultRoute);
        instance = this;

        this.html = $(this.init({ onClick: this.onClick.bind(this) }));
    }

    init({ onClick }) {
        return (
            <div class="grid grid-cols-full-bleed">
                <HomeLink onClick={onClick} currentPage='Citations' />
                <div class="col-start-2 mt-16 pl-4">
                    <div class="font-semibold text-6xl mb-8">Works Cited</div>
                    <div>
                        {citations.map(item => 
                            <div class="mb-3">- {item}</div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}