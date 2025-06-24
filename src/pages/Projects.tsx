import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedProjects from "@/components/FeaturedProjects";

const Projects = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <FeaturedProjects />
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
