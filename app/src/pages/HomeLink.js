import { createElement } from '../utils/createElement';

/** @jsx createElement */

let instance = null;


const HomeLink = (props) => {
    const {
        onClick,
        currentPage
    } = props

    return (
        <div class="fixed grid grid-cols-full-bleed mt-4 left-0 top-0 right-0">
            <div class="col-start-2 flex justify-between w-full">
                <div class="text-sm ml-4 font-semibold self-center">{currentPage}</div>
                <div onClick={() => { onClick('Home') }} class="hover:underline text-xs mr-8 font-semibold self-center">Home</div>
            </div>
        </div>
    );
}

export { HomeLink };