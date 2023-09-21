"use client";

import { useState } from "react";

function Page() {
  const [file, setFile] = useState<File>();
  const [folder, setFolder] = useState("-- Select Folder --");
  const [image, setImage] = useState("");
  const [toggle, setToggle] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (folder === "-- Select Folder --") return;
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);
      data.append("folder", folder);

      const res = await fetch("/api/s3", {
        method: "POST",
        body: data,
      });

      setToggle(true);

      //handle the error
      if (!res.ok) throw new Error(await res.text());
    } catch (e: any) {
      // Handle errors here
      console.error(e);
    }
  };

  return (
    <section id="upload">
      <div className="m-4 max-w-[950px] mx-auto xl:max-w-[1200px]">
        <div className="m-6">
          <h2 className="font-montserrat text-4xl py-4 text-center">
            Upload a Photo
          </h2>

          <form
            onSubmit={onSubmit}
            className="border-2 border-slate-700 rounded-lg grid grid-cols-1 sm:grid-cols-2"
          >
            <div className="p-10">
              {/* Folder selection field */}
              <div className="pb-4">
                <label className="block font-montserrat text-sm" htmlFor="type">
                  Select the folder/category for this photo
                  <select
                    name="type"
                    id="type"
                    value={folder}
                    onChange={(e) => {
                      setFolder(e.target.value);
                    }}
                    className="block border-2 border-gray-500 p-2 mt-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500"
                  >
                    <option value="-- Select Folder --">
                      -- Select Folder --
                    </option>
                    <option value="weddings/">Wedding</option>
                    <option value="seniorPhotos/">Senior Photos</option>
                    <option value="family/">Family</option>
                    <option value="events/">Events</option>
                    <option value="wildlife/">Wildlife</option>
                    <option value="nature/">Nature</option>
                    <option value="places/">Places</option>
                    <option value="things/">Things</option>
                  </select>
                </label>
              </div>

              {/* Photo upload field */}
              <div className="pb-4">
                <label className="block font-montserrat text-sm" htmlFor="type">
                  Select the photo you would like to upload (.jpg)
                  <input
                    type="file"
                    name="file"
                    className="block font-montserrat text-sm border-2 border-gray-500 p-2 mt-2 rounded-md w-full"
                    onChange={(e) => {
                      setToggle(false);
                      setFile(e.target.files?.[0]);
                      if (e.target.files && e.target.files[0]) {
                        setImage(URL.createObjectURL(e.target.files[0]));
                      }
                    }}
                  />
                </label>
              </div>
              {/* Upload Button */}
              <button
                type="submit"
                className="bg-black hover:bg-neutral-700 text-white font-semibold font-montserrat text-lg py-3 mt-6 rounded-lg w-1/2 drop-shadow-lg hover:scale-105 duration-300"
              >
                Upload
              </button>
            </div>
            {/* Thumbnail for successful upload */}
            <div className={`${toggle ? "block" : "hidden"} p-10`}>
              <div className={`${toggle ? "block" : "hidden"}`}>
                <img src={image} alt="" className="w-full" />
                <h3
                  className={`${
                    toggle ? "block" : "hidden"
                  } font-montserrat text-white bg-green-600 rounded-b-lg w-full text-center text-lg py-2`}
                >
                  Upload successful!
                </h3>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Page;
