import React, { memo } from 'react';
import { CarouselContainer,  Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

interface IVideo {
  titulo: string;
  url: string;
}

interface ILink {
  text: string;
  url: string;
}

export interface ICategory {
  titulo: string;
  cor: string;
  link_extra: ILink;
  videos: Array<IVideo>;
};

interface IProps {
  ignoreFirstVideo?: any;
  category: ICategory;
};

const Carousel : React.FC<IProps> = ({ignoreFirstVideo, category}) => {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  return (
    <CarouselContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </ExtraLink>
          }
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </CarouselContainer>
  );
}

export default memo(Carousel);
