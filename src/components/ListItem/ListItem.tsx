import * as C from "./ListItem.style";
import React from "react";
import { ListItemType } from "../../types/ListItem.type";

type Props = {
  item: ListItemType;
  onChange: (id: string, done: boolean) => void;
  onRemove: (id:string) => void
};

const ListItem = ({ item, onChange, onRemove }: Props) => {
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    const id = item.id;
    onChange(id, value);
  };

  const handleRemove =() => {
    onRemove(item.id)
  }

  return (
    <C.Container done={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        name="isChecked"
        id={item.id}
        onChange={handleCheck}
      />
      <label htmlFor={item.id}>{item.name}</label>
      <button onClick={handleRemove}>Remover</button>
    </C.Container>
  );
};

export default ListItem;
