'use strict';

function handleButtonClick() {
    if (data.isAnonymous) {
        postData.user.displayname = "Anonymous";
        postData.user.userslug = "";
        postData.user.status = 'offline';
        postData.user.picture = '/assets/uploads/profile/anonymous.png';
    } 
}

const myButton = document.getElementById('myButton');

myButton.addEventListener('click', handleButtonClick);

define('forum/compose', ['hooks'], function (hooks) {
    const Compose = {};

    Compose.init = function () {
        const container = $('.composer');

        if (container.length) {
            hooks.fire('action:composer.enhance', {
                container: container,
            });
        }
    };

    return Compose;
});
