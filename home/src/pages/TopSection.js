import React, { Component } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

class FAQ extends Component {
  render() {
    return (
      <div>
        <section className='text-gray-700 body-font relative'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='flex flex-col text-center w-full mb-12'>
              <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
                Frequently Asked Questions
              </h1>
            </div>
            <div className='lg:w-1/2 md:w-2/3 mx-auto'>
              <div className='flex flex-wrap -m-2'>
                <Accordion preExpanded={[1]}>
                  <AccordionItem uuid={1}>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is free will real or just an illusion?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is free will real or just an illusion?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is free will real or just an illusion?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is free will real or just an illusion?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            {/* <div className='flex flex-col text-center w-full mb-12'>
              <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
                <div id='e1_158'>
                  <div id='e1_159'></div>
                  <span id='e1_160'>
                    Still have unasnwered questions? Get in touch.
                  </span>
                </div>
              </h1>
            </div> */}
          </div>
        </section>
      </div>
    );
  }
}

export default FAQ;
