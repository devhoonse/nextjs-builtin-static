import Image from "next/image";

/**
 * 이미지 최적화 서비스를 이용할 외부 URL 을 지정합니다.
 * @param src
 * @param width
 * @param quality
 */
function loader({ src, width, quality }: { src: string; width: number; quality: number; }) {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
}

/**
 * 페이지 : /image-page
 * @constructor
 */
function ImagePage() {
  return (
    <div
      style={{
        width: 500,
        height: 200,
        position: 'relative'
      }}
    >
      <Image fill
             style={{ objectFit: 'cover' }}
             // loader={loader}
             src="https://images.unsplash.com/photo-1605460375648-278bcbd579a6"
             alt="A beautiful English Setter"
      />
    </div>
  );
}

export default ImagePage;
