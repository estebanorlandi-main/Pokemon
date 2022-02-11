import { getIconComponent, remToPx } from "../../utils";

function ListTypes({ types, size = 1, className, onClick }) {
  const TypesComponents = types.map(({ type: { name }, i }) => {
    const Icon = getIconComponent(name);
    return (
      <li onClick={() => onClick(name)} key={name + i} className={className}>
        <Icon size={remToPx(size)} type={name} />
      </li>
    );
  });

  return TypesComponents;
}

export default ListTypes;
