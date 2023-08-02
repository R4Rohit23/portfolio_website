
const products = [
  {
    id: 1,
    name: "Ecommerce Website (Under Construction)",
    href: '#',
    imageSrc: require('../logos/Construction.jpg'),
    imageAlt: 'Portfolio Website',
  },
  {
    id: 2,
    name: "Portfolio Website",
    href: '#',
    imageSrc: require('../logos/Portfolio.png'),
    imageAlt: 'Portfolio Website',
  },
  {
    id: 3,
    name: "Indian Sign Language Translator App",
    href: 'https://github.com/R4Rohit23/Sign-Language-Translator',
    imageSrc: require('../logos/SignLang.jpg'),
    imageAlt: 'Indian Sign Language Translator',
  },
  {
    id: 4,
    name: "Personal To-do List",
    href: 'https://github.com/R4Rohit23/Todo_List',
    imageSrc: require('../logos/to-do-list-apps.png'),
    imageAlt: 'To-do List',
  },
  {
    id: 5,
    name: "Desktop Based Chat Application",
    href: 'https://github.com/R4Rohit23/Dekstop_Based_Chat_Application',
    imageSrc: require('../logos/Chat SS.png'),
    imageAlt: 'Desktop Based Chat Application',
  },
  {
    id: 6,
    name: "Space Invader Game",
    href: 'https://github.com/R4Rohit23/Space_Invader_Game',
    imageSrc: require('../logos/SpaceGame.png'),
    imageAlt: 'Space Invader Game',
  },
  // More products...
]

export default function Example() {
  return (
    <div>
       <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="font-bold text-5xl text-center mb-5">Personal Projects 👨‍💻</h2>
            <h4 className="font-semibold text-lg text-center mb-10">(Click Image to go to respective git repository)</h4>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg text-gray-700">{product.name}</h3>
            </a>
          ))}
        </div>
      </div>
      <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
          />
        </div>
    </div>
  )
}
