import { getIconComponent } from "../../utils";

function ListTypes({ types, className }) {
  const remToPx = (rem) =>
    rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

  const TypesComponents = types.map(({ type: { name }, i }) => {
    const Icon = getIconComponent(name);
    return (
      <li key={name + i} className={className}>
        <Icon size={remToPx(1)} type={name} />
      </li>
    );
  });

  return TypesComponents;
}

export default ListTypes;
