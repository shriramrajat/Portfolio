
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "My personal portfolio website built with React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS", "Vite"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/shriramrajat/Portfolio",
      demo: "https://portfolio-livid-nine-20.vercel.app/#"
    },
    {
      id: 2,
      title: "HealthCare",
      description: "A Comprehensive Healthcare Management Platform.",
      tech: ["React", "TypeScript", "Firebase"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/shriramrajat/HealthCare",
      demo: "https://health-care-six-olive.vercel.app/"
    },
    {
      id: 3,
      title: "MemoryCapsuleAi",
      description: "A modern, AI-powered application designed to securely capture, organize, and resurface your most valuable memories, thoughts, and conversations, effectively acting as your second digital brain..",
      tech: ["Node.js", "Firebase"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/shriramrajat/MeroryCapsuleAi",
      demo: "https://memorycapsulee.netlify.app/"
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">My Portfolio</h1>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          A showcase of my projects and work. This section will be updated as I complete new projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-secondary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github}>
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demo}>View Demo</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-secondary/30 py-12 px-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Have a project in mind?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <Button asChild>
            <a href="/contact">Let's Talk</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
