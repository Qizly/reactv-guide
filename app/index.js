import './main.css';
import React from 'react';
import ReactDOM from 'react-dom'
import ShowListing from './show-listing.jsx';

main();

function main() {
    ReactDOM.render(<ShowListing />, document.getElementById('app'));
}