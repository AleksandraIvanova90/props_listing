import Item from "../models/item";

function title({title}: Item) {
    if (title.length < 50) return title;
    
    return `${title.slice(0, 50)} ...`;

}

export default title