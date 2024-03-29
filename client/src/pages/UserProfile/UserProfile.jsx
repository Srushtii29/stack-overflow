import React, { useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import moment from "moment";
import ProfileBio from "./ProfileBio";
import EditProfileForm from "./EditProfileForm";
import Avatar from "../../components/Avatar/Avatar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import "./UsersProfile.css";

const UserProfile = () => {
  const { id } = useParams();
  const [Switch, setSwitch] = useState(false);
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar
                backgroundColor="purple"
                color="white"
                fontSize="50px"
                px="40px"
                py="30px"
                borderRadius="5px"
              >
                {currentProfile?.name.charAt(0).toUpperCase()}
              </Avatar>
              <div className="user-name">
                <h1>{currentProfile?.name}</h1>
                <p>
                <i class="fa-sharp fa-solid fa-cake-candles"></i> Joined{" "}
                  {moment(currentProfile?.joinedOn).fromNow()}
                </p>
              </div>
            </div>
            {currentUser?.result._id === id && (
              <button
                type="button"
                onClick={() => setSwitch(true)}
                className="edit-profile-btn edit-profile-btn-big"
              >
                <i class="fa-solid fa-pen"></i> Edit Profile
              </button>
            )}
            {currentUser?.result._id === id && (
              <button
                type="button"
                onClick={() => setSwitch(true)}
                className="edit-profile-btn edit-profile-btn-small"
              >
                <i class="fa-solid fa-pen"></i>
              </button>
            )}
          </div>
          <>
            {Switch ? (
              <EditProfileForm
                currentUser={currentUser}
                setSwitch={setSwitch}
                className="edit-profile-form"
              />
            ) : (
              <ProfileBio currentProfile={currentProfile} />
            )}
          </>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;


// import React from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import moment from "moment";
// import { useState } from "react";

// import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
// import Avatar from "../../components/Avatar/Avatar";
// import EditProfileForm from "./EditProfileForm";
// import ProfileBio from "./ProfileBio";
// import './UsersProfile.css'

// const UserProfile = () => {
//   const { id } = useParams();
//   const users = useSelector((state) => state.usersReducer);
//   const currentProfile = users.filter((user) => user._id === id)[0];
//   const currentUser = useSelector((state) => state.currentUserReducer);

//   const [Switch, setSwitch] = useState(false);

//   return (
//     <div className="home-container-1">
//       <LeftSidebar />
//       <div className="home-container-2">
//         <section>
//           <div className="user-details-container">
//             <div className="user-details">
//               <Avatar
//                 backgroundColor="purple"
//                 color="white"
//                 fontSize="50px"
//                 px="40px"
//                 py="30px"
//               >
//                 {currentProfile?.name.charAt(0).toUpperCase()}
//               </Avatar>
//               <div className="user-name">
//                 <h1>{currentProfile?.name}</h1>
//                 <p>
//                   <i class="fa-sharp fa-solid fa-cake-candles"></i> Joined{" "}
//                   {moment(currentProfile?.joinedOn).fromNow()}
//                 </p>
//               </div>
//             </div>
//             {currentUser?.result._id === id && (
//               <button
//                 type="button"
//                 onClick={() => setSwitch(true)}
//                 className="edit-profile-btn"
//               >
//                 <p>
//                   <i class="fa-solid fa-pen"></i>Edit Profile
//                 </p>
//               </button>
//             )}
//           </div>
//           <>
//           {
//               Switch ? 
//               <EditProfileForm currentUser={currentUser} setSwitch={setSwitch} /> : 
//               <ProfileBio currentProfile={currentProfile}/>}
//           </>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
