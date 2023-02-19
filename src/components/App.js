import { Profile } from "./profile/profile";
import { Statistics } from "./statistic/statistics";
import { FriendListItem } from "./friends/friendsList";

import  data  from "../data/data.json";
import user from "../data/user.json"
import friends from "../data/friends.json"


export const App = () => {
  return (
    <div>
      <Profile profiles={user}
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>
      <Statistics
        title="Upload stats" 
        items={data}

      />
      <FriendListItem items={friends} />;
    </div>
  );
};




