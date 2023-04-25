import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import "./News.css"

const style = {
    border: "2.5px solid green",
    margin:12,
    padding: 8,
};

const News = () =>{
    const [dataSource,setDataSource] = useState(Array.from({length:20}));
    return (
        <div>
            <h1 className="header-style">Recent Announcements & NEWS</h1>
            <div id="Scrolldown" style={{height:530,width:750,overflow:"auto"}}>
        <InfiniteScroll
            dataLength={dataSource.length}
            loader={<p>Loading ... </p>}
            endMessage = {<p>You're all Covered Up</p>}

        >
            {dataSource.map((item,index) =>{
                return (
                    <div style={style}>
                        This is a div #{index + 1} inside Infinite Scroll.
                    </div>
                );
            })}
        </InfiniteScroll>
        </div>
        </div>

    )
}

export default News;