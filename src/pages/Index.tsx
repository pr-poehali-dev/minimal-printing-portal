
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const services = [
    {
      id: 1,
      title: "Печать документов",
      description: "Черно-белая и цветная печать документов любого формата",
      price: "от 5 ₽/лист",
      icon: "FileText"
    },
    {
      id: 2,
      title: "Копирование",
      description: "Копирование документов с возможностью масштабирования",
      price: "от 4 ₽/лист",
      icon: "Copy"
    },
    {
      id: 3,
      title: "Сканирование",
      description: "Сканирование документов с отправкой на email",
      price: "от 10 ₽/лист",
      icon: "Scanner"
    },
    {
      id: 4,
      title: "Фото на документы",
      description: "Моментальное фото на документы любого формата",
      price: "от 200 ₽",
      icon: "Image"
    },
    {
      id: 5,
      title: "Ламинирование",
      description: "Защита документов от влаги и повреждений",
      price: "от 50 ₽/лист",
      icon: "Layers"
    },
    {
      id: 6,
      title: "Брошюровка",
      description: "Переплет документов в твердый или мягкий переплет",
      price: "от 150 ₽",
      icon: "BookOpen"
    }
  ];

  const howToUse = [
    {
      id: 1,
      title: "Выберите услугу",
      description: "Определитесь с необходимой услугой из нашего каталога",
      icon: "ListChecks"
    },
    {
      id: 2,
      title: "Подготовьте документы",
      description: "Подготовьте документы в электронном или печатном виде",
      icon: "FileText"
    },
    {
      id: 3,
      title: "Оформите заказ",
      description: "Обратитесь к нашему сотруднику или отправьте заявку онлайн",
      icon: "FileInput"
    },
    {
      id: 4,
      title: "Получите результат",
      description: "Заберите готовый заказ или получите его с доставкой",
      icon: "CheckCircle"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Icon name="Printer" size={24} className="text-blue-600 mr-2" />
            <h1 className="text-xl font-bold">КопиЦентр</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => setActiveTab("home")}
              className={`text-sm font-medium ${activeTab === "home" ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`}
            >
              Главная
            </button>
            <button 
              onClick={() => setActiveTab("services")}
              className={`text-sm font-medium ${activeTab === "services" ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`}
            >
              Услуги
            </button>
            <button 
              onClick={() => setActiveTab("howto")}
              className={`text-sm font-medium ${activeTab === "howto" ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`}
            >
              Инструкция
            </button>
          </div>
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            Связаться с нами
          </Button>
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="w-full flex justify-center mb-8">
            <TabsTrigger value="home">Главная</TabsTrigger>
            <TabsTrigger value="services">Услуги</TabsTrigger>
            <TabsTrigger value="howto">Инструкция</TabsTrigger>
          </TabsList>

          {/* Главная */}
          <TabsContent value="home" className="space-y-12">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                  Быстрая и качественная печать документов
                </h2>
                <p className="text-slate-600">
                  Предлагаем полный спектр копировальных услуг по доступным ценам. 
                  Печать, копирование, сканирование и фото на документы - всё в одном месте.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button onClick={() => setActiveTab("services")}>
                    Наши услуги
                  </Button>
                  <Button variant="outline">
                    Связаться с нами
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1571498664957-fde9be64a9db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Копировальный центр" 
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>

            {/* Услуги превью */}
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Наши услуги</h2>
                <p className="text-slate-600">Качественное выполнение всех видов копировальных работ</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.slice(0, 3).map((service) => (
                  <Card key={service.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="rounded-full bg-blue-100 p-3 mr-4">
                          <Icon name={service.icon} className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-slate-800">{service.title}</h3>
                          <p className="text-slate-600 text-sm mt-1">{service.description}</p>
                          <p className="text-blue-600 font-medium mt-2">{service.price}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-6">
                <Button variant="outline" onClick={() => setActiveTab("services")}>
                  Все услуги
                </Button>
              </div>
            </div>

            {/* Преимущества */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800">Почему выбирают нас</h2>
                <p className="text-slate-600">Качество, скорость и доступные цены</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="rounded-full bg-blue-100 p-4 mx-auto w-16 h-16 flex items-center justify-center">
                    <Icon name="Timer" className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-slate-800 mt-4">Быстрое исполнение</h3>
                  <p className="text-slate-600 text-sm mt-2">Выполнение заказа в кратчайшие сроки</p>
                </div>
                <div className="text-center">
                  <div className="rounded-full bg-blue-100 p-4 mx-auto w-16 h-16 flex items-center justify-center">
                    <Icon name="BadgeCheck" className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-slate-800 mt-4">Высокое качество</h3>
                  <p className="text-slate-600 text-sm mt-2">Используем современное оборудование</p>
                </div>
                <div className="text-center">
                  <div className="rounded-full bg-blue-100 p-4 mx-auto w-16 h-16 flex items-center justify-center">
                    <Icon name="Wallet" className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-slate-800 mt-4">Доступные цены</h3>
                  <p className="text-slate-600 text-sm mt-2">Гибкая система скидок для постоянных клиентов</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Услуги */}
          <TabsContent value="services" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-800">Наши услуги</h2>
              <p className="text-slate-600">Полный спектр копировальных услуг в одном месте</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="rounded-full bg-blue-100 p-3 mr-4">
                        <Icon name={service.icon} className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-800">{service.title}</h3>
                        <p className="text-slate-600 text-sm mt-1">{service.description}</p>
                        <p className="text-blue-600 font-medium mt-2">{service.price}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mt-8">
              <h3 className="font-medium text-slate-800 mb-2">Корпоративным клиентам</h3>
              <p className="text-slate-600 text-sm mb-4">
                Специальные предложения для компаний. Заключаем договоры на постоянное обслуживание с гибкой системой скидок.
              </p>
              <Button>Получить коммерческое предложение</Button>
            </div>
          </TabsContent>

          {/* Инструкция */}
          <TabsContent value="howto" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-800">Как воспользоваться услугами</h2>
              <p className="text-slate-600">Простая инструкция для быстрого оформления заказа</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 h-full w-0.5 bg-blue-100"></div>
                <div className="space-y-12">
                  {howToUse.map((step) => (
                    <div key={step.id} className="relative flex">
                      <div className="absolute left-0 rounded-full bg-blue-500 text-white w-16 h-16 flex items-center justify-center z-10">
                        <span className="text-xl font-bold">{step.id}</span>
                      </div>
                      <div className="ml-24">
                        <h3 className="text-lg font-medium text-slate-800">{step.title}</h3>
                        <p className="text-slate-600 mt-2">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
              <h3 className="font-medium text-slate-800 mb-4 text-center">Часто задаваемые вопросы</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-800">Какие форматы файлов вы принимаете?</h4>
                  <p className="text-slate-600 text-sm mt-1">Мы принимаем все популярные форматы: PDF, DOC, DOCX, JPG, PNG и другие.</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Сколько времени занимает выполнение заказа?</h4>
                  <p className="text-slate-600 text-sm mt-1">Стандартные заказы выполняются в течение 15-30 минут. Срочные заказы - от 5 минут.</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Есть ли у вас доставка?</h4>
                  <p className="text-slate-600 text-sm mt-1">Да, при заказе от 1000 рублей доставка бесплатная в пределах города.</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800">Связаться с нами</h2>
            <p className="text-slate-600">Мы готовы ответить на ваши вопросы</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon name="MapPin" className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium text-slate-800">Адрес</p>
                    <p className="text-slate-600">ул. Примерная, д. 123, Москва</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Phone" className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium text-slate-800">Телефон</p>
                    <p className="text-slate-600">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Mail" className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium text-slate-800">Email</p>
                    <p className="text-slate-600">info@копицентр.рф</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Clock" className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium text-slate-800">Режим работы</p>
                    <p className="text-slate-600">Пн-Пт: 9:00 - 20:00</p>
                    <p className="text-slate-600">Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border-slate-300 shadow-sm"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border-slate-300 shadow-sm"
                  placeholder="Ваш email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md border-slate-300 shadow-sm"
                  placeholder="Ваше сообщение"
                ></textarea>
              </div>
              <Button className="w-full">Отправить сообщение</Button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Icon name="Printer" size={24} className="text-blue-400 mr-2" />
              <span className="text-xl font-bold">КопиЦентр</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-300 hover:text-white">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-white">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-white">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-white">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-700 text-center md:text-left">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} КопиЦентр. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
