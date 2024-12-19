class Route {
  static find() {
    return [
      {
        name: "Ruta Picacho",
        description: `
          🛑 Recorridos en cuatrimoto y RZR! 🛑
          <strong>Ruta Picacho 🦅</strong><br>
          Visitando: Amanecer 🌅 y Plaza Mirador.<br>
          Con degustación de esquites en diferentes colores & sabores. 🌽<br>
          🍹 Mezcal, pulque y bebidas sin alcohol. 🍷<br>
          🥖 Prueba del tradicional pan de queso de la región. 🥐<br>
          💫 <strong>DIVERSIÓN GARANTIZADA</strong> 💫
        `,
        images: ["/images/p.jpg", "/images/RU.jpg", "/images/TA.jpg", "/images/PI.jpg", "/images/CA.jpg", "/images/CHOR.jpg", "/images/RUT.jpg","/images/TAS.jpg"]
      },
      {
        name: "Ruta Local",
        description: `
          🛑 Recorridos en cuatrimoto y RZR! 🛑
          <strong>Ruta Local⛰</strong><br>
          Visitando:<br>
          💒 Capilla "Santa Cruz", ⛰ Vista trasera de Peña de Bernal, ⛰ Plaza Mirador.<br>
          Cava "Las Rocas Bernal" 🥂.<br>
          Con degustación de esquites en diferentes colores & sabores. 🌽<br>
          🍹 Mezcal, pulque y bebidas sin alcohol. 🍷<br>
          🥖 Prueba del tradicional pan de queso de la región. 🥐<br>
          💫 <strong>DIVERSIÓN GARANTIZADA</strong> 💫
        `,
        images: ["/images/IGLESIA.jpg", "/images/L.jpg", "/images/O.jpg", "/images/C.jpg", "/images/A.jpg", "/images/Lr.jpg", "/images/Lt.jpg", "/images/Ly.jpg", "/images/COMIDA.jpg", "/images/VISTA.jpg", "/images/FAM.jpg"]
      },
      {
        name: "Ruta Camino Nacional",
        description: `
          🛑 Recorridos en cuatrimoto y RZR! 🛑
          <strong>Ruta Camino Nacional ⛰</strong><br>
          Visitando:<br>
          💒 Capilla "Santa Cruz", ⛰ Camino de terracería 🌄, ⛰ Mirador de la luz, ⛰ Plaza Mirador.<br>
          Con degustación de esquites en diferentes colores & sabores. 🌽<br>
          🍹 Mezcal, pulque y bebidas sin alcohol. 🍷<br>
          🥖 Prueba del tradicional pan de queso de la región. 🥐<br>
          💫 <strong>DIVERSIÓN GARANTIZADA</strong> 💫
        `,
        images: ["/images/CUA.jpg", "/images/N1.jpg", "/images/A2.jpg", "/images/C3.jpg", "/images/I4.jpg", "/images/O5.jpg", "/images/N6.jpg", "/images/A7.jpg"]
      },
      {
        name: "Ruta Pista",
        description: `
          🛑 Recorridos en cuatrimoto y RZR! 🛑
          <strong>Ruta Pista 🏎</strong><br>
          Visitando:<br>
          💒 Capilla "Santa Cruz", ⛰ Plaza Mirador y Cava "Las Rocas Bernal" 🥂.<br>
          Recorre 5 km de pista. 🏎<br>
          Con degustación de esquites en diferentes colores & sabores. 🌽<br>
          🍹 Mezcal, pulque y bebidas sin alcohol. 🍷<br>
          🥖 Prueba del tradicional pan de queso de la región. 🥐<br>
          💫 <strong>DIVERSIÓN GARANTIZADA</strong> 💫
        `,
        images: ["/images/FL.jpg", "/images/FLO.jpg", "/images/FO.jpg", "/images/FA.jpg"]
      },
      {
        name: "Ruta Castillo de Chocolate",
        description: `
          🛑 Recorridos en cuatrimoto y RZR! 🛑
          <strong>Ruta Castillo de Chocolate 🍫</strong><br>
          Visitando:<br>
          🌄 Paisajes de las afueras del pueblo, camino por empedrado, carretera y terracería.<br>
          🍫 Conoce su proceso de elaboración de principio a fin.<br>
          ☕ Degusta chocolate en diferentes presentaciones y sabores.<br>
          💫 <strong>DIVERSIÓN GARANTIZADA</strong> 💫
        `,
        images: ["/images/CHO.jpg", "/images/CH.jpg", "/images/PIN.jpg", "/images/CAST.jpg", "/images/CAS.jpg", "/images/ANT.jpg", "/images/MES.jpg", "/images/COM.jpg"]
      }
    ];
  }
}

module.exports = Route;
