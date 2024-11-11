import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

function About() {
  return (
    <div className="py-20 bg-orange-500 text-center ">
      {/* <h2 className="text-3xl font-bold mb-4 text-white">O nas</h2> */}
      <section
        id="about"
        className="  grid bg-orange-500 grid-cols-1 sm:grid-cols-2 justify-center items-center gap-8  px-8"
      >
        <img src="about.jpg" className="justify-self-center w-full" />

        <div className=" flex flex-col justify-center">
          <div className="flex flex-col items-start">
            <p className=" uppercase text-xs md:text-lg lg:text-2xl text-orange-300 font-bold tracking-widest py-4">
              Dlaczego właśnie my?
            </p>
            <h2 className=" text-white text-4xl font-medium pb-10 self-start text-left md:text-5xl lg:text-7xl">
              Przynosimy{" "}
              <span className="text-orange-300 underline uppercase bg-gradient-to-r from-lime-400 to-emerald-600 bg-clip-text text-transparent">
                ekologiczne
              </span>{" "}
              <br></br>
              rozwiązania aby tobie żyło się lepiej
            </h2>
          </div>

          <div className="flex flex-col justify-start gap-6 ">
            <Disclosure defaultOpen={true}>
              {({ open }) => (
                <>
                  <DisclosureButton
                    className="py-6 group flex w-full items-center justify-between text-white 
              "
                  >
                    <span
                      className={
                        open
                          ? "text-orange-300 text-md md:text-xl lg:text-2xl"
                          : "text-gray-100 text-md md:text-xl lg:text-2xl"
                      }
                    >
                      Na jakim sprzęcie robimy pomiary?
                    </span>
                    <IoIosArrowDown
                      className={`group-data-[open]:rotate-180 ${
                        open ? "text-orange-300 " : "text-white "
                      }`}
                    />
                  </DisclosureButton>

                  <DisclosurePanel
                    transition
                    className="text-white duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 text-left overflow-hidden transition"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates eaque tempore dolore necessitatibus odit labore
                    eius illo nulla, quas voluptate, saepe expedita molestias
                    enim aperiam maiores quos quaerat consequatur architecto.
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton
                    className="py-2 group flex w-full items-center justify-between text-white 
              "
                  >
                    <span
                      className={
                        open
                          ? "text-orange-200 text-md md:text-xl lg:text-2xl"
                          : "text-white text-md md:text-xl lg:text-2xl"
                      }
                    >
                      Na jakim sprzęcie robimy pomiary?
                    </span>
                    <IoIosArrowDown
                      className={`group-data-[open]:rotate-180 ${
                        open ? "text-orange-300" : "text-white"
                      }`}
                    />
                  </DisclosureButton>

                  <DisclosurePanel
                    transition
                    className="text-white transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 text-left"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates eaque tempore dolore necessitatibus odit labore
                    eius illo nulla, quas voluptate, saepe expedita molestias
                    enim aperiam maiores quos quaerat consequatur architecto.
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
