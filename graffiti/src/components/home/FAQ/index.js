import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import './style.css'

import { FAQData } from './data';


const FAQEntry = Component => style => (question, answer) => (
  <>
    <hr style={style} />
    <Component title={question}>
      <p className="faq-ans">
        {answer}
      </p>
    </Component>
  </>
);

const FAQ = () => (
  <div className="FAQ white-block">
    <div className="row">
      <div className="col-lg-2"></div>
      <div className="col-lg-8">
        <h1>FAQ</h1>
        <Accordion atomic={false}>
          { FAQData.map(e => FAQEntry(AccordionItem)({margin: '0rem'})(e.question, e.answer)) }
        </Accordion>
      </div>
      <div className="col-lg-2 pr-0"></div>
    </div>
  </div>
);

export default FAQ;