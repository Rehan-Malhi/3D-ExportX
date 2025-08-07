
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

type MyCardProps = {
    title: string;
    description: string;
    src: string;
};

const card = ({ src, description, title }: MyCardProps) => {


    return (

        <div className="max-w-sm rounded-2xl bg-gray-800 overflow-hidden shadow-lg">
            <Image src={src} width={500} height={500} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-white text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <Link className='w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200' href='/'>
                    Get it
                </Link>
            </div>
        </div>
    )
}

export default card