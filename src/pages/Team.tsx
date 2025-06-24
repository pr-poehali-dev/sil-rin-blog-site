import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Team = () => {
  const teamMembers = [
    {
      name: "Сили",
      role: "Соавтор",
      description:
        "Создаёт удивительные миры и персонажей, привносит магию в каждую историю.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=300&h=300&fit=crop&crop=face",
      strengths: ["Мировоздание", "Персонажи", "Диалоги"],
    },
    {
      name: "Ринни",
      role: "Соавтор",
      description:
        "Мастер сюжетных поворотов и эмоциональных моментов, создаёт захватывающие истории.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      strengths: ["Сюжет", "Эмоции", "Структура"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-50 to-blue-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Icon
              name="Users"
              size={48}
              className="text-sky-600 mx-auto mb-6"
            />
            <h1 className="text-4xl lg:text-5xl font-serif font-light text-gray-900 mb-6">
              Наша команда
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Познакомьтесь с творческим дуэтом, создающим удивительные истории
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sky-600 font-medium">{member.role}</p>
                  </div>

                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    {member.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-center mb-3">
                      Сильные стороны:
                    </h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.strengths.map((strength, idx) => (
                        <span
                          key={idx}
                          className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {strength}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Collaboration */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-12">
                <Icon
                  name="Heart"
                  size={32}
                  className="text-sky-600 mx-auto mb-4"
                />
                <h3 className="text-3xl font-serif font-light text-gray-900 mb-4">
                  Вместе мы сильнее
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Наш творческий союз основан на взаимном уважении, общих целях
                  и вере в силу историй. Каждая наша книга — это результат
                  слияния двух уникальных взглядов на мир.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
