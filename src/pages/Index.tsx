import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const schedule = [
    { day: 'Понедельник', time: '14:00 - 00:00' },
    { day: 'Вторник', time: '14:00 - 00:00' },
    { day: 'Среда', time: '14:00 - 00:00' },
    { day: 'Четверг', time: '14:00 - 00:00' },
    { day: 'Пятница', time: '14:00 - 00:00' },
    { day: 'Суббота', time: '14:00 - 00:00' },
    { day: 'Воскресенье', time: '14:00 - 00:00' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 px-6 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="text-5xl font-bold leading-tight">
              ООО "Азиаточка на час"
            </h1>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-8">
              <img 
                src="https://cdn.poehali.dev/files/cc4aba94-599c-44c9-8f3c-57149f89c9a7.jpg"
                alt="Наш сервис"
                className="rounded-2xl shadow-2xl w-full object-cover h-80 animate-scale-in"
              />
              <img 
                src="https://cdn.poehali.dev/files/5bc7c342-fae9-4ce7-9997-d6c7e2fa92e6.jpg"
                alt="Наш сервис"
                className="rounded-2xl shadow-2xl w-full object-cover h-80 animate-scale-in"
                style={{ animationDelay: '0.2s' }}
              />
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto mt-8">
              <p className="text-xl text-slate-100 leading-relaxed mb-4">
                Вам скучно и одиноко? Вы хотите выпить но рядом никого? Вас все бросили или вы просто хотите пообщаться с кем-то? Звоните
              </p>
              <p className="text-2xl font-bold text-yellow-300 mb-6">
                О цене договоримся
              </p>
              <a 
                href="tel:+79962655358"
                className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full text-2xl font-bold hover:bg-slate-100 transition-all hover:scale-105"
              >
                <Icon name="Phone" size={28} />
                +7 (996) 265-53-58
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* Schedule Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Icon name="Calendar" size={48} className="text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-slate-800">График работы</h2>
            <p className="text-slate-600 mt-2">Мы работаем для вас каждый день</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schedule.map((item, index) => (
              <Card 
                key={index}
                className="p-6 transition-transform duration-200 hover:scale-105 animate-fade-in border-2 hover:border-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={24} className="text-primary" />
                    <span className="font-semibold text-slate-800">{item.day}</span>
                  </div>
                  <span className="text-primary font-bold">{item.time}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-xl bg-gradient-to-br from-primary to-blue-700 text-white animate-fade-in">
            <div className="text-center space-y-6">
              <Icon name="Phone" size={64} className="mx-auto" />
              <h2 className="text-4xl font-bold">Свяжитесь с нами</h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block">
                <a 
                  href="tel:+79962655358" 
                  className="text-3xl md:text-4xl font-bold hover:text-blue-200 transition-colors flex items-center gap-4"
                >
                  <Icon name="Phone" size={36} />
                  +7 (996) 265-53-58
                </a>
              </div>
              <p className="text-xl text-slate-100 max-w-2xl mx-auto">
                Позвоните нам в любое рабочее время. Мы всегда рады помочь!
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Icon name="MapPin" size={20} />
                  <span>Саратов</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Icon name="Mail" size={20} />
                  <span>info@aziatochka.ru</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 ООО "Азиаточка на час". Профессиональный сервис компании.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;