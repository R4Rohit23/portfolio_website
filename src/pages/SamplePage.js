import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Skills", link: "/SkillPage" },
  { name: "Projects", link: "/ProjectPage" },
  { name: "Contact", link: "/ContactPage" },
];

export default function SamplePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDownload = () => {
    const fileUrl =
      "https://drive.google.com/file/d/1Dv03jtDIfQYMsa2cEGYmVjkEIeuDtUnZ/view?usp=sharing";

    // Create a temporary anchor element to trigger the download.
    const downloadLink = document.createElement("a");
    downloadLink.href = fileUrl;
    downloadLink.setAttribute("download", "file.pdf");

    // Append the anchor element to the DOM and trigger the click event.
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Clean up by removing the anchor element from the DOM.
    document.body.removeChild(downloadLink);
  };

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>Web Developer<i>", "<i>Full Stack Developer"],
      typeSpeed: 80,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="relative mx-auto max-w-7xl mb-32 px-4 sm:static sm:px-6 lg:px-8">
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


        <header>
          <nav
            className="flex items-center justify-between p-6 lg:px-0"
            aria-label="Global"
          >
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="inline-block rounded-md border border-transparent bg-indigo-600 hover:bg-indigo-700 px-8 py-1 text-center font-medium text-white text-lg font-bold text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Responsive Dialog  */}
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        
        <div className="overflow-hidden py-24 sm:py-10">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-6xl lg:grid-cols-2">
            <div className="lg:pr-6 lg:pt-6">
              <div className="lg:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Hello! 👋 Myself <br></br> Rohit Chaware <br></br> & I am a{" "}
                  <span ref={el} />
                </h1>
                <p className="mt-4 font-semibold text-xl text-gray-500">
                  🔥 I am a <em>Full Stack Developer</em> with expertise in{" "}
                  <em>MERN Stack</em> with knowledge of HTML, CSS, SQL, MySQL,
                  PHP, React+Redux, Mongoose, PostMan, RESTful API, Tailwind
                  CSS, MUI, Stripe. <br></br>
                  🔥 I have handfull knowledge of prgramming languages like C++,
                  Java, Python and JavaScript. <br></br>
                  🔥 A hard-core DSA lover having highest 3🌟 on CodeChef, 180+
                  problem solved on LeetCode, 1st Rank holder in GFG College
                  Chapter, 5🌟 in C++, Java and SQL on HackerRank.
                </p>
              </div>
            </div>
            <img
              src={require("../logos/Dev2.jpg")}
              alt="Product screenshot"
              className="w-[25rem] max-w-none  sm:w-[40rem] md:-ml- lg:-ml-1"
              width={2000}
              height={1000}
            />
          </div>
          <button
            onClick={handleDownload}
            className="mt-10 inline-block rounded-md border border-transparent px-8 py-3 text-center font-medium text-white bg-cyan-600 hover:bg-cyan-700"
          >
            Download Resume
          </button>

          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Footer  */}
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
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
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-lg leading-10 text-gray-900">
            <strong className="font-semibold">Made with ❤</strong>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            By Rohit Maroti Chaware
          </p>
          <a
            href="https://www.linkedin.com/in/rohit-chaware/"
            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Connect me on LinkedIn<span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <div className="flex flex-1 justify-end"></div>
      </div>
    </>
  );
}
