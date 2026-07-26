import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensaje enviado con éxito. Te contactaré pronto.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "suarezcarvajaltaniasofi@gmail.com",
      link: "mailto:suarezcarvajaltaniasofi@gmail.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+57 322 508 5018",
      link: "tel:+573225085018",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Bucaramanga, Santander",
      link: "#",
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ¿Listo/a para dar el primer paso? Estoy aquí para escucharte
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-card border-border bg-card animate-fade-in">
            <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">
              Envíame un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Nombre completo
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                  required
                  className="border-input"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@email.com"
                  required
                  className="border-input"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                  Teléfono (opcional)
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+57 300 532 1234"
                  className="border-input"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntame cómo puedo ayudarte..."
                  rows={5}
                  required
                  className="border-input resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Enviar Mensaje
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="p-8 shadow-card border-border bg-card">
              <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">
                Información de contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">{item.title}</p>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>

            <Card className="p-8 bg-gradient-hero text-white shadow-soft border-none">
              <h4 className="font-serif text-xl font-semibold mb-3">
                Primera Consulta Gratuita
              </h4>
              <p className="text-white/90 leading-relaxed mb-4">
                Agenda una sesión inicial sin compromiso para conocernos y explorar cómo
                puedo ayudarte en tu proceso.
              </p>
              <Button
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90"
              >
                Agendar Ahora
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;