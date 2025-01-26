const ComponentPicker = ({ onAdd }) => {
  const components = [
    {
      type: "h1",
      label: "This is heading",
      style: {
        fontSize: "24px",
        margin: "10px",
        color: "#4A90E2", // A soft blue color
        textAlign: "center",
      },
    },
    {
      type: "p",
      label: "Welcome to my awesome paragraph!",
      style: {
        margin: "10px",
        color: "#7B3F00", // Warm brown color
        fontSize: "18px",
        fontStyle: "italic",
      },
    },
    {
      type: "button",
      label: "Click Me",
      style: {
        padding: "10px",
        margin: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#FFD700", // Gold color for attention
        cursor: "pointer",
        color: "#333",
      },
      onClick: () => alert("Hello! You clicked the button."),
    },
    {
      type: "div",
      label: "Container",
      style: {
        backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
          16
        )}`, // Random soft color
        padding: "20px",
        border: "1px solid #ccc",
        margin: "10px",
        borderRadius: "12px", // Rounded borders
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
      },
    },
  ];

  return (
    <div className="component-picker flex gap-2 flex-col justify-start items-start">
      {components.map((comp) => (
        <button
          key={comp.type}
          onClick={() => onAdd(comp)}
          className="p-2 border rounded bg-purple-300"
        >
          {comp.label}
        </button>
      ))}
    </div>
  );
};

export default ComponentPicker;
