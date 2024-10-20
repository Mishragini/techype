"use client"
import React, { useState, useEffect } from 'react';

const articles = [
    {
        image: '/api/placeholder/400/300',
        category: 'TREND',
        title: 'Strategies for Building Successful Online Stores',
        author: 'Techype Team'
    },
    {
        image: '/api/placeholder/400/300',
        category: 'TREND',
        title: 'Strategies for Building Successful Online Stores',
        author: 'Techype Team'
    },
    {
        image: '/api/placeholder/400/300',
        category: 'DESIGN',
        title: 'The Power of UI/UX: Creating Engaging Digital Experiences.',
        author: 'Techype Team'
    },
    {
        image: '/api/placeholder/400/300',
        category: 'PRODUCT',
        title: 'Agile Development: The Key to Flexibility',
        author: 'Techype Team'
    },
    {
        image: '/api/placeholder/400/300',
        category: 'TREND',
        title: 'Strategies for Building Successful Online Stores',
        author: 'Techype Team'
    },
    {
        image: '/api/placeholder/400/300',
        category: 'TREND',
        title: 'Strategies for Building Successful Online Stores',
        author: 'Techype Team'
    },
    {
        image: '/api/placeholder/400/300',
        category: 'DESIGN',
        title: 'The Power of UI/UX: Creating Engaging Digital Experiences.',
        author: 'Techype Team'
    },
    {
        image: '/api/placeholder/400/300',
        category: 'PRODUCT',
        title: 'Agile Development: The Key to Flexibility',
        author: 'Techype Team'
    },
];

const ArticleCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setSlidesToShow(4);
            } else if (window.innerWidth >= 768) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, slidesToShow]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + slidesToShow >= articles.length) ? 0 : prevIndex + 1
        );
    };



    return (
        <div className="w-full px-[50px] lg:px-32 py-16">
            <h2 className="text-3xl font-bold mb-6">Browse Our Article & Resources.</h2>
            <div className="relative">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
                    >
                        {articles.map((article, index) => (
                            <div key={index} className={`w-full flex-shrink-0 px-2 ${slidesToShow === 4 ? 'lg:w-1/4' :
                                slidesToShow === 2 ? 'md:w-1/2' :
                                    'w-full'
                                }`}>
                                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                    <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                        <p className="text-sm font-semibold text-blue-600 mb-2">{article.category}</p>
                                        <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                                        <p className="text-sm text-gray-600">By {article.author}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(articles.length / slidesToShow) }).map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full mx-1 ${index === Math.floor(currentIndex / slidesToShow) ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                        onClick={() => setCurrentIndex(index * slidesToShow)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ArticleCarousel;