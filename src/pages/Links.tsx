import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Links = () => {
  const socialLinks = [
    {
      name: "Telegram",
      url: "#",
      icon: "MessageCircle",
      description: "Наш основной канал для общения с читателями",
    },
    {
      name: "VKontakte",
      url: "#",
      icon: "Users",
      description: "Сообщество любителей наших книг",
    },
    {
      name: "Email",
      url: "mailto:contact@silrin.blog",
      icon: "Mail",
      description: "Для деловых предложений и сотрудничества",
    },
  ];

  const resources = [
    {
      name: "Литературные ресурсы",
      links: [
        {
          name: "Проза.ру",
          url: "#",
          description: "Платформа для публикации литературы",
        },
        {
          name: "Самиздат",
          url: "#",
          description: "Библиотека авторских произведений",
        },
      ],
    },
    {
      name: "Вдохновение",
      links: [
        {
          name: "Minecraft Wiki",
          url: "#",
          description: "Для будущих игровых историй",
        },
        {
          name: "DeviantArt",
          url: "#",
          description: "Визуальное вдохновение для комиксов",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-50 to-blue-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Icon name="Link" size={48} className="text-sky-600 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-serif font-light text-gray-900 mb-6">
              Полезные ссылки
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Контакты, социальные сети и ресурсы, которые нас вдохновляют
            </p>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif text-gray-900 text-center mb-12">
              Наши контакты
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-sky-200 hover:shadow-lg transition-all duration-300 text-center group"
                >
                  <Icon
                    name={link.icon}
                    size={32}
                    className="text-sky-600 mx-auto mb-4 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {link.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                </a>
              ))}
            </div>

            {/* Resources */}
            <h2 className="text-3xl font-serif text-gray-900 text-center mb-12">
              Полезные ресурсы
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {resources.map((category) => (
                <div key={category.name} className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    {category.name}
                  </h3>
                  <div className="space-y-3">
                    {category.links.map((resource) => (
                      <a
                        key={resource.name}
                        href={resource.url}
                        className="block bg-white rounded-lg p-4 hover:bg-sky-50 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900 group-hover:text-sky-600">
                              {resource.name}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {resource.description}
                            </p>
                          </div>
                          <Icon
                            name="ExternalLink"
                            size={16}
                            className="text-gray-400 group-hover:text-sky-600"
                          />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Links;
