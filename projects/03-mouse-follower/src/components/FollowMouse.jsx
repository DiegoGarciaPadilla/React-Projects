import { useState, useEffect } from "react";

function FollowMouse() {
  // Estado para controlar el efecto
  const [enabled, setEnabled] = useState(false);

  // Estado para guardar la posición del puntero
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Efecto
  useEffect(() => {
    // Función para seguir el puntero
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    // Activar el efecto si está habilitado
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    // Limpiar el efecto
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "3px solid white",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
}

export default FollowMouse;
