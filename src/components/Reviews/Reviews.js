import { useState } from 'react';

function Reviews() {
  const reviews = [
    { text: "The design on these tees is incredibly vibrant and true to the anime.", source: "Anime Insider" },
    { text: "Comfortable and stylish, perfect for any anime fan.", source: "Otaku Review" },
    { text: "A must-have for any manga enthusiast, with stunning artwork and gripping stories.", source: "Manga Weekly" },
    { text: "An exceptional collection that stands out in any library.", source: "Comic Book Resources" },
    { text: "These hoodies are soft, warm, and showcase amazing anime designs.", source: "Cosplay Central" },
    { text: "Perfect for lounging or layering, with high-quality prints.", source: "Fashion Forward" }
  ];

  const reviewsPerPage = 3;
  const numberOfPages = Math.ceil(reviews.length / reviewsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (index) => {
    setCurrentPage(index);
    const scrollContainer = document.getElementById('scrollContainer');
    scrollContainer.scrollTo({
      left: index * scrollContainer.clientWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section className="my-8 text-center">
      <h2 className="text-4xl font-bold pt-[100px]">Brilliant</h2>
      <h2 className="text-4xl font-bold text-orange-600">★★★★★</h2>
      <p className="text-xl">based on 11868 reviews</p>

      <div className="relative overflow-hidden mt-8">
        <div
          id="scrollContainer"
          className="flex overflow-x-auto scrollbar-hide"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {Array.from({ length: numberOfPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="flex-none w-full min-w-full scroll-snap-start flex justify-center items-center"
            >
              {reviews.slice(pageIndex * reviewsPerPage, (pageIndex + 1) * reviewsPerPage).map((review, index) => (
                <div key={index} className="p-6 bg-white shadow-lg border border-gray-300 rounded-lg mx-2">
                  <p className="text-lg font-medium">{review.text}</p>
                  <p className="mt-2 text-sm text-gray-600">{review.source}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {[...Array(numberOfPages)].map((_, index) => (
            <span
              key={index}
              className={`block h-3 w-3 rounded-full ${index === currentPage ? 'bg-blue-600' : 'bg-gray-300'} cursor-pointer transition-all duration-300`}
              style={{ width: '12px', height: '12px' }}
              onClick={() => handlePageChange(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
