import React from "react";

import user from '../../data/users_images/user1.jpeg'
import user1 from '../../data/users_images/user.png'
import user2 from '../../data/users_images/user2.png'
import user3 from '../../data/users_images/user4.png'
import user4 from '../../data/users_images/user5.png'
import user5 from '../../data/users_images/user6.png'

const users = [
    {id:1,profile:user,left:"left-[0px]"},
    {id:2,profile:user1,left:"left-[30px]"},
    {id:3,profile:user2,left:"left-[60px]"},
    {id:4,profile:user3,left:"left-[90px]"},
    {id:5,profile:user4,left:"left-[120px]"},
    {id:6,profile:user5,left:"left-[150px]"},
]

const Members:React.FC =() =>{
    return(
        <>
        <div className="flex items-center justify-center gap-2 relative bg-red-500">
            {users.slice(0,5).map(user => (
                <div key={user.id} className={`w-14 h-14 bg-dark800 rounded-full absolute ${user.left}`}>
                    <img src={user.profile} alt="" className="w-full h-full rounded-full object-cover object-top" />
                </div>
            ))}
        </div>
        </>
    )
}
export default Members;