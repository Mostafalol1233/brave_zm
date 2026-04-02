import { Link } from "wouter";
import { branding } from "@/lib/constants";

export default function Giveaway() {
  return (
    <div className="zenith-page">
      <div
        className="zenith-watermark"
        style={{ backgroundImage: `url(${branding.clanImageUrl})` }}
      />

      <div className="zenith-nav p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">Zenith x CrossFire Wiki</h1>
          <div className="flex gap-4">
            <Link href="/" className="text-white hover:text-red-300">Home</Link>
            <Link href="/shop" className="text-white hover:text-red-300">Shop</Link>
            <Link href="/giveaway" className="text-red-400 font-bold">Giveaway</Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-28 z-10">
        <div className="zenith-panel max-w-4xl mx-auto p-8">
          <div className="text-center mb-8">
            <img src={branding.clanImageUrl} alt="Zenith Clan" className="w-36 h-36 rounded-full mx-auto mb-4 border-4 border-red-500/60 object-cover" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">🚀 انطلاقة Zenith & CrossFire Wiki الكبرى</h2>
            <p className="text-lg text-slate-200 mt-2">مسابقة الجيفت الشهري! 🎁</p>
          </div>

          <div dir="rtl" className="space-y-4 text-slate-200 leading-8">
            <p>جاهز تكون واحد من المحظوظين؟ بالتعاون بين Zenith Clan و CrossFire Wiki هنبدأ سلسلة الجيفت الشهري المستمرة.</p>
            <h3 className="text-xl font-bold text-white mt-4">📝 شروط الانضمام للـ Giveaway:</h3>
            <ul className="space-y-3">
              <li>1️⃣ Discord: <a className="text-sky-300 underline" href="https://discord.gg/MZnurnpvFK" target="_blank" rel="noreferrer">https://discord.gg/MZnurnpvFK</a></li>
              <li>2️⃣ Facebook: <a className="text-sky-300 underline" href="https://www.facebook.com/share/1CEjVyeU7z/" target="_blank" rel="noreferrer">https://www.facebook.com/share/1CEjVyeU7z/</a></li>
              <li>3️⃣ YouTube: <a className="text-sky-300 underline" href="https://youtube.com/@zenith-cfw?si=VQHfqSMFf8NWxNuO" target="_blank" rel="noreferrer">https://youtube.com/@zenith-cfw?si=VQHfqSMFf8NWxNuO</a></li>
              <li>4️⃣ WhatsApp Zenith: <a className="text-sky-300 underline" href="https://whatsapp.com/channel/0029Vb7PVXZ6buMAzzHExO18" target="_blank" rel="noreferrer">https://whatsapp.com/channel/0029Vb7PVXZ6buMAzzHExO18</a></li>
              <li>📍 WhatsApp CrossFire Wiki: <a className="text-sky-300 underline" href="https://whatsapp.com/channel/0029Vb6jrI44yltQQfvkg41o" target="_blank" rel="noreferrer">https://whatsapp.com/channel/0029Vb6jrI44yltQQfvkg41o</a></li>
            </ul>
            <p className="text-amber-300 font-semibold">⚠️ السحب فيديو على يوتيوب، والتسجيل الأساسي في قنوات الواتساب. لازم تنفيذ كل الشروط.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
