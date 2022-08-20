import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faq = () => {
  return (
    <section className="mt-5 ">
      <div className="text-center p-3">
        <h1>Frequently Asked Questions</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable <br /> content of a page when looking at its layout.
        </p>
      </div>

      <Accordion className="mx-auto w-75 mx-auto" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What other services are you compatible with?
          </Accordion.Header>
          <Accordion.Body>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text. All the
            generators on the.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Accordion Item #3</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default Faq;