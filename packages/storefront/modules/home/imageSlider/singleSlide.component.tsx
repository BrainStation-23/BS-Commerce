import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import { productInterface } from '@/modules/home/imageSlider/models/index';
import TextButton from '@/modules/common/buttons/textButton';

const SinglSlide = (props: { product: productInterface }) => {
  const { t } = useTranslation();

  const { title, description, deatils, image } = props.product;
  return (
    <div className="grid h-72 items-center dark:text-black sm:h-72 md:h-72 lg:h-80 xl:h-96 2xl:h-96">
      <div className="absolute inset-0 scale-125 md:inset-0 md:scale-125 lg:scale-100 ">
        <Image src={image} alt="..." layout="fill" />
      </div>
      <div className="container z-10 mx-auto text-center font-[sans-serif] md:pl-8 md:text-left lg:pt-4 xl:pl-4 ">
        <h1 className=" text-2xl font-bold sm:text-2xl md:text-3xl lg:text-left lg:text-4xl xl:text-5xl">
          {title}
        </h1>
        <h2 className="xl:text-4xlh text-xl font-thin md:text-2xl lg:mt-3 lg:text-3xl 2xl:text-5xl">
          {description}
        </h2>
        <div className="mx-auto mt-1 w-3/4 text-sm font-thin md:ml-0 md:w-2/5 md:text-base lg:mt-4 lg:w-11/12">
          {deatils}
        </div>
        <div className="mt-3 lg:mt-8">
          <TextButton
            className="left-0 rounded-lg bg-primary py-2 px-4 text-xs font-bold text-white hover:bg-neutral-700 dark:bg-dark_primary sm:text-xs md:text-sm xl:text-base"
            text={t('home:read_more').toUpperCase()}
          />
        </div>
      </div>
    </div>
  );
};

export default SinglSlide;
