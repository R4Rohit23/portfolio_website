const frontstack = [
  { name: "html", link: require("../logos/HTML_logo.png") },
  { name: "css", link: require("../logos/css.png") },
  { name: "react", link: require("../logos/React_Logo.png") },
];

const backstack = [
  { name: "node", link: require("../logos/node_logo.png") },
  { name: "php", link: require("../logos/php.png") },
  { name: "mongo", link: require("../logos/mongo.png") },
  { name: "js", link: require("../logos/javascript.png") },
  { name: "mysql", link: require("../logos/mysql.png") },
  { name: "express", link: require("../logos/Expressjs.png") },
];

const progLang = [
  { name: "c++", link: require("../logos/c++.png") },
  { name: "java", link: require("../logos/java.png") },
  { name: "python", link: require("../logos/python.png") },
];

function SkillPage() {
  return (
    <div>
      {/* background style  */}
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
      {/* background style end  */}

      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technical Specifications
          </h2>

          {/* Front Stack  */}
          <h1 className="text-xl mt-10 font-bold tracking-tight text-gray-900 sm:text-2xl">
            Frontend Technologies
          </h1>

          <dl className="mt-5 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-y-16 lg:gap-x-8">
            {frontstack.map((front) => (
              <div
                key={front.name}
                className=" text-center pt-0"
              >
                <img
                  src={front.link}
                  alt="Image"
                  className="rounded-lg"
                  width={100}
                />
              </div>
            ))}
          </dl>
          {/* Front stack end  */}

          {/* Backend stakc  */}
          <h1 className="text-xl mt-10 font-bold tracking-tight text-gray-900 sm:text-2xl">
            Backend Technologies
          </h1>

          <dl className="mt-5 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-y-16 lg:gap-x-8">
            {backstack.map((back) => (
              <div
                key={back.name}
                className=" text-center pt-0"
              >
                <img
                  src={back.link}
                  alt="Image"
                  className="rounded-lg"
                  width={100}
                />
              </div>
            ))}
          </dl>
          {/* Backend stack end  */}

          {/* prgramming stack  */}
          <h1 className="text-xl mt-10 font-bold tracking-tight text-gray-900 sm:text-2xl">
            Programming Languages
          </h1>

          <dl className="mt-5 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-y-16 lg:gap-x-8">
            {progLang.map((lang) => (
              <div
                key={lang.name}
                className="text-center pt-0"
              >
                <img
                  src={lang.link}
                  alt="Image"
                  className="rounded-lg"
                  width={100}
                />
              </div>
            ))}
          </dl>
          {/* prgramming stack end  */}
        </div>
        <div className="grid grid-cols-1 grid-rows-1">
          <img
            src={require("../logos/Skills.png")}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default SkillPage;
