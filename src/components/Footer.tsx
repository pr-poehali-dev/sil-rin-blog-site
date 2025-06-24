import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
              Сил×Рин
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Творческий дуэт, создающий книги и мечтающий о больших проектах.
              Следите за нашим творческим путешествием!
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <div className="bg-white rounded-full p-2 shadow-sm">
                <Icon name="BookOpen" size={18} className="text-purple-600" />
              </div>
              <div className="bg-white rounded-full p-2 shadow-sm">
                <Icon name="Palette" size={18} className="text-purple-600" />
              </div>
              <div className="bg-white rounded-full p-2 shadow-sm">
                <Icon name="Gamepad2" size={18} className="text-purple-600" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-4">Быстрые ссылки</h4>
            <nav className="space-y-2">
              <a
                href="/"
                className="block text-sm text-gray-600 hover:text-purple-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="/about"
                className="block text-sm text-gray-600 hover:text-purple-600 transition-colors"
              >
                О блоге
              </a>
              <a
                href="/projects"
                className="block text-sm text-gray-600 hover:text-purple-600 transition-colors"
              >
                Проекты
              </a>
              <a
                href="/team"
                className="block text-sm text-gray-600 hover:text-purple-600 transition-colors"
              >
                Команда
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-gray-900 mb-4">Связь с нами</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end">
                <Icon name="Mail" size={16} className="text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">
                  contact@silrin.blog
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <Icon
                  name="MessageCircle"
                  size={16}
                  className="text-gray-400 mr-2"
                />
                <span className="text-sm text-gray-600">@silrin_creative</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Сил×Рин. Все права защищены. ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
