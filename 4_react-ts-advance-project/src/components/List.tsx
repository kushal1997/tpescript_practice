import { ReactNode } from "react";

type ListProps<T>= {
    items:T[];
    renderItems:(items:T)=>ReactNode;
}
const List =<T,>({items,renderItems}:ListProps<T>) => {
  return (
    <ul>{items.map(renderItems)}</ul>
  )
}

export default List