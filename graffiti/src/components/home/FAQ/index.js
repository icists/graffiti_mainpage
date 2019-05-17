import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import './style.css'

const FAQ = () => (
  <div className="FAQ white-block">
    <div className="row">
      <div className="col-lg-2"></div>
      <div className="col-lg-8">
        <h1>FAQ</h1>
        <Accordion atomic={false}>

          <hr style={{margin:'0'}}/>
          <AccordionItem title="참가 확인서는 어떻게 발급받을 수 있나요?">
            <p className="faq-ans">
              (보류)
            </p>
          </AccordionItem>
          <hr style={{margin:'0'}}/>
          <AccordionItem title="지원은 어떻게 하나요?">
            <p className="faq-ans">
            상단 배너 또는 홈의 ‘APPLY’버튼을 누르시면 EVENTUS를 통해 참가 신청하실 수 있습니다. 
            </p>
          </AccordionItem>
          <hr style={{margin:'0'}}/>
          <AccordionItem title="지원에 필요한 서류가 있나요?">
            <p className="faq-ans">
            따로 필요한 서류는 없지만 지원 시 문항들에 대해 최대한 성심 성의껏 작성해주시면 감사하겠습니다.
            </p>
          </AccordionItem>
          <hr style={{margin:'0'}}/>
          <AccordionItem title="지원서에 작성한 개인정보는 어떻게 처리되나요?">
            <p className="faq-ans">
            상단 배너 또는 홈의 ‘APPLY’버튼을 누르시면 EVENTUS를 통해 참가 신청하실 수 있습니다. 
            </p>
          </AccordionItem>
          <hr style={{margin:'0'}}/>
          <AccordionItem title="기업에게 개인정보를 제공하고 싶지 않은 경우 참가할 수 없나요?">
            <p className="faq-ans">
            참가하실 수 있습니다. 다만, ‘2부: 네트워킹 파티’에서 Matchmaking의 참여가 제한됩니다.
            </p>
          </AccordionItem>
          <hr style={{margin:'0'}}/>
          <AccordionItem title="ICISTS 참가자도 일반 참가자와 동일하게 지원하면 되나요?">
            <p className="faq-ans">
            ICISTS 참가자 역시 동일한 페이지를 통해 신청하실 수 있으며 ICISTS참가자 항목에 체크해주시면 참가비를 면제받으실 수 있습니다. 자세한 내용은 메일로 공지될 예정입니다.
            </p>
          </AccordionItem>
          <hr style={{margin:'0'}}/>
          <AccordionItem title="참가 기업의 정보가 사전에 제공되나요?">
            <p className="faq-ans">
            아니요. 참가 기업의 정보는 사전에 제공되지 않습니다.
            </p>
          </AccordionItem>
          <hr style={{margin:'0'}}/>
          <AccordionItem title="미성년자도 2부에 참석할 수 있나요?">
            <p className="faq-ans">
            2부는 대전 시내의 클럽에서 진행되므로 미성년자는 참여할 수 없습니다. 양해 부탁 드립니다.
            </p>
          </AccordionItem>
          <hr style={{margin:'0'}}/>
          <AccordionItem title="기업에게 개인정보를 제공하고 싶지 않은 경우 참가할 수 없나요?">
            <p className="faq-ans">
            참가하실 수 있습니다. 다만, ‘2부: 네트워킹 파티’에서 Matchmaking의 참여가 제한됩니다.
            </p>
          </AccordionItem>
          <hr style={{margin:'0'}}/>
          <AccordionItem title="숙식이 제공되나요?">
            <p className="faq-ans">
            일반 참가자의 경우 숙식은 따로 제공되지 않지만 2부에서 주류 및 간단한 다과가 제공될 예정입니다. 스타트업 및 VC의 경우 따로 식사 및 네트워킹 자리가 마련되어 있습니다.
            </p>
          </AccordionItem>
          <hr style={{margin:'0'}}/>
          <AccordionItem title="교통편이 제공되나요?">
            <p className="faq-ans">
            서울->대전의 편도 버스가 준비되어 있습니다. 탑승을 희망하시는 경우 참가 신청 시 체크해 주시면 됩니다.
            </p>
          </AccordionItem>
          <hr style={{margin:'0'}}/>
          <AccordionItem title="신청 취소 및 환불 절차는 어떻게 되나요?">
            <p className="faq-ans">
            </p>
          </AccordionItem>
          <hr style={{margin:'0'}}/>
        </Accordion>
      </div>
      <div className="col-lg-2"></div>
    </div>
  </div>
);

const DummyContent = () => (
  <p style={{ padding: '18px' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
);

export default FAQ;