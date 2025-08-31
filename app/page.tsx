import Hero from "./components/Hero"
import CategorySection from "./components/CategorySection"
import ContactSection from "./components/ContactSection"
import AboutSection from "./components/AboutSection"
import PurposeSection from "./components/PurposeSection"

export default function Home() {
    return (
        <section id="main">
            <Hero />
            <CategorySection />
            <AboutSection />
            <PurposeSection />
            {/* <TestimonialsSection /> */}
            <ContactSection />
        </section>
    )
}
