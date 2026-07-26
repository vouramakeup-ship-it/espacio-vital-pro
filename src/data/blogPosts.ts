export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "tecnicas-mindfulness-dia-a-dia",
    title: "5 Técnicas de Mindfulness para el Día a Día",
    excerpt:
      "Descubre cómo incorporar la atención plena en tu rutina diaria para reducir el estrés y mejorar tu bienestar.",
    date: "15 Mar 2024",
    readTime: "5 min",
    category: "Mindfulness",
    content: [
      "El mindfulness, o atención plena, consiste en llevar la atención al momento presente con una actitud de apertura y sin juicio. No requiere horas de meditación: pequeños gestos diarios pueden transformar tu relación con el estrés.",
      "1. Respiración consciente (3 minutos). Siéntate con la espalda apoyada, cierra los ojos y sigue el recorrido del aire al entrar y salir. Cuando la mente se distraiga, vuelve con amabilidad a la respiración.",
      "2. Anclaje sensorial 5-4-3-2-1. Identifica 5 cosas que ves, 4 que puedes tocar, 3 que oyes, 2 que hueles y 1 que saboreas. Es especialmente útil en momentos de ansiedad.",
      "3. Comer con atención. Dedica los primeros dos minutos de una comida a observar colores, texturas y sabores, masticando despacio y soltando el móvil.",
      "4. Caminata consciente. En trayectos cortos, presta atención a la planta de los pies al contactar con el suelo y al ritmo de tus pasos.",
      "5. Pausa antes de reaccionar. Ante un mensaje o comentario que te activa, respira tres veces antes de responder. Ese pequeño espacio es donde vive tu libertad de elección.",
      "La constancia importa más que la duración. Cinco minutos al día, sostenidos durante semanas, generan cambios reales en la manera en que gestionas tus emociones.",
    ],
  },
  {
    slug: "identificar-manejar-ansiedad",
    title: "Cómo Identificar y Manejar la Ansiedad",
    excerpt:
      "Aprende a reconocer los síntomas de ansiedad y técnicas efectivas para gestionarla de manera saludable.",
    date: "08 Mar 2024",
    readTime: "7 min",
    category: "Salud Mental",
    content: [
      "La ansiedad es una respuesta natural del organismo ante una amenaza percibida. El problema aparece cuando se activa de forma intensa, frecuente o desproporcionada, interfiriendo en la vida cotidiana.",
      "Señales físicas habituales: taquicardia, tensión muscular, opresión en el pecho, dificultad para respirar, molestias digestivas, sudoración o problemas de sueño.",
      "Señales mentales y emocionales: pensamientos anticipatorios, rumiación, dificultad para concentrarse, irritabilidad, sensación de peligro inminente y necesidad constante de control.",
      "Qué ayuda a corto plazo: respiración diafragmática con exhalación más larga que la inhalación, ejercicio físico moderado, reducir cafeína y limitar el consumo de noticias o redes.",
      "Qué ayuda a medio plazo: cuestionar los pensamientos catastróficos (¿qué evidencia tengo?, ¿qué le diría a un amigo?), exponerse de forma gradual a lo que se evita y mantener rutinas de sueño estables.",
      "Cuándo pedir ayuda profesional: si la ansiedad se mantiene la mayor parte de los días durante más de un mes, si aparecen crisis de pánico o si te lleva a evitar situaciones importantes de tu vida.",
      "La terapia psicológica cuenta con tratamientos eficaces y bien contrastados para los trastornos de ansiedad. Pedir ayuda no es un signo de debilidad, sino de cuidado hacia ti.",
    ],
  },
  {
    slug: "importancia-autocompasion",
    title: "La Importancia de la Autocompasión",
    excerpt:
      "Ser amable contigo mismo/a es fundamental para tu salud emocional. Descubre por qué y cómo practicarla.",
    date: "01 Mar 2024",
    readTime: "6 min",
    category: "Desarrollo Personal",
    content: [
      "La autocompasión es tratarte con la misma amabilidad y comprensión con la que tratarías a alguien a quien quieres cuando lo está pasando mal.",
      "Tiene tres componentes: amabilidad hacia uno mismo frente a la autocrítica, humanidad compartida (el sufrimiento forma parte de la experiencia humana) y atención plena para reconocer el malestar sin exagerarlo ni negarlo.",
      "Un mito frecuente es pensar que ser duro contigo mismo te hace más productivo. La evidencia apunta a lo contrario: la autocrítica aumenta la ansiedad y la evitación, mientras que la autocompasión favorece la motivación y la recuperación tras un error.",
      "Práctica sencilla: cuando notes un fallo, di para ti mismo/a «esto es un momento difícil», «el sufrimiento forma parte de la vida» y «que pueda ser amable conmigo en este momento».",
      "Otra herramienta útil es escribirte una carta desde la mirada de un amigo comprensivo que conoce tu historia y tus circunstancias.",
      "La autocompasión se entrena. Cada vez que eliges responderte con amabilidad en lugar de con reproche, estás construyendo una base emocional más segura.",
    ],
  },
];
