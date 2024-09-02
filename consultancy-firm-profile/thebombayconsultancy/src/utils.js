export const getImageUrl = (path) => { // relative path
    return new URL(`/assets/${path}`, import.meta.url).href; // string interpretation
};
// this helps in dynamically importing images in our different components

