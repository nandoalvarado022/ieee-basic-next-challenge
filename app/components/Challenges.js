const challenges = [
  "Crear un icono por cada desafio",
  "Configurar una página en la ruta /desafios",
  "Crear un componente reutilizable con sus estilos",
  "Exponer un endpoint mock en /api/challenges para obtener los desafios",
];

export default function Challenges() {
  // En App Router, este componente se renderiza en el servidor por defecto.
  // Eso mejora performance inicial porque el HTML llega listo al navegador.
  return (
    <section>
      <h2>Desafíos</h2>
      <ul>
        {challenges.map((challenge, index) => (
          // React usa "key" para reconciliar listas y actualizar el DOM de forma eficiente.
          <li key={`${challenge}-${index}`}>{challenge}</li>
        ))}
      </ul>
    </section>
  );
}
