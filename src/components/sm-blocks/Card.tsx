
import React from 'react'
import Image from 'next/image'

type MyCardProps = {
  title: string;
  description: string;
  src: string;
};

const card = ({src, description, title} : MyCardProps) => {


    return (

        <div className="max-w-sm rounded-2xl bg-gray-800 overflow-hidden shadow-lg">
            <Image src={src} width={500} height={500} alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-white text-base">
                        {description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
        </div>
    )
}

export default card