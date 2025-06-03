interface FriendProps {
  friend: {
    image: string;
    name: string;
  };
}

const Friend = ({ friend }: FriendProps) => {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
    </li>
  );
};

export default Friend;
