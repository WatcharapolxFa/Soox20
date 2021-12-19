import React from 'react'

const Navbar = () => {
    return (
     <div>
{
         <div class="NavBar">
             <ul>
             <li><b ><img class="j" src="https://freepngimg.com/thumb/japanese/29832-3-japanese-free-download.png" alt=""/></b></li>
                <li><b > LIBARY</b></li>
            
                <li ><a  href="/listeningNow" ><img class="j" src="./img/playNow1.png" alt=""/>Listen Now </a></li>
                <li><a href="browse">Browse </a></li>
                <li><a href="/search">Search </a></li>
                
            <li><b > DISCOVER</b></li>
            
            <li ><a  href="/myplaylists" >MY PLAYLISTS</a></li>
                
            </ul>
        </div>
}
        
   </div> )
}

export default Navbar
