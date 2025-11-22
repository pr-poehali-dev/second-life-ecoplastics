import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [carbonFootprint, setCarbonFootprint] = useState(1247);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const interval = setInterval(() => {
      setCarbonFootprint(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      name: 'Бутылки 0.2-0.5л',
      description: 'Компактные бутылки для воды и напитков',
      icon: 'Droplet'
    },
    {
      name: 'Бутылки 1-2л',
      description: 'Стандартные бутылки для ежедневного использования',
      icon: 'Container'
    },
    {
      name: 'ZIP-пакеты XS-M',
      description: 'Малые пакеты для хранения продуктов',
      icon: 'Package'
    },
    {
      name: 'ZIP-пакеты L-XL',
      description: 'Большие пакеты для длительного хранения',
      icon: 'PackageOpen'
    }
  ];

  const cycleSteps = [
    { step: '1', title: 'Покупайте', description: 'Приобретайте нашу продукцию', icon: 'ShoppingCart' },
    { step: '2', title: 'Используйте', description: 'Наслаждайтесь качеством', icon: 'CheckCircle2' },
    { step: '3', title: 'Сдавайте', description: 'Отсортируйте и сдайте', icon: 'Recycle' },
    { step: '4', title: 'Получайте кешбэк', description: 'Зарабатывайте на экологии', icon: 'Coins' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary font-montserrat">SECOND LIFE</h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'О нас', 'Продукция', 'Как это работает', 'Партнёрам', 'Углеродный след'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(['home', 'about', 'products', 'how-it-works', 'partners', 'carbon'][idx])}
                  className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight font-montserrat">
                Даём пластику<br />
                <span className="text-primary">вечную жизнь</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 font-inter">
                Замкнутый цикл. Нулевые отходы. Чистая планета.
              </p>
              <Button onClick={() => scrollToSection('how-it-works')} size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium">
                Узнать больше
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/6fc40eb8-6fa7-4738-acc1-14a57d0d49d6/files/25d5fead-238e-4f72-8efa-72c16431aa4c.jpg" 
                alt="Переработка пластика"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary/30 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">О нас</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
              Мы верим, что современный бизнес должен быть ответственным
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Target', title: 'Наша миссия', text: 'Сокращение выбросов CO₂ и создание экологичного будущего' },
              { icon: 'Leaf', title: 'Наша философия', text: 'Замкнутая система: сбор → переработка → производство → использование' },
              { icon: 'Award', title: 'Наше качество', text: 'Строгий контроль и дезинфекция всей продукции' }
            ].map((item, idx) => (
              <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-montserrat">{item.title}</h3>
                  <p className="text-gray-600 font-inter">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">Наша продукция</h2>
            <p className="text-xl text-gray-600 font-inter">100% из переработанного пластика</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.map((product, idx) => (
              <Card key={idx} className="border-2 border-gray-100 hover:border-primary transition-all hover:scale-105 animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-secondary/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={product.icon} className="text-primary" size={36} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 font-montserrat">{product.name}</h3>
                  <p className="text-sm text-gray-600 font-inter">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/projects/6fc40eb8-6fa7-4738-acc1-14a57d0d49d6/files/4f695ca6-e2fa-4ed1-904d-cf2bbde90ce3.jpg" 
              alt="Наша продукция"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-gradient-to-b from-secondary/20 to-white px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">Как это работает?</h2>
            <p className="text-xl text-gray-600 font-inter">Простая система замкнутого цикла</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {cycleSteps.map((step, idx) => (
              <div key={idx} className="text-center animate-slide-up" style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Icon name={step.icon} className="text-white" size={36} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 font-montserrat">{step.title}</h3>
                <p className="text-gray-600 font-inter">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl animate-scale-in">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Icon name="TrendingUp" className="text-primary" size={32} />
              <h3 className="text-2xl font-bold font-montserrat">Бесплатный вывоз + Кешбэк</h3>
            </div>
            <p className="text-center text-gray-600 max-w-2xl mx-auto font-inter">
              Наш курьер бесплатно забирает отсортированное вторсырье. Вы получаете денежный кешбэк на счёт в Альфа-Банке. 
              Активные участники получают призы и бесплатные товары!
            </p>
          </div>
        </div>
      </section>

      <section id="partners" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">Партнёрам (B2B)</h2>
              <p className="text-xl text-gray-600 mb-6 font-inter">
                Повысьте рейтинг и привлекательность вашего бренда!
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Демонстрируйте приверженность устойчивому развитию',
                  'Привлекайте сознательных потребителей',
                  'Получите конкурентное преимущество',
                  'Выгодные оптовые условия'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={24} />
                    <span className="text-gray-700 font-inter">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
                Стать партнёром
                <Icon name="Handshake" className="ml-2" size={20} />
              </Button>
            </div>
            <Card className="border-none shadow-2xl animate-scale-in">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Icon name="Building2" className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-2 font-montserrat">Присоединяйтесь к движению</h3>
                  <p className="text-gray-600 font-inter">Более 50 компаний уже с нами</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {['Эко-имидж', 'Рост продаж', 'Лояльность', 'ESG рейтинг'].map((item, idx) => (
                    <div key={idx} className="bg-secondary/30 rounded-lg p-4 text-center">
                      <p className="font-semibold font-montserrat">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="carbon" className="py-20 bg-gray-900 text-white px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <Icon name="CloudRain" className="text-primary mx-auto mb-6" size={56} />
            <h2 className="text-4xl font-bold mb-4 font-montserrat">Наш углеродный след</h2>
            <p className="text-xl text-gray-300 mb-8 font-inter">
              Прозрачность — наш принцип. Отслеживайте наш углеродный след в реальном времени.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 animate-scale-in">
              <div className="text-6xl font-bold text-primary mb-2 font-montserrat">{carbonFootprint.toLocaleString()}</div>
              <p className="text-2xl text-gray-300 font-inter">кг CO₂ / месяц</p>
              <p className="text-sm text-gray-400 mt-4 font-inter">Обновляется в реальном времени</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: 'Zap', value: '85%', label: 'Используем рекуперацию тепла' },
                { icon: 'Recycle', value: '100%', label: 'Замкнутый цикл' },
                { icon: 'TrendingDown', value: '-60%', label: 'Снижение выбросов' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-6 animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <Icon name={stat.icon} className="text-primary mx-auto mb-3" size={32} />
                  <div className="text-3xl font-bold mb-1 font-montserrat">{stat.value}</div>
                  <p className="text-gray-400 text-sm font-inter">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 py-12 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4 font-montserrat">SECOND LIFE</h3>
              <p className="text-gray-600 text-sm font-inter">Осознанное потребление без компромиссов</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 font-montserrat">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-600 font-inter">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-primary">О нас</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-primary">Продукция</button></li>
                <li><button onClick={() => scrollToSection('partners')} className="hover:text-primary">Партнёрам</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 font-montserrat">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-600 font-inter">
                <li>info@secondlife.eco</li>
                <li>+7 (495) 123-45-67</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 font-montserrat">Присоединяйтесь</h4>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                  <Icon name="MessageCircle" size={18} />
                </Button>
                <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                  <Icon name="Send" size={18} />
                </Button>
                <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                  <Icon name="Mail" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t pt-6 text-center text-sm text-gray-600 font-inter">
            <p>© 2024 SECOND LIFE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
