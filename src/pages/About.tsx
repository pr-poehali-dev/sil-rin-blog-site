import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-50 to-blue-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Icon
              name="BookOpen"
              size={48}
              className="text-sky-600 mx-auto mb-6"
            />
            <h1 className="text-4xl lg:text-5xl font-serif font-light text-gray-900 mb-6">
              О нашем блоге
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Добро пожаловать в творческое пространство Сил×Рин — место, где
              рождаются истории и мечты
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-serif text-gray-900 mb-6">
                Наша история
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Сил×Рин — это не просто блог, это дневник творческого
                путешествия двух авторов, объединённых общей страстью к созданию
                историй. Здесь мы делимся процессом создания наших книг, мыслями
                о литературе и планами на будущее.
              </p>

              <h2 className="text-3xl font-serif text-gray-900 mb-6">
                Что вы найдёте здесь
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-sky-50 rounded-xl p-6">
                  <Icon
                    name="PenTool"
                    size={24}
                    className="text-sky-600 mb-3"
                  />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Процесс написания
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Откровенные заметки о том, как рождаются наши истории
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <Icon name="Users" size={24} className="text-blue-500 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Совместное творчество
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Как мы работаем в команде и находим баланс идей
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
