// Setup fullpage.js
$(document).ready(function() {
    $('#fullpage').fullpage({
      controlArrows: false
    });
});

//Currently am loading React from CDN
var Nav = require('./home_comps/Nav.js');
var Footer = require('./home_comps/Footer.js');
var GoogleAuth = require('./signup_comps/GoogleAuth.js');
var FacebookAuth = require('./signup_comps/FacebookAuth.js');
var SpotifyAuth = require('./signup_comps/SpotifyAuth.js');
var TwitterAuth = require('./signup_comps/TwitterAuth.js');

React.render(
        <Nav />,
        document.getElementById('sign-head')
);

React.render(
        <Footer />,
        document.getElementById('sign-foot')
);

React.render(
        <div className="center">
          <GoogleAuth />
        </div>,
        document.getElementById('google')
);

React.render(
        <div className="center">
          <FacebookAuth />
        </div>,
        document.getElementById('facebook')
);

React.render(
        <div className="center">
          <SpotifyAuth />
        </div>,
        document.getElementById('spotify')
);
React.render(
        <div className="center">
            <TwitterAuth />
        </div>,
        document.getElementById('twitter')
);
