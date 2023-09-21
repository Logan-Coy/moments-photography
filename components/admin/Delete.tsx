import { DeleteDropdown } from "@components/admin";
import { workData } from "@constants";

function Delete() {
  return (
    <section id="delete">
      <div className="m-4 max-w-[950px] mx-auto xl:max-w-[1200px]">
        <div className="m-6">
          <h2 className="font-montserrat text-4xl py-4 text-center">
            Delete a Photo
          </h2>
        </div>
        <div className="px-8">
          {workData.map((data) => (
            <DeleteDropdown
              key={data.title}
              heading={data.title}
              folder={data.folder}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Delete;
