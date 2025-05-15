
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("services");

  const services = [
    {
      id: 1,
      title: "Печать документов",
      description: "Печать документов любого формата в черно-белом или цветном исполнении",
      price: "от 5 ₽/стр",
      icon: "Printer",
    },
    {
      id: 2,
      title: "Копирование",
      description: "Копирование документов с возможностью масштабирования",
      price: "от 4 ₽/стр",
      icon: "Copy",
    },
    {
      id: 3,
      title: "Сканирование",
      description: "Сканирование документов в различные форматы файлов",
      price: "от 10 ₽/стр",
      icon: "ScanLine",
    },
    {
      id: 4,
      title: "Фото на документы",
      description: "Моментальное фото на документы любого формата",
      price: "от 250 ₽",
      icon: "ImageSquare",
    },
    {
      id: 5,
      title: "Ламинирование",
      description: "Защита документов от влаги и механических повреждений",
      price: "от 50 ₽/лист",
      icon: "Layers",
    },
    {
      id: 6,
      title: "Брошюровка",
      description: "Сшивание документов в брошюру с обложкой",
      price: "от 150 ₽",
      icon: "BookOpen",
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Выберите услугу",
      description: "Определитесь с необходимой услугой из нашего каталога",
      icon: "ListChecks",
    },
    {
      id: 2,
      title: "Подготовьте файлы",
      description: "Подготовьте необходимые файлы в электронном или печатном виде",
      icon: "FileText",
    },
    {
      id: 3,
      title: "Оформите заказ",
      description: "Отправьте заявку через сайт или приходите к нам в офис",
      icon: "ClipboardCheck",
    },
    {
      id: 4,
      title: "Получите результат",
      description: "Заберите готовый заказ в указанное время",
      icon: "CheckCircle",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Icon name="Printer" size={28} className="text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold font-montserrat text-slate-800">Печать+</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => setActiveTab("services")}
              className={`text-sm font-medium ${
                activeTab === "services" ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Услуги
            </button>
            <button
              onClick={() => setActiveTab("instructions")}
              className={`text-sm font-medium ${
                activeTab === "instructions" ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Инструкция
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`text-sm font-medium ${
                activeTab === "contact" ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Контакты
            </button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
              Профессиональные услуги печати и копирования
            </h2>
            <p className="text-blue-100 mb-6">
              Быстро, качественно и по доступным ценам. Мы поможем с любыми задачами печати,
              копирования и обработки документов.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                Наши услуги
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-blue-700">
                Связаться с нами
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-blue-700 p-8 rounded-lg shadow-xl">
              <div className="flex mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500 mx-1"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500 mx-1"></div>
                <div className="h-3 w-3 rounded-full bg-green-500 mx-1"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-blue-500 rounded"></div>
                <div className="h-4 w-3/4 bg-blue-500 rounded"></div>
                <div className="h-4 w-1/2 bg-blue-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="services" className="w-full" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="services">Услуги</TabsTrigger>
            <TabsTrigger value="instructions">Инструкция</TabsTrigger>
            <TabsTrigger value="contact">Контакты</TabsTrigger>
          </TabsList>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold font-montserrat text-slate-800 mb-2">Наши услуги</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Полный спектр услуг для работы с документами в одном месте.
                От простого копирования до изготовления фото на документы.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <Icon name={service.icon} className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-slate-800">{service.title}</h3>
                        <p className="text-slate-600 text-sm mt-1">{service.description}</p>
                        <p className="text-blue-600 font-medium mt-2">{service.price}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="font-medium text-slate-800 mb-2">Корпоративным клиентам</h3>
              <p className="text-slate-600 text-sm">
                Специальные условия для компаний с большим объемом печати. Долгосрочные контракты и выгодные условия для постоянных клиентов.
              </p>
              <Button className="mt-4 bg-blue-600">Получить коммерческое предложение</Button>
            </div>
          </TabsContent>

          {/* Instructions Tab */}
          <TabsContent value="instructions">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold font-montserrat text-slate-800 mb-2">Как работать с нами</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Оформление заказа занимает всего несколько минут. Следуйте инструкции для получения результата.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 h-full md:mx-auto border-l-2 border-blue-200 left-4 md:left-1/2 md:-translate-x-1/2"></div>
                <div className="space-y-12 relative">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex flex-col md:flex-row items-center md:even:flex-row-reverse">
                      <div className="flex-1 md:w-1/2 ml-10 md:ml-0 md:px-10 mb-4 md:mb-0">
                        <Card>
                          <CardContent className="p-6">
                            <h3 className="font-medium text-lg text-slate-800 mb-2">{step.title}</h3>
                            <p className="text-slate-600">{step.description}</p>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="z-10 absolute md:relative left-0 md:left-auto">
                        <div className="h-8 w-8 md:h-12 md:w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                          {step.id}
                        </div>
                      </div>

                      <div className="flex-1 md:w-1/2 hidden md:block"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold font-montserrat text-slate-800 mb-2">Свяжитесь с нами</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Мы всегда готовы ответить на ваши вопросы и помочь с оформлением заказа.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="font-medium text-lg text-slate-800 mb-4">Контактная информация</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Icon name="MapPin" className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-slate-800">Адрес</p>
                      <p className="text-slate-600">ул. Примерная, 123, Москва</p>
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
                      <p className="text-slate-600">info@pechatplus.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Icon name="Clock" className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-slate-800">Часы работы</p>
                      <p className="text-slate-600">Пн-Пт: 9:00 - 20:00</p>
                      <p className="text-slate-600">Сб-Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-lg text-slate-800 mb-4">Напишите нам</h3>
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
                  
                  <Button className="w-full bg-blue-600">Отправить сообщение</Button>
                </form>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Printer" size={24} className="text-blue-400 mr-2" />
                <h2 className="text-xl font-bold font-montserrat">Печать+</h2>
              </div>
              <p className="text-slate-400 mb-4">
                Качественные услуги печати, копирования и работы с документами по доступным ценам.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Услуги</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Печать документов</li>
                <li>Копирование</li>
                <li>Сканирование</li>
                <li>Фото на документы</li>
                <li>Ламинирование</li>
                <li>Брошюровка</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Контакты</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center">
                  <Icon name="MapPin" className="h-4 w-4 mr-2" />
                  ул. Примерная, 123, Москва
                </li>
                <li className="flex items-center">
                  <Icon name="Phone" className="h-4 w-4 mr-2" />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" className="h-4 w-4 mr-2" />
                  info@pechatplus.ru
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2025 Печать+. Все права защищены.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
