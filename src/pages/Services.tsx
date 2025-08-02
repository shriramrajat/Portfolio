
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">My Services</h1>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Here are the services I offer. As I continue to learn and grow, my service offerings will expand.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M3 5v14h18V5H3z"></path><path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v0"></path></svg>
              </div>
              <CardTitle>Frontend Web Development</CardTitle>
              <CardDescription>Creating responsive and appealing user interfaces</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
                  <span>HTML - Structure and content</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
                  <span>CSS - Styling and responsive design</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
                  <span>JavaScript - Interactivity and functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
                  <span>Responsive design principles for all devices</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><rect width="20" height="20" x="2" y="2" rx="2"></rect><rect width="8" height="6" x="6" y="6" rx="1"></rect><path d="M12 16v.01"></path><path d="m9 16 .01-.01"></path><path d="M15 16v.01"></path></svg>
              </div>
              <CardTitle>Backend Development</CardTitle>
              <CardDescription>Learning phase - Database and server-side logic</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Currently learning and developing skills in backend technologies to provide more comprehensive web solutions in the future.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                  <span>SQL - Database design and queries</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                  <span>Basic database management and operations</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">My Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-semibold mb-2">Understand</h3>
                <p className="text-muted-foreground">
                  I take time to fully understand your requirements and expectations before starting any project.
                </p>
              </div>
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-semibold mb-2">Design</h3>
                <p className="text-muted-foreground">
                  Create clean, user-friendly designs that align with your goals and target audience.
                </p>
              </div>
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-semibold mb-2">Deliver</h3>
                <p className="text-muted-foreground">
                  Implement solutions with attention to detail, ensuring quality and meeting deadlines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
