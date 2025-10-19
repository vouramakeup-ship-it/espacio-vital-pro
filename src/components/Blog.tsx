import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "5 Técnicas de Mindfulness para el Día a Día",
      excerpt: "Descubre cómo incorporar la atención plena en tu rutina diaria para reducir el estrés y mejorar tu bienestar.",
      date: "15 Mar 2024",
      readTime: "5 min",
      category: "Mindfulness",
    },
    {
      title: "Cómo Identificar y Manejar la Ansiedad",
      excerpt: "Aprende a reconocer los síntomas de ansiedad y técnicas efectivas para gestionarla de manera saludable.",
      date: "08 Mar 2024",
      readTime: "7 min",
      category: "Salud Mental",
    },
    {
      title: "La Importancia de la Autocompasión",
      excerpt: "Ser amable contigo mismo/a es fundamental para tu salud emocional. Descubre por qué y cómo practicarla.",
      date: "01 Mar 2024",
      readTime: "6 min",
      category: "Desarrollo Personal",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Recursos y Blog
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Artículos y recursos para tu bienestar emocional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-soft transition-all duration-300 group cursor-pointer border-border bg-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gradient-hero" />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary/80 p-0 h-auto font-semibold group/btn"
                >
                  Leer más
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;