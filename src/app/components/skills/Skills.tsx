import AdvancedRating from "../advancedrating/AdvancedRating";
import { Badge } from "flowbite-react";

export default function Skills() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white px-4 md:px-16 lg:px-24">
      {/* Título */}
      <div className="w-full flex items-center h-10 mt-24 px-2 md:px-0">
        <h2 className="text-3xl text-gray-900 font-semibold">
          Education &amp; Skills
        </h2>
      </div>

      {/* Conteúdo principal */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16 py-12">
        {/* Coluna de Educação */}
        <div className="w-full md:w-4/12 flex flex-col justify-between bg-gray-50 p-6 md:p-8 text-gray-900 rounded-2xl shadow mb-8 md:mb-0">
          {/* Item 1 */}
          <div className="pb-6 border-b border-gray-200">
            <Badge color="success" size="sm" className="mb-2">
              2010–2012
            </Badge>
            <p className="font-semibold">Graphic Designer</p>
            <p className="text-sm">International Design Institute</p>
          </div>
          {/* Item 2 */}
          <div className="py-6 border-b border-gray-200">
            <Badge color="success" size="sm" className="mb-2">
              2013–2015
            </Badge>
            <p className="font-semibold">Web Development</p>
            <p className="text-sm">International Design Institute</p>
          </div>
          {/* Item 3 */}
          <div className="pt-6">
            <Badge color="success" size="sm" className="mb-2">
              2016–2018
            </Badge>
            <p className="font-semibold">Search Engine Optimization</p>
            <p className="text-sm">International Design Institute</p>
          </div>
        </div>

        {/* Coluna de Skills */}
        <div className="w-full md:w-7/12 flex flex-col justify-between bg-white p-6 md:p-8 text-gray-900 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">My skills</h2>
          <p className="max-w-prose mb-6">
            I am a Freelancer Front-end Developer with over 3 years of
            experience. I code and create web elements for amazing people around
            the world. I like working with new people and experiences.
          </p>
          <AdvancedRating />
        </div>
      </div>
    </div>
  );
}
