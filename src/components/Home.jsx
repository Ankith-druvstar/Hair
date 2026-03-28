import React from "react";
import { motion } from "framer-motion";
import "../styles/main.scss";

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="/curly_hair.jpg" alt="hero" className="hero-bg" />

        <div className="overlay">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Serene Shine
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Not just a shampoo. A personal care
          </motion.p>
        </div>
      </motion.section>

      {/* Banner */}
      <motion.section
        className="banner"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text">Your Shampoo, Your Formula</span>
        <p className="subText">Built just for you.</p>
      </motion.section>

      {/* 🔥 Updated Features */}
      <section className="features">
        {[
          { title: "Fragrance", img: "/fragrance.jpg" },
          { title: "Hair Type", img: "/straight_hair.webp" },
          { title: "Scalp Type", img: "/women_scalp.avif" },
          { title: "Hair Concern", img: "/dandurf.avif" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="feature-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="image-wrapper">
              <img src={item.img} alt={item.title} />

              <div className="overlay-text">
                <h3>{item.title}</h3>
                <p>Customized for you</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <motion.section
        className="cta"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
      >
        <button>Customize your shampoo now</button>
      </motion.section>

      {/* Logo */}
      <motion.section
        className="logo-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <img src="/shampoo_logo.jpeg" alt="logo" />
        <h2>Serene Shine</h2>
        <p>Pure Roots. Smart Care.</p>
      </motion.section>
    </div>
  );
}