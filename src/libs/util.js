let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : 'Answer It';
    window.document.title = title;
};

export default util;