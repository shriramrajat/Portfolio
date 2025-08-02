
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Who I Am</h2>
            <p className="text-lg mb-4">
              Hi, I'm Rajat Shriram, an engineering student with an insatiable curiosity and a passion for building innovative solutions.
            </p>
            <p className="text-lg mb-4">
              I love exploring new technologies and continuously developing my skills in various programming languages and web development.
            </p>
            <p className="text-lg">
              My goal is to leverage technology to create impactful solutions and contribute to meaningful projects.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="space-y-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">B.Tech Engineering</h3>
                  <p className="text-muted-foreground">Dhole Patil College of Engineering, Pune</p>
                  <p className="text-sm text-muted-foreground mt-2">Currently Pursuing</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">HSC in Science Stream</h3>
                  <p className="text-muted-foreground">Walchand College of Arts and Science, Solapur</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">SSC</h3>
                  <p className="text-muted-foreground">SSM Primary School, Solapur</p>
                  <p className="text-sm text-muted-foreground mt-2">2022</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">My Skills</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>Python</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>C</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>C++ (with focus on DSA)</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>HTML</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>CSS</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>JavaScript</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Backend Learning</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  <span>SQL</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
