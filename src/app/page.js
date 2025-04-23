import Image from "next/image";
import imageServicios from "../../public/image-servicios.jpg";


export default function Home() {
  return (
    <main>

      <section className="hero flex items-end justify-center">
        <div className="w-full max-w-[1150px] pb-24">
          <h1 className="text-[56px] font-sans font-bold">Success through design</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="w-full max-w-[1150px] mx-auto grid grid-cols-5 items-start">
          <div className="flex flex-col justify-center">
            <h2>
              <span className="flex items-center text-[#989F9C]">
                <span className="text-8xl">50</span>
                <sup className="text-4xl -mt-4">+</sup>
              </span>
            </h2>
            <p className="w-1/2">Años de experiencia</p>
          </div>
          <div className="flex flex-col justify-center">
            <h2>
              <span className="flex items-center text-[#989F9C]">
                <span className="text-8xl">16</span>
                <sup className="text-4xl -mt-4">+</sup>
              </span>
            </h2>
            <p className="w-1/2">Paises</p>
          </div>
          <div className="flex flex-col justify-center">
            <h2>
              <span className="flex items-center text-[#989F9C]">
                <span className="text-8xl">4</span>
                <sup className="text-4xl -mt-4">+</sup>
              </span>
            </h2>
            <p className="w-1/2">Millones de m² diseñados</p>
          </div>
          <div className="flex flex-col justify-center">
            <h2>
              <span className="flex items-center text-[#989F9C]">
                <span className="text-8xl">11</span>
                <sup className="text-4xl -mt-4">+</sup>
              </span>
            </h2>
            <p className="w-1/2">Premios</p>
          </div>
          <div className="flex flex-col justify-center">
            <h2>
              <span className="flex items-center text-[#989F9C]">
                <span className="text-8xl">110</span>
                <sup className="text-4xl -mt-4">+</sup>
              </span>
            </h2>
            <p className="w-1/2">Proyectos en México y LATAM</p>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-[1150px] mx-auto grid grid-cols-5">
          
        </div>
      </section>
      <section>
        <div className="w-full max-w-[1150px] mx-auto grid grid-cols-5">
          
        </div>
      </section>
      <section>
        <div className="w-full max-w-[1150px] mx-auto space-y-10">
          <div className="aspect-video flex items-center justify-center">
            <h2 className="text-8xl text-center">Experiencia global, enfoque local</h2> 
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-black font-bold text-[20px]">Guadalajara</h4>
              <p>México</p>
            </div>
            <div>
              <h4 className="text-black font-bold text-[20px]">Guadalajara</h4>
              <p>México</p>
            </div>
            <div>
              <h4 className="text-black font-bold text-[20px]">L35 Barcelona</h4>
              <p>España</p>
            </div>
            <div>
              <h4 className="text-black font-bold text-[20px]">L35 Madrid</h4>
              <p>España</p>
            </div>
          </div>
          <div className="flex items-center">
            <a href="" className="bg-[#636B69] text block px-6 py-3 rounded-full text-white font-bold">Conoce El estudio</a>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="w-full max-w-[1150px] mx-auto">
          <h2 className="text-5xl text-[#636B69] font-bold">Servicios</h2>
          <div className="grid grid-cols-2 mt-6">
            <dl className="pt-12 pr-24">
              <dt className="text-2xl font-bold text-[#407978]">Arquitectura</dt>
              <dd className="border-black/15 border-b py-8 mb-8">Diseñamos espacios únicos que resuelven necesidades, potencian el uso del espacio y generan valor a largo plazo. Combinando funcionalidad, estética y sostenibilidad para crear entornos que mejoran la calidad de vida y una experiencia única en cada proyecto.</dd>
              <dt className="flex items-center gap-3 mt-8 cursor-pointer">
                <span className="flex items-center justify-center text-2xl text-[#636B69] bg-[#EFEFEF] w-[30px] h-[30px] rounded-full">+</span>
                <span className="text-2xl font-bold">Master Planning</span>
              </dt>
              <dt className="flex items-center gap-3 mt-8 cursor-pointer">
                <span className="flex items-center justify-center text-2xl text-[#636B69] bg-[#EFEFEF] w-[30px] h-[30px] rounded-full">+</span>
                <span className="text-2xl font-bold">Diseño de interiores</span>
              </dt>
              <dt className="flex items-center gap-3 mt-8 cursor-pointer">
                <span className="flex items-center justify-center text-2xl text-[#636B69] bg-[#EFEFEF] w-[30px] h-[30px] rounded-full">+</span>
                <span className="text-2xl font-bold">Master Planning</span>
              </dt>
            </dl>
            <Image src={imageServicios} className="rounded-xl" alt="Dropdown Icon" />
          </div>
        </div>
      </section>
    </main>
  );
}
