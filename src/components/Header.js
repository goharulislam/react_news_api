import React from 'react';
export default function Header(props){
const options = [
        { value: 'arts', text: 'Arts' },
        { value: 'automobiles', text: 'Automobiles' },
        { value: 'books', text: 'Books' },
        { value: 'business', text: 'Business' },
        { value: 'fashion', text: 'Fashion' },
        { value: 'food', text: 'Food' },
        { value: 'health', text: 'Health' },
        { value: 'home', text: 'Home' },
        { value: 'insider', text: 'Insider' },
        { value: 'magazine', text: 'Magazine' },
        { value: 'movies', text: 'Movies' },
        { value: 'nyregion', text: 'NY Region' },
        { value: 'obituaries', text: 'Obituaries' },
        { value: 'opinion', text: 'Opinion' },
        { value: 'politics', text: 'Politics' },
        { value: 'realestate', text: 'Realestate' },
        { value: 'science', text: 'Science' },
        { value: 'sports', text: 'Sports' },
        { value: 'sundayreview', text: 'Sunday Review' },
        { value: 'technology', text: 'Technology' },
        { value: 'theater', text: 'Theater' },
        { value: 't-magazine', text: 'T-magazine' },
        { value: 'travel', text: 'Travel' },
        { value: 'upshot', text: 'Upshot' },
        { value: 'us', text: 'US' },
        { value: 'world', text: 'World' },
    ];

function toTitleCase(str){
    return str.replace(
        /\w\S*/g,
        function(txt){
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
);
}

function open_section(i){
    if(i !== "home"){
        i = toTitleCase(i);
    }
    props.parentCallback('topStories', i);
}

function render(){
    const listItems = options.map((o) => <li key={(o.value)}><button className="btn btn-default" onClick={()=>open_section(o.value)}>{ o.text }</button></li>);
    return (
        <React.Fragment>{listItems}</React.Fragment>
    );
}
return(
    <section className="col-md-12">
        <h4>New York Times</h4>
        <ul>
        {render()}
        </ul>
    </section>
);
}