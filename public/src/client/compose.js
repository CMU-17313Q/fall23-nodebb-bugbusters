'use strict';

const myButton = document.getElementById('myButton');
const postData = {
  user: {}
};

myButton.addEventListener('click', () => {
  if (data.isAnonymous) {
    Object.assign(postData.user, {
      displayname: 'Anonymous',
      userslug: '',
      status: 'offline',
      picture: '/assets/uploads/profile/anonymous.png'
    });
  }
});


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
