import { People } from "../App";
import "../css/list.css";

interface Props {
  user: People["userList"];
}

const List: React.FC<Props> = (props) => {
  const { user } = props;
  return (
    <div className="list-container">
      <h1>List</h1>
      {user.map<JSX.Element>((user, index) => {
        return (
          <div key={index} className="list-item-container">
            {user.name} - {user.age} - {user.bio}
          </div>
        );
      })}
    </div>
  );
};

export default List;
