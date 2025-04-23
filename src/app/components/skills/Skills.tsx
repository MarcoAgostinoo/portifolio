import AdvancedRating from "../advancedrating/AdvancedRating";
import { Badge } from "flowbite-react";

export default function Skills() {
  return (
    <div className="w-full min-h-screen flex flex-col ml-16 bg-white">
      {/* Título */}
      <div className="w-full flex items-center ml-12 h-10 mt-24">
        <h2 className="text-3xl -mb-10 text-gray-900 font-semibold">
          Education &amp; Skills
        </h2>
      </div>

      {/* Conteúdo principal */}
      <div className="w-full flex items-center justify-around gap-16 py-12">
        {/* Coluna de Educação */}
        <div className="w-3/12 flex flex-col justify-between bg-gray-50 p-8 text-gray-900 rounded-2xl shadow">
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
              2010–2012
            </Badge>
            <p className="font-semibold">Web Development</p>
            <p className="text-sm">International Design Institute</p>
          </div>
          {/* Item 3 */}
          <div className="pt-6">
            <Badge color="success" size="sm" className="mb-2">
              2010–2012
            </Badge>
            <p className="font-semibold">Search Engine Optimization</p>
            <p className="text-sm">International Design Institute</p>
          </div>
        </div>

        {/* Coluna de Skills */}
        <div className="w-8/12 flex flex-col justify-between p-8 text-gray-900 bg-white rounded-2xl">
          <h2 className="text-2xl font-bold">My skills</h2>
          <p className="max-w-prose">
            Eu a Freelancer Front-end Developer with over 3 years of
            experience. I code and create web elements for amazing people around
            the world. I like working with new people and experiences.
          </p>
          <AdvancedRating />
        </div>
      </div>
    </div>
  );
}
