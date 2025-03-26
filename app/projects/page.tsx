import ProjectCard from "@/components/project-card";

const projects = [
  {
    id: "senior-dogs",
    shortId: "P001",
    title: "Senior Street Dogs in Turkey",
    description:
      "We provide food, shelter, and medical care for abandoned senior dogs in Turkey. These dogs have spent their lives on the streets and now face additional challenges due to their age. Your donations help us ensure they live their remaining years in comfort and dignity.",
    image: "/projects/senior-dogs.jpg",
    location: "Turkey",
  },
  {
    id: "romanian-shelter",
    shortId: "P002",
    title: "Romanian Shelter Support",
    description:
      "Many shelters in Romania are overcrowded and underfunded. We partner with local organizations to provide essential supplies, vaccinations, and spay/neuter programs. Your support helps improve conditions for hundreds of dogs waiting for their forever homes.",
    image: "/projects/romanian-shelter.jpg",
    location: "Romania",
  },
  {
    id: "emergency-rescue",
    shortId: "P003",
    title: "Emergency Medical Fund",
    description:
      "When dogs need urgent medical care, every minute counts. Our emergency fund ensures we can respond quickly to accidents, severe illness, and injuries. Your donation can literally save a dog's life when they need help the most.",
    image: "/projects/emergency-fund.jpg",
    location: "Ukraine",
  },
  {
    id: "rehabilitation",
    shortId: "P004",
    title: "Rehabilitation for Abused Dogs",
    description:
      "Dogs rescued from abusive situations need specialized care and training to recover both physically and emotionally. Our rehabilitation program provides veterinary treatment, behavioral therapy, and a safe environment for these dogs to heal.",
    image: "/projects/rehabilitation.jpg",
    location: "Spain",
  },
];

export const metadata = {
  title: "Projects | DogNation",
  description:
    "Explore our ongoing projects helping dogs in need around the world.",
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8 mb-16 text-center">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">
          Projects Making a Difference
        </h1>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Our projects focus on addressing the most urgent needs of dogs
          worldwide. From providing care to senior street dogs to supporting
          overcrowded shelters, every donation helps us make a meaningful
          impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            location={project.location}
            shortId={project.shortId}
          />
        ))}
      </div>
    </div>
  );
}
