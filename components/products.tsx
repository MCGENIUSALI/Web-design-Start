"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const projects = [
  {
    id: 1,
    img: "/images/design cover_Plan de travail 1.png",
    link: "/projects/1",
    title: "Zone Alerte",
  },
  {
    id: 2,
    img: "/images/design cover_Plan de travail 1 copie.png",
    link: "/projects/2",
    title: "Pesa",
  },
  {
    id: 3,
    img: "/images/project3.jpg",
    link: "/projects/3",
    title: "Mobile Design",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref });
  const parallax = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-4 py-20 overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center max-w-4xl "
      >
        <h2 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
          Nous mettons des solutions{" "}
          <span className="text-primary">sur mesure à votre disposition</span>
        </h2>

        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-3">
          Un accompagnement sur mesure pour transformer vos concepts en
          solutions numériques innovantes.
        </p>
      </motion.h2>

      {/* Laptop container */}
      <motion.div
        style={{ y: parallax }}
        className="relative w-full max-w-[800px] flex flex-col items-center mt-20"
      >
        {/* Base (clavier)
        <div className="relative w-[0%] md:w-full h-6 bg-gray-700 rounded-b-3xl shadow-inner" /> */}

        {/* Écran animé */}
        <motion.div
          initial={{ rotateX: 90, opacity: 0 }}
          animate={isInView ? { rotateX: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            transformOrigin: "bottom center",
          }}
          className="absolute bottom-6 w-[95%] md:w-full aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-2xl mb-8 relative"
        >
          {/* Reflet animé */}
          <div className="absolute inset-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:animate-[shine_6s_linear_infinite]" />

          {/* Slider */}
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            spaceBetween={30}
            slidesPerView={1}
            className="w-full h-full"
          >
            {projects.map((p) => (
              <SwiperSlide key={p.id}>
                <div className="relative w-full h-full group">
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center">
                    <h3 className="text-lg md:text-2xl font-semibold mb-3">
                      {p.title}
                    </h3>
                    <a
                      href={p.link}
                      className="bg-white text-black text-sm md:text-base px-4 py-2 rounded-xl hover:bg-gray-200 transition"
                    >
                      En savoir plus
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>

      {/* Animation du reflet */}
      <style jsx global>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        /* Style des flèches Swiper */
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          transition: opacity 0.3s;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          opacity: 0.8;
        }

        /* Ajustement mobile */
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

// export default function Products() {
//   return (
//     <section className="py-32 px-6 bg-white">
{
  /* <div className="text-center px-32 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 ">
          Nous mettons des solutions sur mesure à votre disposition
        </h2>
        <p className="text-gray-600 mt-6">
          Un accompagnement sur mesure pour transformer vos concepts en
          solutions numériques innovantes.
        </p>
        </div> */
}

//     </section>
//   );
// }
