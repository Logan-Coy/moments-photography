import React from "react";

function Header() {
  return (
    <div className="m-4 max-w-[950px] mx-auto xl:max-w-[1200px]">
      <h1 className="font-montserrat text-5xl flex justify-center text-center m-8">
        Welcome back Kerri!
      </h1>
      <div className=" m-6 px-8">
        <p className="font-montserrat text-xl mb-6">
          You can use the tools below to upload new photos to your website, and
          delete photos you no longer want or uploaded by mistake!
        </p>
        <p className="font-montserrat text-xl font-semibold">
          Some things to consider:
        </p>
        <ul className="list-disc list-outside font-montserrat text-lg">
          <li className="list-item">
            Any photo uploaded will immediatly appear on your site under the
            category/folder you choose
          </li>
          <li>
            After uploading or deleting a photo, you will need to refresh the
            page to see the changes
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
