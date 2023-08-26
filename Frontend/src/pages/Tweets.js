import React, { useEffect } from "react";
import SideBar from "../components/Sidebar";

const Tweets = () => {
  useEffect(() => {
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-timeline");
    anchor.setAttribute("data-theme", "dark");
    anchor.setAttribute("data-tweet-limit", "5");
    anchor.setAttribute("data-chrome", "noheader nofooter noborders");
    anchor.setAttribute("href", "https://twitter.com/TTCnotices?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor");
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <div>
        <span><SideBar /></span>
        <section  className="twitterContainer" >
        <div class="overflow-x-auto bg-slate-400 shadow-md rounded pt-12 pb-6 pl-14 pr-12 mb-4 w-2/3 mx-auto" className="twitter-embed"></div>
        </section>
    </div>
  );
};

export default Tweets;