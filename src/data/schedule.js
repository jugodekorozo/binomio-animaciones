export const phases = {
  'Investigación': { color: '#2E86AB', bg: 'bg-phase-invest', label: 'Investigación' },
  'Preproducción': { color: '#A23B72', bg: 'bg-phase-preprod', label: 'Preproducción' },
  'Producción':   { color: '#F18F01', bg: 'bg-phase-prod',    label: 'Producción' },
  'Postproducción': { color: '#C73E1D', bg: 'bg-phase-postprod', label: 'Postproducción' },
  'Entrega':      { color: '#3B1F2B', bg: 'bg-phase-entrega', label: 'Entrega' },
}

export const schedule = [
  {
    day: 1, phase: 'Investigación',
    activities: ['Kick-off con estudiantes', 'Presentar brief y objetivos', 'Asignar ruta de investigación (Perplexity)'],
    responsible: 'Orlando + equipo',
    deliverable: 'Brief aprobado',
  },
  {
    day: 2, phase: 'Investigación',
    activities: ['Recopilación datos: historia del Binomio, discografía, hitos', 'Cargar fuentes en NotebookLM'],
    responsible: 'Equipo (4 est.)',
    deliverable: 'Banco de datos crudo',
  },
  {
    day: 3, phase: 'Investigación',
    activities: ['Investigar: IA + música + cultura + animación', 'Referentes visuales (moodboard)'],
    responsible: 'Equipo (4 est.)',
    deliverable: 'Moodboard + refs',
  },
  {
    day: 4, phase: 'Preproducción',
    activities: ['Síntesis en NotebookLM: doc maestro', 'Definir ejes narrativos por pieza', 'Determinar cantidad de animaciones'],
    responsible: 'Orlando + equipo',
    deliverable: 'Doc. de investigación + ejes definidos',
  },
  {
    day: 5, phase: 'Preproducción',
    activities: ['Redacción de guiones por pieza', 'Definir estructura visual (storyboard textual)'],
    responsible: 'Orlando + 2 est.',
    deliverable: 'Guiones v1',
  },
  {
    day: 6, phase: 'Preproducción',
    activities: ['Storyboards ilustrados (thumbnail)', 'Definir paleta de color y estilo gráfico'],
    responsible: 'Equipo completo',
    deliverable: 'Storyboards + guía de estilo',
  },
  {
    day: 7, phase: 'Preproducción',
    activities: ['Revisión y ajustes de storyboards', 'Diseño de personajes/elementos clave', 'Asignación de piezas por dupla'],
    responsible: 'Orlando + equipo',
    deliverable: 'Assets aprobados + asignaciones',
  },
  {
    day: 8, phase: 'Producción',
    activities: ['Dibujo de poses clave (keyframes)', 'Cada dupla trabaja su pieza asignada'],
    responsible: '4 duplas',
    deliverable: 'Poses clave digitalizadas',
  },
  {
    day: 9, phase: 'Producción',
    activities: ['Completar poses clave + intermedios mínimos', 'Importar a After Effects'],
    responsible: '4 duplas',
    deliverable: 'Secuencias importadas',
  },
  {
    day: 10, phase: 'Producción',
    activities: ['Aplicar Turbulence Displacement (random seed)', 'Ajustar timing y ritmo por pieza'],
    responsible: '4 duplas + Orlando',
    deliverable: 'Animaciones en bruto',
  },
  {
    day: 11, phase: 'Producción',
    activities: ['Composición: fondos, tipografía, transiciones', 'Integración de audio/música de referencia'],
    responsible: '4 duplas',
    deliverable: 'Comps con audio temp.',
  },
  {
    day: 12, phase: 'Postproducción',
    activities: ['Revisión general con Orlando', 'Correcciones de timing, color, composición'],
    responsible: 'Orlando + equipo',
    deliverable: 'Lista de correcciones',
  },
  {
    day: 13, phase: 'Postproducción',
    activities: ['Implementar correcciones', 'Audio final (música + SFX)', 'Color grading y ajustes finales'],
    responsible: '4 duplas + Orlando',
    deliverable: 'Piezas corregidas',
  },
  {
    day: 14, phase: 'Postproducción',
    activities: ['Renders finales (formato evento)', 'Revisión técnica: resolución, codec, duración'],
    responsible: 'Equipo completo',
    deliverable: 'Renders exportados',
  },
  {
    day: 15, phase: 'Entrega',
    activities: ['Entrega de archivos al equipo del evento', 'Prueba de reproducción en contexto', 'Documentación del proceso (portafolio)'],
    responsible: 'Orlando + equipo',
    deliverable: 'Paquete final entregado',
  },
]
