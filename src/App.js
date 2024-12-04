import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Navbar, Feed, ChannelDetail, SearchFeed, VideoDetail} from './components'


function App()
{
    return <div style={{backgroundColor: "#000", color: "white"}}>
       
    <Navbar />
    <Routes>
        <Route path='/' element={<Feed />}/>
        <Route path='/video/:id' element={<VideoDetail/>}/>
        <Route path='/channel/:id' element={<ChannelDetail/>}/>
        <Route path='/search/:serachTerm' element={<SearchFeed/>}/>
    </Routes></div>
}

export default App;