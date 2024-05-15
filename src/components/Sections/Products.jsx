import data from '../../data.json';

function Products() {
  return (
    <div className="sm:py-20 flex flex-col items-center justify-start space-y-2 bg-products-pattern bg-cover p-4">
      <section id="products">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:gap-12 p-4 w-full">
          <div className="p-4 flex items-center gap-4">
            <img
              src={data['section-products'].pic1.url}
              alt={data['section-products'].pic1.alt}
              className="object-cover max-w-[30vw] sm:h-[25vw] sm:max-w-[200px] rounded-md border-2 border-blue-gray_Custom"
            />
            <img
              src={data['section-products'].pic2.url}
              alt={data['section-products'].pic2.alt}
              className="object-cover max-w-[45vw] sm:h-[20vw] sm:w-[30vw] sm:max-w-[300px] rounded-md border-2 border-blue-gray_Custom"
            />
          </div>
          <div className="text-center sm:text-start sm:max-w-[30vw]">
            <p className="font-bold text-xl sm:text-3xl sm:mb-4 ShadowText">
              {data['section-products'].title}
            </p>
            <p className="text-[14px] sm:text-md ShadowText sm:leading-8">
              {data['section-products'].paragraph}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
