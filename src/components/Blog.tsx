import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts, type BlogPost } from "@/data/blogPosts";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

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
          {blogPosts.map((post, index) => (
            <Card
              key={post.slug}
              onClick={() => setSelectedPost(post)}
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
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPost(post);
                  }}
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

      <Dialog
        open={selectedPost !== null}
        onOpenChange={(open) => !open && setSelectedPost(null)}
      >
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selectedPost && (
            <>
              <DialogHeader>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    {selectedPost.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>
                <DialogTitle className="font-serif text-2xl md:text-3xl text-left text-foreground">
                  {selectedPost.title}
                </DialogTitle>
                <DialogDescription className="text-left text-base">
                  {selectedPost.excerpt}
                </DialogDescription>
              </DialogHeader>
              <article className="space-y-4 text-muted-foreground leading-relaxed">
                {selectedPost.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </article>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Blog;
