"use client";

import { Card, Modal } from "@components";
import { useState, Fragment } from "react";
import { workData } from "@constants";
import { useLockBodyScroll, useToggle } from "react-use";

const Work = () => {
  const [showModal, setShowModal] = useState("");
  const [locked, toggleLocked] = useToggle(false);

  useLockBodyScroll(locked);

  return (
    <section id="work" className="py-2">
      <div className="px-8 grid grid-cols-1 ss:grid-cols-2 lg:grid-cols-4 gap-4">
        {workData.map((data) => (
          <Fragment key={data.title}>
            <Card
              //@ts-expect-error
              imgSrc={data.imgSrc}
              imgAlt={data.imgAlt}
              title={data.title}
              showModal={showModal}
              setShowModal={setShowModal}
              toggleLocked={toggleLocked}
            />

            {showModal === data.title && (
              <Modal
                onClose={() => {
                  setShowModal("");
                  toggleLocked(false);
                }}
                visible={showModal}
                title={data.title}
                folder={data.folder}
              />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Work;
