/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // loader: 'imgix', // 외부 서비스인 imgix 를 이용해 이미지 최적화를 실행합니다.
    // path: '/', // imgix 를 이용하기 위해서는 path 를 함께 지정해야 합니다.
    // 해당 도메인으로부터의 이미지는 최적화 대상입니다.
    domains: ['images.unsplash.com']
  }
}

module.exports = nextConfig
