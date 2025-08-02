import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-primary">Hi, I'm Rajat Shriram</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                An engineering student with an insatiable curiosity and a passion for building innovative solutions.
              </p>
              <div className="pt-4">
                <Link to="/portfolio">
                  <Button className="group" size="lg">
                    Explore My Portfolio
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="public\profile-photo.jpeg" 
                  alt="Rajat Shriram" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-xl font-bold">P</span>
                </div>
                <h3 className="text-xl font-bold">Python</h3>
                <p className="text-muted-foreground">
                  Proficient in Python programming for various applications and problem solving.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-xl font-bold">C</span>
                </div>
                <h3 className="text-xl font-bold">C/C++</h3>
                <p className="text-muted-foreground">
                  Strong foundation in C and C++ programming with focus on data structures and algorithms.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 text-xl font-bold">W</span>
                </div>
                <h3 className="text-xl font-bold">Web Development</h3>
                <p className="text-muted-foreground">
                  Frontend skills with HTML, CSS, JavaScript and learning backend technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-8">
            I'm always looking for new opportunities to learn and grow. Let's build something amazing together.
          </p>
          <Link to="/contact">
            <Button size="lg">Get In Touch</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
