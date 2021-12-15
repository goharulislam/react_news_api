import React, {useState} from "react";
import Header from "../components/Header";
import TopStories from "../components/TopStories";
import Bookmarks from "../components/Bookmarks";
import Detail from "../components/Detail";

function Home(){
let [topStories, setTopStories] = useState(true);
let [bookmarks, setBookmarks] = useState(false);
let [detail, setDetail] = useState(false);
let [msg, setMsg] = useState('home');
let [topic, setTopic] = useState('home');
let [i, setI] = useState([]);
let [bookmarksList, setBookmarksList] = useState([]);

function show_component(name, i){
	if(typeof(i)==='string'){setMsg(i)};
	//console.log('Home - '+i);
	switch(name){
		case 'topstories':
			setTopStories(true);
			setBookmarks(false);
			setDetail(false);
			setI(i);
			setTopic(i);
		break;
		case 'bookmarks':
			setTopStories(false);
			setBookmarks(true);
			setDetail(false);
		break;
		case 'detail':
			setI(i);
			setTopStories(false);
			setBookmarks(false);
			setDetail(true);
		break;
		case 'add_bookmark':
			/* First check if already exist or not. Then push or console.log*/
			setI(i);
			if(bookmarksList.includes(i) === false){bookmarksList.push(i);}else{console.log("Already exists");}
			//console.log('List: '+ JSON.stringify(bookmarksList[0].title, null, 2));
		break;
		default:
			setTopStories(true);
			setBookmarks(false);
			setDetail(false);
			setBookmarksList([]);
	}
}

return(
    <div>
		<Header parentCallback={show_component} />
		{ topStories && <span className="float-start alert alert-warning p-1 ps-3 pe-3" role="alert" style={{textTransform:'uppercase'}}>{msg}</span> }
        { topStories && <button className="float-end btn btn-primary" onClick={()=>show_component('bookmarks')}>Show Bookmarks</button> }
        { topStories && <TopStories i={topic} parentCallback={show_component} /> }
		{ bookmarks && <Bookmarks i={bookmarksList} parentCallback={show_component} /> }
		{ detail && <Detail i={i} parentCallback={show_component} /> }
    </div>
  );
}
export default Home;