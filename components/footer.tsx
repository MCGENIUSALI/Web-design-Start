"use client";

import Image from "next/image";
import Mylogo from "@/public/icons/logo start.svg"



export function Footer() {
  return (
    <footer className="bg-muted/20 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <Image
                  src={Mylogo}
                  alt="Mon logo"
                  width={100}
                  height={100}
                  className="w-36 max-w-40"
                />
              </div>
            </div>

            <p className="text-muted-foreground">
              Votre partenaire de confiance pour la transformation numérique.
            </p>
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
            <h3 className="text-lg font-semibold text-foreground">
              Entreprise
            </h3>
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
              <li>+243 850 674 579</li>
              <li>Kinshasa, RDC</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 StartDRC. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
