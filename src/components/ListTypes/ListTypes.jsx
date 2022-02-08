import { getIconComponent } from "../../utils";

function ListTypes({ types, className }) {
  const TypesComponents = types.map(({ type: { name } }) => {
    const Icon = getIconComponent(name);
    return (
      <li className={className}>
        <Icon size="1.25rem" type={name} />
      </li>
    );
  });

  return TypesComponents;
}

export default ListTypes;
