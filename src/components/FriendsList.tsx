import initialFriends from "../data/initialFriends";
import Friend from "./Friend";

const FriendsList = () => {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={{
            ...friend,
            balance: Number(friend.balance),
          }}
          key={friend.id}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
