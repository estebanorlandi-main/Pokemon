import { getIconComponent, remToPx } from "../../utils";

function ListTypes({ types, size = 1, className, onClick }) {
  const TypesComponents = types.map((type, i) => {
    const Icon = getIconComponent(type);
    return (
      <li onClick={() => onClick(type)} key={type + i} className={className}>
        <Icon size={remToPx(size)} type={type} />
      </li>
    );
  });

  return TypesComponents;
}

export default ListTypes;
