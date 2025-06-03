import Button from "./Button";

interface FriendType {
  id: number;
  image: string;
  name: string;
  balance: number;
}

interface FriendProps {
  friend: FriendType;
  onSelection: (friend: FriendType) => void;
  selectedFriends: FriendType | null;
}

const Friend = ({ friend, onSelection, selectedFriends }: FriendProps) => {
  const isSelected =
    selectedFriends !== null && selectedFriends?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          Wisisz kase {friend.name} {Math.abs(friend.balance)}zł.
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} wisi tobie {Math.abs(friend.balance)}zł.
        </p>
      )}
      {friend.balance === 0 && <p>Nie masz długu wobec {friend.name}</p>}

      <Button onClick={() => onSelection(friend)}>Wybierz</Button>
    </li>
  );
};

export default Friend;
