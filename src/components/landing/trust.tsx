const trusted = [
    {
        id: 1,
        name: "Sass",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
    },
    {
        id: 2,
        name: "Npm",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg"
    },
    {
        id: 3,
        name: "React",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
    {
        id: 4,
        name: "Django",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg"
    },
    {
        id: 5,
        name: "Node.js",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
    },
    {
        id: 6,
        name: "Next.js",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
    },
       {
        id: 7,
        name: "Vue.js",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
    },

    {
        id: 8,
        name: "Docker",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg"
    },
    {
        id: 9,
        name: "Laravel",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
    },
    {
        id: 10,
        name: "Vite",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
    },
    {
        id: 11,
        name: "Python",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
    },
    {
        id: 12,
        name: "Git",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
    },
    {
        id: 13,
        name: "TypeScript",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
    }
];

const Trustee: React.FC = () => {


  // Duplicate the array for seamless looping
  const doubletrusted = [...trusted, ...trusted];

  return (
    <div className="w-full py-12 overflow-hidden">
      <h3 className="text-center text-black dark:text-white text-xl mb-8">
        Other Platforms We Outperform
      </h3>
      
      {/* Animated logo container */}
      <div className="relative w-full h-20">
        {/* First scroll (visible) */}
        <div className="absolute flex items-center space-x-10 lg:space-x-16 animate-infinite-scroll">
          {doubletrusted.map((item,idx) => (
            <div key={`first-${item.id}-${idx}`} className="flex-shrink-0">
              <img 
                src={item.logo} 
                alt={item.name}
                 className="lg:h-[120px] h-[50px] lg:w-[120px] md:w-[100px] md:h-[100px] opacity-70 hover:opacity-100 rounded-md transition-opacity"
                title={item.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trustee;