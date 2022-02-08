import { getIconComponent, remToPx } from "../../utils";

function ListTypes({ types, size = 1, className }) {
  const TypesComponents = types.map(({ type: { name }, i }) => {
    const Icon = getIconComponent(name);
    return (
      <li key={name + i} className={className}>
        <Icon size={remToPx(size)} type={name} />
      </li>
    );
  });

  return TypesComponents;
}

export default ListTypes;
