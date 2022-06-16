import { createElement } from '../utils/createElement';

/** @jsx createElement */

let instance = null;


const HomeLink = (props) => {
    const {
        onClick,
        currentPage
    } = props

    return (
        <div class="fixed flex justify-between mt-4 left-0 top-0 w-full">
            <div class="text-sm ml-4 font-semibold self-center">{currentPage}</div>
            <div onClick={() => { onClick('Home') }} class="cursor-pointer text-xs mr-8 font-semibold self-center">Home</div>
        </div>
    );
}

export { HomeLink };