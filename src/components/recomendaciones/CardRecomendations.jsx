import React from 'react';
import { Link } from 'react-router-dom';

const CardRecomendations = ({ data, index }) => {
    return (
        <Link
            to='/recomendations/id'
            onMouseEnter={() => {
                const title_element = document.getElementById(index);
                title_element.classList.add("text-orange-500");
                const img = document.getElementById(data.id)
                img.classList.add('object-scale-down')
            }}
            onMouseLeave={() => {
                const title_element = document.getElementById(index);
                title_element.classList.remove("text-orange-500");
                const img = document.getElementById(data.id);
                img.classList.remove("object-scale-down");
            }}

            className="flex flex-col overflow-hidden rounded-lg shadow-lg"
        >
            <div className="flex-shrink-0">
                <img
                    id={data.id}
                    className="h-96 w-full object-cover"
                    src={data.imageUrl}
                    alt=""
                />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        <a href={data.category.href} className="hover:underline">
                            {data.category.name}
                        </a>
                    </p>
                    <a href={data.href} className="mt-2 block">
                        <p id={index} className="text-xl font-semibold text-gray-900">
                            {data.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">{data.description}</p>
                    </a>
                </div>
                <div className="mt-6 flex items-center"></div>
            </div>
        </Link>
    );
}

export default CardRecomendations;
