export const phases = {
  'Investigación':  { color: '#2E86AB', bg: 'bg-phase-invest',   label: 'Investigación' },
  'Preproducción':  { color: '#A23B72', bg: 'bg-phase-preprod',  label: 'Preproducción' },
  'Producción':     { color: '#F18F01', bg: 'bg-phase-prod',     label: 'Producción' },
  'Postproducción': { color: '#C73E1D', bg: 'bg-phase-postprod', label: 'Postproducción' },
  'Entrega':        { color: '#3B1F2B', bg: 'bg-phase-entrega',  label: 'Entrega' },
}

export const schedule = [
  {
    day: 1, date: 'Sáb 28 mar', phase: 'Investigación',
    activities: [
      'Kick-off: presentar brief y objetivos del proyecto',
      'Asignar rutas de investigación con Perplexity',
      'Definir preguntas clave por cada eje temático',
    ],
    responsible: 'Prof. Odis + equipo completo',
    deliverable: 'Brief aprobado + preguntas de investigación',
  },
  {
    day: 2, date: 'Lun 30 mar', phase: 'Investigación',
    activities: [
      'Recopilar: historia del Binomio, integrantes y hitos discográficos',
      'Investigar el vallenato como patrimonio cultural (UNESCO)',
      'Cargar fuentes y notas en NotebookLM',
    ],
    responsible: 'Equipo (4 est.)',
    deliverable: 'Banco de datos crudo en NotebookLM',
  },
  {
    day: 3, date: 'Mar 31 mar', phase: 'Investigación',
    activities: [
      'Investigar: IA + creatividad + animación + cultura',
      'Buscar referentes de animación frame-by-frame latinoamericana',
      'Construir moodboard de estilo visual y paleta de color',
    ],
    responsible: 'Equipo (4 est.)',
    deliverable: 'Moodboard + referencias de animación',
  },
  {
    day: 4, date: 'Mié 1 abr', phase: 'Investigación',
    activities: [
      'Síntesis en NotebookLM: cruzar fuentes y extraer ideas clave',
      'Usar Claude para construir el documento maestro',
      'Identificar momentos del Binomio que se prestan para animación corta',
    ],
    responsible: 'Prof. Odis + equipo',
    deliverable: 'Documento maestro de investigación',
  },
  {
    day: 5, date: 'Jue 2 abr', phase: 'Preproducción',
    activities: [
      'Definir ejes narrativos de cada pieza animada',
      'Redactar guiones v1 (texto + descripción visual por escena)',
      'Determinar duración exacta de cada animación (8–15 seg)',
    ],
    responsible: 'Prof. Odis + 2 est.',
    deliverable: 'Guiones v1 por pieza',
  },
  {
    day: 6, date: 'Vie 3 abr', phase: 'Preproducción',
    activities: [
      'Storyboards en thumbnail: 6–10 viñetas por pieza',
      'Definir composición, encuadre y movimiento de cámara',
      'Boceto de personajes y elementos gráficos principales',
    ],
    responsible: 'Angello + duplas',
    deliverable: 'Storyboards thumbnail (borrador)',
  },
  {
    day: 7, date: 'Lun 6 abr', phase: 'Preproducción',
    activities: [
      'Revisión de storyboards con Prof. Odis y Ana',
      'Diseño de personajes y elementos clave según guía de estilo',
      'Ajustes de narrativa y composición',
    ],
    responsible: 'Prof. Odis + Ana + Angello',
    deliverable: 'Storyboards aprobados',
  },
  {
    day: 8, date: 'Mar 7 abr', phase: 'Preproducción',
    activities: [
      'Documentar guía de estilo visual completa',
      'Paleta de color, tipografía, iconografía y texturas',
      'Aprobar assets de personajes y fondos antes de producción',
    ],
    responsible: 'Ana + equipo',
    deliverable: 'Guía de estilo + assets aprobados',
  },
  {
    day: 9, date: 'Mié 8 abr', phase: 'Preproducción',
    activities: [
      'Asignación oficial de piezas por dupla de animación',
      'Claude: generar brief detallado por pieza',
      'Preparar plantillas de After Effects para cada dupla',
    ],
    responsible: 'Prof. Odis + Frank',
    deliverable: 'Asignaciones + brief por pieza',
  },
  {
    day: 10, date: 'Jue 9 abr', phase: 'Producción',
    activities: [
      'Dibujar poses clave (3–5 por pieza) en papel o Procreate',
      'Cada dupla trabaja sobre su pieza asignada',
      'Check de avance al final del día',
    ],
    responsible: '4 duplas',
    deliverable: 'Poses clave dibujadas',
  },
  {
    day: 11, date: 'Vie 10 abr', phase: 'Producción',
    activities: [
      'Digitalizar y limpiar ilustraciones en Photoshop / Illustrator',
      'Exportar capas separadas: personaje, fondo, detalles',
      'Verificar resolución, formato y nomenclatura de archivos',
    ],
    responsible: '4 duplas',
    deliverable: 'Capas digitalizadas listas para AE',
  },
  {
    day: 12, date: 'Lun 13 abr', phase: 'Producción',
    activities: [
      'Importar secuencias a After Effects con capas separadas',
      'Aplicar efecto Turbulent Displace con Random Seed animado',
      'Ajustar Amount, Size y evolución del efecto por pieza',
    ],
    responsible: '4 duplas + Prof. Odis',
    deliverable: 'Animaciones con efecto Turbulence aplicado',
  },
  {
    day: 13, date: 'Mar 14 abr', phase: 'Producción',
    activities: [
      'Composición final: integrar fondos, tipografía y transiciones',
      'Animar posiciones, escalas y opacidades entre poses clave',
      'Check de ritmo visual y timing con el director creativo',
    ],
    responsible: '4 duplas',
    deliverable: 'Composiciones completas (sin audio final)',
  },
  {
    day: 14, date: 'Mié 15 abr', phase: 'Producción',
    activities: [
      'Integrar audio de referencia (música del Binomio) en cada pieza',
      'Sincronizar cortes y movimientos con el ritmo musical',
      'Revisión cruzada entre duplas: coherencia de estilo',
    ],
    responsible: '4 duplas + Maikol + Adrián',
    deliverable: 'Composiciones con audio temp.',
  },
  {
    day: 15, date: 'Jue 16 abr', phase: 'Postproducción',
    activities: [
      'Revisión general con Prof. Odis: todas las piezas en secuencia',
      'Evaluar coherencia visual, narrativa y rítmica del conjunto',
      'Generar lista de correcciones prioritarias por pieza',
    ],
    responsible: 'Prof. Odis + equipo',
    deliverable: 'Lista de correcciones documentada',
  },
  {
    day: 16, date: 'Vie 17 abr', phase: 'Postproducción',
    activities: [
      'Implementar correcciones de composición, timing y color',
      'Audio final: mixing, SFX y balance (Maikol + Adrián)',
      'Color grading y ajustes de contraste/saturación finales',
    ],
    responsible: '4 duplas + Maikol + Adrián',
    deliverable: 'Piezas corregidas con audio definitivo',
  },
  {
    day: 17, date: 'Lun 20 abr', phase: 'Entrega',
    activities: [
      'Renders finales en el formato y codec requerido por el evento',
      'Revisión técnica: resolución, duración exacta, codec de audio',
      'Entrega del paquete final al equipo del Festival',
      'Documentación del proceso para portafolio del programa',
    ],
    responsible: 'Prof. Odis + Frank + equipo',
    deliverable: 'Paquete final entregado al Festival',
  },
]
