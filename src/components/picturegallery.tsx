import Image from "next/image";
import image1 from "../../public/picturegallery/IMG-20241214-WA0007.jpg";
import image2 from "../../public/picturegallery/IMG_20241215_101810.jpg";
import image3 from "../../public/picturegallery/IMG_20241215_171141.jpg";
import image4 from "../../public/picturegallery/IMG_20241215_171146.jpg";
import image5 from "../../public/picturegallery/IMG_20241216_030049_374.jpg";
import image6 from "../../public/picturegallery/IMG_20241216_030049_435.jpg";

function PictureGallery() {
  const cards = [
    { src: image2 },
    { src: image1 },
    { src: image3 },
    { src: image4 },
    { src: image5 },
    { src: image6 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 lg:p-60 h-2/4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="rounded-lg shadow-lg overflow-hidden border-2 border-teal-200"
        >
          <Image
            src={card.src}
            alt={`Card ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default PictureGallery