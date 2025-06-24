import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-green-50 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="text-5xl lg:text-7xl font-serif font-light text-gray-900 mb-6 animate-fade-in">
            Сил×Рин
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Творческий дуэт{" "}
            <span className="font-medium text-purple-700">Сили</span> и{" "}
            <span className="font-medium text-purple-700">Ринни</span> — авторы
            книг, мечтающие о комиксах и историях в мире Minecraft
          </p>

          {/* Current Focus */}
          <div className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 mb-12 border border-purple-100">
            <Icon name="BookOpen" size={20} className="text-purple-600 mr-2" />
            <span className="text-purple-700 font-medium">
              Сейчас создаем книги
            </span>
          </div>

          {/* Creative Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="bg-white/40 rounded-2xl p-6 hover:bg-white/60 transition-all duration-300">
                <Icon
                  name="BookOpen"
                  size={32}
                  className="text-purple-600 mx-auto mb-3"
                />
                <h3 className="font-semibold text-gray-900 mb-1">Книги</h3>
                <p className="text-sm text-gray-600">Наше текущее творчество</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/40 rounded-2xl p-6 hover:bg-white/60 transition-all duration-300">
                <Icon
                  name="Palette"
                  size={32}
                  className="text-purple-600 mx-auto mb-3"
                />
                <h3 className="font-semibold text-gray-900 mb-1">Комиксы</h3>
                <p className="text-sm text-gray-600">Планы на будущее</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/40 rounded-2xl p-6 hover:bg-white/60 transition-all duration-300">
                <Icon
                  name="Gamepad2"
                  size={32}
                  className="text-purple-600 mx-auto mb-3"
                />
                <h3 className="font-semibold text-gray-900 mb-1">Minecraft</h3>
                <p className="text-sm text-gray-600">Далекие мечты</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <Icon name="Sparkles" size={24} className="text-purple-400" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <Icon name="Star" size={20} className="text-green-400" />
      </div>
    </section>
  );
};

export default Hero;
