const ComponentPicker = ({ onAdd }) => {
  const components = [
    { type: "h1", label: "Heading" },
    { type: "p", label: "Paragraph" },
    { type: "button", label: "Button" },
    { type: "div", label: "Container" },
  ];

  return (
    <div className="component-picker">
      {components.map((comp) => (
        <button
          key={comp.type}
          onClick={() => onAdd(comp.type)}
          className="p-2 border rounded"
        >
          {comp.label}
        </button>
      ))}
    </div>
  );
};

export default ComponentPicker;
