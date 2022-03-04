import { getIconComponent, remToPx } from '../../utils';

function ListTypes({ types, size = 1, onClick, withText, className }) {
  const TypesComponents = types.map((type) => {
    const Icon = getIconComponent(type);

    return (
      <button
        type="button"
        key={type}
        onClick={() => onClick(type)}
        className={className}
      >
        <Icon size={remToPx(size)} type={type} />
        {withText && type}
      </button>
    );
  });

  return TypesComponents;
}

export default ListTypes;
