import React from "react";
import { useEffect , useState } from "react";
import '../../CssComponent/wallhamsam/Commentbar.css';
import iconimg from '../../images/2815428.png';
function Commentbar(){
    const [boxContent , setboxContent] = useState([]);
    const [loading , setloading] = useState(false);
    const [page , setpage] = useState(1);
    const [more , setmore] =useState(true);
    const [scrollstop , setscrollstop] = useState(0);
    const loadcomments = () => {
        if (scrollstop >= 5) { 
            setmore(false);
            return;
          }
          setloading(true);
          fetch(`https://hamsam.tvapps.ir/api/v1/wall/posts?page=${page}`)
            .then((response) => response.json())
            .then((json) => {
              if (json && json.data && json.data.items) {
                setboxContent((prevContent) => {
                  const newItems = json.data.items.filter(
                    (item) => !prevContent.some((existingItem) => existingItem.id === item.id)
                  );
                  return [...prevContent, ...newItems]; 
                });
                setpage((prevPage) => prevPage + 1);    
                setscrollstop(prevCount => prevCount + 1);  
              }
              setloading(false); 
            })
            .catch((error) => {
              console.error("Error loading data:", error);
              setloading(false); 
            });
    };
    const handlescroll = () => {
        const scrollheight = document.documentElement.scrollheight;
        const scrolltop = document.documentElement.scrollTop;
        const clientheight = document.documentElement.clientHeight;

        if(scrollheight - scrolltop === clientheight && !loading){
            loadcomments();
        }
    }
    useEffect(() => {
        loadcomments();
        window.onscroll = handlescroll;
        return() => {
            window.onscroll = null;
        };
    }, [page]);
  
    return(
        <>
        <div>
            { boxContent.map((item,index) => {
                const userpic = item.user.pic ? item.user.pic :  iconimg;
                return(
                    <div key={index} className="comment-bar">
                        <img src={userpic} className="user-pic-img"/>
                        <div className="username">{item.user.first_name || item.user.mobile}</div>
                        <div className="created-at">{item.created_at}</div>
                        <div className="content">{item.content}</div>
                    </div>
                )
            })}
            {loading && <div>در حال بارگذاری</div>}
            
        </div>
        </>
    )
}
export default Commentbar;