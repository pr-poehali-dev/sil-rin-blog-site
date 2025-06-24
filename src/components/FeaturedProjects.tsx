import Icon from "@/components/ui/icon";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Первая книга",
      description:
        "Удивительная история о приключениях и дружбе, созданная нашим творческим дуэтом.",
      status: "В работе",
      type: "book",
      image:
        "https://images.unsplash.com/photo-1544716278-e513176f20a5?w=400&h=250&fit=crop&crop=center",
    },
    {
      id: 2,
      title: "Вторая книга",
      description:
        "Продолжение нашего литературного путешествия с новыми персонажами и захватывающим сюжетом.",
      status: "В планах",
      type: "book",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop&crop=center",
    },
    {
      id: 3,
      title: "Комикс-серия",
      description:
        "Визуальное повествование, которое мы планируем создать в будущем.",
      status: "Идея",
      type: "comic",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&crop=center",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "В работе":
        return "bg-green-100 text-green-700";
      case "В планах":
        return "bg-blue-100 text-blue-700";
      case "Идея":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getTypeIcon = (type: string) => {
    return type === "book" ? "BookOpen" : "Palette";
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-light text-gray-900 mb-4">
            Наши проекты
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            От текущих книг до будущих комиксов — вот что создаёт наш творческий
            дуэт
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Icon
                    name={getTypeIcon(project.type)}
                    size={20}
                    className="text-white bg-black/20 rounded-full p-1 w-8 h-8"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                    {project.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex items-center text-purple-600 text-sm font-medium">
                  <span>Узнать больше</span>
                  <Icon
                    name="ArrowRight"
                    size={16}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-50 to-green-50 rounded-2xl p-8">
            <Icon
              name="Lightbulb"
              size={32}
              className="text-purple-600 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Есть идеи для сотрудничества?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Мы всегда открыты для новых творческих проектов и интересных
              предложений
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors font-medium">
              Связаться с нами
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
