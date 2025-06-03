import Friend from "./Friend";

type FriendType = {
  id: string | number;
  name: string;
  image: string;
  balance: number | string;
};

interface FriendsListProps {
  friends: FriendType[];
}

const FriendsList: React.FC<FriendsListProps> = ({ friends }) => {
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
