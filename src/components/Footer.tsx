import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contacto@psicologia.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Servicios", href: "#servicios" },
    { name: "Blog", href: "#blog" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Psicología Profesional</h3>
            <p className="text-background/80 leading-relaxed mb-4">
              Acompañamiento profesional para tu bienestar emocional y desarrollo personal.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-2 text-background/80">
              <li>Madrid, España</li>
              <li>+34 600 123 456</li>
              <li>contacto@psicologia.com</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-background/20">
              <p className="text-sm text-background/70">
                Col. Nº: M-12345<br />
                Colegio Oficial de Psicólogos
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-background/70 text-sm">
          <p>© {currentYear} Psicología Profesional. Todos los derechos reservados.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-background transition-colors">Política de Privacidad</a>
            {" | "}
            <a href="#" className="hover:text-background transition-colors">Términos y Condiciones</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;