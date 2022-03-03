import { getIconComponent, remToPx } from "../../utils";

function ListTypes({ types, size = 1, onClick, withText, ...props }) {
  const TypesComponents = types.map((type, i) => {
    const Icon = getIconComponent(type);

    return (
      <>
        <li key={type + i} onClick={() => onClick(type)} {...props}>
          <Icon size={remToPx(size)} type={type} />
          {withText && type}
        </li>
      </>
    );
  });

  return TypesComponents;
}

export default ListTypes;
