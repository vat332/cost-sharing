import Button from "./Button";

interface FriendProps {
  friend: {
    image: string;
    name: string;
    balance: number;
  };
}

const Friend = ({ friend }: FriendProps) => {
  return (
    <li>
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
      <Button>Wybierz</Button>
    </li>
  );
};

export default Friend;
