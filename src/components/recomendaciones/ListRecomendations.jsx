import React from "react";
import CardRecomendations from "./CardRecomendations";
import Carousel from "@itseasy21/react-elastic-carousel";

function ListRecomendations({ index }) {
    const posts = [
        {
            id: "1001-asdf",
            title: "Boost your conversion rate",
            href: "#",
            category: { name: "Article", href: "#" },
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
            date: "Mar 16, 2020",
            datetime: "2020-03-16",
            imageUrl:
                "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
            readingTime: "6 min",
            author: {
                name: "Roel Aufderehar",
                href: "#",
                imageUrl:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
        },
        {
            id: "1002-asdf",
            title: "How to use search engine optimization to drive sales",
            href: "#",
            category: { name: "Video", href: "#" },
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
            date: "Mar 10, 2020",
            datetime: "2020-03-10",
            imageUrl:
                "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
            readingTime: "4 min",
            author: {
                name: "Brenna Goyette",
                href: "#",
                imageUrl:
                    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
        },
        {
            id: "1003-asdf",
            title: "Improve your customer experience",
            href: "#",
            category: { name: "Case Study", href: "#" },
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
            date: "Feb 12, 2020",
            datetime: "2020-02-12",
            imageUrl:
                "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
            readingTime: "11 min",
            author: {
                name: "Daniela Metz",
                href: "#",
                imageUrl:
                    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
        },
    ];

    const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 1280, itemsToShow: 2, itemsToScroll: 2 },
        { width: 1750, itemsToShow: 3, itemsToScroll: 2 },
    ];

    return (
        <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pb-28">
            <div className="absolute inset-0">
                <div className="h-1/3 bg-white sm:h-2/3" />
            </div>
            <div className="relative mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        From the blog
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                        libero labore natus atque, ducimus sed.
                    </p>
                </div>
                <Carousel
                    itemsToScroll={3}
                    itemsToShow={3}
                    breakPoints={breakPoints}
                    pagination={false}
                    itemPadding={[0, 2]}
                >
                    {posts.map((post) => (
                        <CardRecomendations index={index} data={post} />
                    ))}
                </Carousel>
            </div >
        </div >
    );
}

export default ListRecomendations;