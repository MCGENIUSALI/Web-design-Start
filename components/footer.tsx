export function Footer() {
  return (
    <footer className="bg-muted/20 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-foreground rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-foreground">StartDRC</span>
            </div>
            <p className="text-muted-foreground">Votre partenaire de confiance pour la transformation numérique.</p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Développement Web
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Applications Mobile
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Entreprise</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Équipe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Carrières
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>contact@startdrc.com</li>
              <li>+33 1 23 45 67 89</li>
              <li>Paris, France</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 StartDRC. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
